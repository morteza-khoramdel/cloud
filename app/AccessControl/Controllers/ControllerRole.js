const ModelRole = require('../Models/ModelRole')
let model = new ModelRole()
const string = require('../../../assets/strings')

class ControllerRole {
    async addRole(req, res) {
            let resData = await model.addRole(req.data.name)
            if (resData.rowCount) {
                res.statusCode = 200
                res.end(string.RESPONSE_ACCEPT_ADD_ROLES);
            } else {
                res.statusCode = 404
                res.end(string.RESPONSE_ERROR_ADD_ROLES);
            }
    }

}

module.exports = ControllerRole