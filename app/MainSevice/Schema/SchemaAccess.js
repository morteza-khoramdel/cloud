let singleSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        rank: {type: 'string'},
    }
}
let like_nameSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        name: {type: 'string'},
    }
}
let filter_platformSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        n: {type: 'string'},
        platform: {type: 'string'},

    }
}
let filter_yearSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        n: {type: 'string'},
        year: {type: 'string'},

    }
}
let filter_categorySchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        n: {type: 'string'},
        category: {type: 'string'},

    }
}
module.exports = {singleSchema, like_nameSchema, filter_platformSchema, filter_yearSchema, filter_categorySchema}