const UserModel = require('../Models/ServiceModel')
let model = new UserModel()
const string = require('../../../assets/strings')
const GenerateAccessToken = require('../../../MiddleWares/CheckTokens/GenerateAccessToken')
const generateAccessToken = new GenerateAccessToken()
const VerifyJWT = require('../../../MiddleWares/CheckTokens/VerifyJWT')
const verifyJWT = new VerifyJWT()
const {Base64} = require('js-base64');
const fs = require('fs');

class ServiceController {
    constructor() {

    }


    get single_game() {
        return async (req, res, next) => {
            try {
                let resIsExist = await model.single_game(req.data.rank)
                if (resIsExist.rowCount) {
                    res.end(JSON.stringify({message: resIsExist.rows[0], status: 200}))
                } else {
                    res.end(JSON.stringify({error: string.RESPONSE_ERROR_GET_DATA, status: 404}))

                }
            } catch (e) {
                res.end(JSON.stringify({error: string.RESPONSE_ERROR_GET_DATA, status: 404}))

            }


        }
    }
    get like_name() {
        return async (req, res, next) => {
            try {
                let resIsExist = await model.like_name(req.data.name)
                if (resIsExist.rowCount) {
                    res.end(JSON.stringify({message: resIsExist.rows[0], status: 200}))
                } else {
                    res.end(JSON.stringify({error: string.RESPONSE_ERROR_GET_DATA, status: 404}))

                }
            } catch (e) {
                res.end(JSON.stringify({error: string.RESPONSE_ERROR_GET_DATA, status: 404}))

            }


        }
    }
}

module.exports = ServiceController