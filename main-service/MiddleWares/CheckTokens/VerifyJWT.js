const jwt = require("jsonwebtoken");
const string = require('../../assets/strings')
const Cookie = require('../Cookie/cookie')
let cookie = new Cookie()

class VerifyJWT {


    get verify() {
        return async (req, res, next) => {
            try {
                let token = cookie.getCookie(req, 'token')
                req.dataVerify = jwt.verify(token, process.env.TOKEN_SECRET);
                if (next != null)
                    next()
            } catch (e) {
                res.end(JSON.stringify({error: string.UN_AUTHORIZE, status: 401}))
            }
        }
    }
}

module.exports = VerifyJWT