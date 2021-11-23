const nodeMailer = require("nodemailer");
const queryString = require('query-string');
const string = require('../../assets/strings')

class VerifyEmail {

    constructor() {

    }

    get send() {
        return (req, res, next) => {
            const query = queryString.stringify(req.data);
            const transporter = nodeMailer.createTransport({
                service: string.GMAIL,
                auth: {
                    user: process.env.USERNAME_GMAIL,
                    pass: process.env.PASSWORD_GMAIL
                }
            });
            transporter.sendMail({
                from: process.env.USERNAME_GMAIL,
                to: req.data.email,
                subject: "verify",
                text: 'Verify  Email',
                html: `<a href=${process.env.BASE_URL_CLIENT}/verifyEmail?${query}>Verify Your Email</a>`
            }, function (err, data) {
                if (err) {
                    console.log(err)
                    res.end(JSON.stringify({error: string.RESPONSE_ERROR_SEND_EMAIL, status: 404}))

                } else {
                    if (next != null) {
                        next()
                    } else
                        res.end(JSON.stringify({message: string.RESPONSE_ACCEPT_SEND_EMAIL, status: 200}))
                }
            });

        }
    }

}

module.exports = VerifyEmail

