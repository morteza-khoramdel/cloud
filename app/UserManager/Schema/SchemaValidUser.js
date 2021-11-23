let loginSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        email: {type: 'string'},
        hash_password: {type: 'string'},
    }
}
let signUpSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        email: {type: 'string'},
        hash_password: {type: 'string'},
        url_img : {type : 'string'},
        name: {type: 'string'},
        role: {type: 'string'}
    }
}


let changePasswordSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        email: {type: 'string'},
        role: {type: 'string'},
        hash_password: {type: 'string'}

    }
}
let getprofileSchema  = {
    type: 'object',
    additionalProperties: false,
    properties: {
        name: {type: 'string'}
    }
}
module.exports = {loginSchema, signUpSchema, changePasswordSchema, getprofileSchema}