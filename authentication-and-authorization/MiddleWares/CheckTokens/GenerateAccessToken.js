const jwt = require("jsonwebtoken");

class GenerateAccessToken {

    constructor() {
    }

    generate(config) {
        return jwt.sign(config, process.env.TOKEN_SECRET, {expiresIn: '1d'})

    }
}

module.exports = GenerateAccessToken