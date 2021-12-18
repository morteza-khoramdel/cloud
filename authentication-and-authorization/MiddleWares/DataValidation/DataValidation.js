const Ajv = require('ajv');
const ajv = new Ajv();
const string = require('../../assets/strings')

class DataValidation {

    constructor(entireSchema) {
        this.schema = entireSchema
    }

    get validate() {
        return (req, res, next) => {
            let eachSchemaUrl = req.url.split('/')
            let validate = ajv.compile(this.schema[eachSchemaUrl[eachSchemaUrl.length - 1] + string.SCHEMA]);
            let valid = validate(req.data);
            if (!valid) {
                console.log(validate.errors);
                res.end(JSON.stringify({error: validate.errors[0].message, status: 404}));
                return
            }
            next()
        }
    }
}

module.exports = DataValidation
