let data = [];
const queryString = require('query-string');
const string = require('../../assets/strings')


class DataPreparation {
    constructor() {
    }

    get startPreparation() {
        return (req, res, next) => {
            console.log(req.toString())
            if (req.method === string.GET) {
                if (req.url.includes('?')) {
                    let str = req.url.split('?')
                    req.url = str[0]
                    req.data = queryString.parse(str[1]);

                }
                next()
            } else if (req.headers['content-type'].substring(0, 9) === 'multipart') {
                next()
            } else {
                req.on(string.DATA, function (chunk) {
                    data.push(chunk);
                })
                req.on(string.END, function () {
                    try {
                        req.data = JSON.parse(Buffer.concat(data).toString());
                        data = []
                        next()

                    } catch (e) {
                        console.log(e)
                        res.end(JSON.stringify({error: string.RESPONSE_ERROR_SEND_PARAMS, status: 404}))
                    }
                })
            }
        }
    }

}

module.exports = DataPreparation