let loginSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        email: {type: 'string'},
        password: {type: 'string'},
    }
}
let signUpSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        email: {type: 'string'},
        password: {type: 'string'},
        name: {type: 'string'},
        role: {type: 'string'}
    }
}


let changePasswordSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        email: {type: 'string'},
        password: {type: 'string'}

    }
}
module.exports = {loginSchema, signUpSchema, changePasswordSchema}