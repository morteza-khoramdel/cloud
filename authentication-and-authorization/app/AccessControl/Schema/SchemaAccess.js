let roleSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        name: {type: 'string'}
    }
}
let resourceSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        api: {type: 'string'}
    }
}
let operationSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        method: {type: 'string'}
    }
}
let check_accessSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        resource: {type: 'string'},
        role: {type: 'string'},
        operation: {type: 'string'}
    }
}
let assign_accessSchema={
    type: 'object',
    additionalProperties: false,
    properties: {
        operation: {type: 'string'},
        resource: {type: 'string'},
        role: {type: 'string'}
    }
}
module.exports = {roleSchema, resourceSchema, operationSchema,check_accessSchema, assign_accessSchema}