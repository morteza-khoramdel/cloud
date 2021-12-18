const ModelResource = require('../Models/ModelResources')
let model = new ModelResource()
const string = require('../../../assets/strings')

class ControllerResources {
    async addResource(req, res) {
        try {
            let resData = await model.addResource(req.data.api)
            console.log(resData)
            if (resData.rowCount) {
                res.statusCode = 200
                res.end(string.RESPONSE_ACCEPT_ADD_RESOURCE);
            } else {
                res.statusCode = 404
                res.end(string.RESPONSE_ERROR_ADD_RESOURCE);
            }
        } catch (e) {
            console.log(e)
        }
    }


}

module.exports = ControllerResources