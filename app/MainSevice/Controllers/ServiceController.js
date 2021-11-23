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
            let resIsExist = await model.single_game(req.data.rank)
            if (resIsExist.rowCount) {
                res.end(JSON.stringify({message: string.RESPONSE_ERROR_SIGN_UP, status: 404}))
            } else {
                next()
            }

        }
    }

}

module.exports = ServiceController