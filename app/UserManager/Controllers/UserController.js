const UserModel = require('../Models/UserModel')
let model = new UserModel()
const string = require('../../../assets/strings')
const GenerateAccessToken = require('../../../MiddleWares/CheckTokens/GenerateAccessToken')
const generateAccessToken = new GenerateAccessToken()
const VerifyJWT = require('../../../MiddleWares/CheckTokens/VerifyJWT')
const verifyJWT = new VerifyJWT()
const {Base64} = require('js-base64');
const fs = require('fs');

class UserController {
    constructor() {

    }

    get login() {
        return async (req, res) => {
            let resData = await model.checkLogin(req.data)

            if (resData.rowCount) {
                req.data.token = generateAccessToken.generate({
                    email: req.data.email,
                    role: resData.rows[0].name
                })
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': '*',
                    'Set-Cookie': `token=${req.data.token};Path=/;}`
                });
                res.end(JSON.stringify({message: string.USER_FOUND, status: 200}))
            } else {
                res.end(JSON.stringify({error: string.USER_NOT_FOUND, status: 404}))
            }
        }
    }

    get checkUserIsExist() {
        return async (req, res, next) => {
            let resIsExist = await model.checkUserIsExist(req.data)
            if (resIsExist.rowCount) {
                res.end(JSON.stringify({error: string.RESPONSE_ERROR_SIGN_UP, status: 404}))
            } else {
                next()
            }

        }
    }

    get signUp() {
        return async (req, res) => {
            if (req.data.url_img != null) {
                let img = Base64.toUint8Array(req.data.url_img)
                await fs.writeFileSync(process.env.SAVE_IMAGES_USER + '\\' + req.data.email + ".jpg", img);
                req.data.url_img = process.env.SAVE_IMAGES_USER + '\\' + req.data.email + ".jpg"
            }
            let resData = await model.insertRow(req.data)

            if (!resData.rowCount) {
                res.end(JSON.stringify({error: string.RESPONSE_ERROR_INSERT_ROW, status: 404}))
            } else {
                req.data.token = generateAccessToken.generate({
                    email: req.data.email,
                    role: req.data.role
                })
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': '*',
                    'Set-Cookie': `token=${req.data.token};Path=/;}`
                });
                res.end(JSON.stringify({message: string.RESPONSE_ACCEPT_INSERT_ROW, status: 200}));
            }
        }

    }


    get changePassword() {
        return async (req, res) => {
            let resChange = await model.changePassword(req, res)
            if (resChange.rowCount) {
                res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
                res.end(JSON.stringify({message: string.RESPONSE_ACCEPT_CHANGE_PASSWORD, status: 200}))
            } else {
                res.end(JSON.stringify({error: string.USER_NOT_FOUND, status: 400}))
            }


        }
    }

    get logout() {
        return async (req, res) => {
            res.setHeader('Set-Cookie', `token=logout;Path=/;}`)
            res.end(JSON.stringify({message: string.RESPONSE_ACCEPT_LOGOUT, status: 200}))
        }
    }

    get getProfile() {
        return async (req, res) => {
            let resChange = await model.getProfile(req.data.name)
            if (resChange.rowCount) {
                try {
                    let buffer = await this._getByteArray(resChange.rows[0].url_img)
                    let base64Decode = Base64.btoa(buffer)
                    resChange.rows[0].url_img = base64Decode
                    res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
                    res.end(JSON.stringify({message: resChange.rows, status: 200}))
                } catch (e) {
                    res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
                    res.end(JSON.stringify({message: resChange.rows, status: 200}))
                }
            } else {
                res.end(JSON.stringify({error: string.USER_NOT_FOUND, status: 400}))
            }

        }
    }

    get _getByteArray() {
        return async (filePath) => {
            let fileData = fs.readFileSync(filePath).toString('hex');
            let result = []
            for (let i = 0; i < fileData.length; i += 2)
                result.push('0x' + fileData[i] + '' + fileData[i + 1])
            return result;
        }
    }
}

module.exports = UserController