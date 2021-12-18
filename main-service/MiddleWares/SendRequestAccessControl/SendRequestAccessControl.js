const axios = require('axios')
const string = require('../../assets/strings')
const VerifyJWT = require('../../MiddleWares/CheckTokens/VerifyJWT')
const verifyJWT = new VerifyJWT()

class SendRequestAccessControl {
    constructor() {
    }

    get send() {
        return async (req, res, next) => {
            try {
                console.log(req.headers.host)
                if (req.headers.host !== process.env.LOCAL_HOST) {
                    if (req.headers.cookie != null) {
                        await verifyJWT.verify(req, res)
                    }
                    let role = ''
                    if (req.dataVerify != null) {
                        if (req.data != null)
                            req.data.role = req.dataVerify.role
                        role = req.dataVerify.role
                    } else {
                        role = 'VISITOR'
                    }
                    let params = {
                        resource: req.url,
                        role: role,
                        operation: req.method
                    }
                    params = JSON.stringify(params)

                    let response = await axios.post('http://' + process.env.BASE_URL_AUTHENTICATION_AND_AUTHORIZATION + '/access/check_access', params);
                    console.log(response)
                    next();
                } else {
                    next()
                }
            } catch (e) {
                res.statusCode = 401
                res.end(JSON.stringify({error: string.RESPONSE_ERROR_ACCESS_CONTROL, status: 401}));
                console.log(e)
            }

        }
    }


}

module.exports = SendRequestAccessControl