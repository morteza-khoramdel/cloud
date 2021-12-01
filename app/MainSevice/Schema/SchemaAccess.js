
let singleSchema={
    type: 'object',
    additionalProperties: false,
    properties: {
        rank: {type: 'string'},
    }
}
let like_nameSchema={
    type: 'object',
    additionalProperties: false,
    properties: {
        name: {type: 'string'},
    }
}
module.exports = {singleSchema,like_nameSchema}