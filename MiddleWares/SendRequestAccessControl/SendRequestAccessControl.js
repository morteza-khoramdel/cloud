const axios = require('axios')
const string = require('../../assets/strings')
const VerifyJWT = require('../../MiddleWares/CheckTokens/VerifyJWT')
const verifyJWT = new VerifyJWT()

class SendRequestAccessControl {
    constructor() {
    }

    get send() {
        return async (req, res, next) => {
            if (req.headers.host !== process.env.BASE_URL_BACKEND) {
                if (req.headers.cookie != null) {
                        await verifyJWT.verify(req, res)
                }
                let role = ''
                if (req.dataVerify != null) {
                    role = req.dataVerify.role
                }else {
                    role = 'VISITOR'
                }
                let params = {
                    resource: req.url,
                    role: role,
                    operation: req.method
                }
                params = JSON.stringify(params)
                try {
                    await axios.post(process.env.BASE_URL_BACKEND + '/access/check_access', params);
                    next();
                } catch (e) {
                    res.statusCode = 401
                    res.end(JSON.stringify({error: string.RESPONSE_ERROR_ACCESS_CONTROL, status: 401}));
                }

            } else {
                next()
            }
        }
    }


}

module.exports = SendRequestAccessControl