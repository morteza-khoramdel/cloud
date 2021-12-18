const ModelOperation = require('../Models/ModelOperations')
let model = new ModelOperation()
const string = require('../../../assets/strings')

class ControllerOperations {
    async addOperation(req, res) {
        try {
            let resData = await model.addOperation(req.data.method)
            if (resData.rowCount) {
                res.statusCode = 200
                res.end(string.RESPONSE_ACCEPT_ADD_OPERATIONS);
            } else {
                res.statusCode = 404
                res.end(string.RESPONSE_ERROR_ADD_OPERATIONS);
            }
        }catch (e) {
            console.log(e)
        }
    }

}

module.exports = ControllerOperations