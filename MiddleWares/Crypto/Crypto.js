const crypto = require('crypto')

class Crypto {
    generateSalt() {
        crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex')
            .slice(0, length)
    }

    passwordHash(pass, addedSalt) {

        const hashVal = crypto
            .createHmac('sha512', addedSalt)
            .update(pass)
            .digest('hex')

        return {
            salt: addedSalt,
            hashedPassword: hashVal
        }
    }

    passwordVerification(pass, salt, hash) {
        const hashedPass = this.passwordHash(pass, salt)
        return hashedPass.hashedPassword === hash
    }
}

module.exports = Crypto