const ModelAccessControl = require('../Models/ModelAccessControl')
let model = new ModelAccessControl()
const string = require('../../../assets/strings')

class ControllerAccessControl {
    async checkAccess(req, res) {
        let resData = await model.checkAccess(req.data.resource, req.data.role, req.data.operation)
        if (resData.rowCount) {
            res.statusCode = 200
            res.end(string.RESPONSE_ACCEPT_ACCESS_CONTROL);
        } else {
            res.statusCode = 404
            res.end(string.RESPONSE_ERROR_ACCESS_CONTROL);
        }
    }
    async assignAccess(req ,res) {
        let resData = await model.assignAccess(req.data.resource , req.data.role , req.data.operation)
        if (resData.rowCount) {
            res.statusCode = 200
            res.end(string.RESPONSE_ACCEPT_ASSIGN_CONTROL);
        } else {
            res.statusCode = 500
            res.end(string.RESPONSE_ERROR_ASSIGN_CONTROL);
        }
    }

}

module.exports = ControllerAccessControl