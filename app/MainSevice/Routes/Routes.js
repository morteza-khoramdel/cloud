
const DataPreparation = require('../../../MiddleWares/DataPreparation/DataPreparation')
let prepare = new DataPreparation()
let schemas = require('../Schema/SchemaAccess')
const DataValidation = require('../../../MiddleWares/DataValidation/DataValidation')
let validAccess = new DataValidation(schemas)
const ServiceController = require('../Controllers/ServiceController')
let controllerService = new ServiceController()
const SendRequestAccessController = require('../../../MiddleWares/SendRequestAccessControl/SendRequestAccessControl')
let sendRequestAccessControl = new SendRequestAccessController()
const VerifyJWT  =  require('../../../MiddleWares/CheckTokens/VerifyJWT')
let verifyJWT = new VerifyJWT()
module.exports =
    {
        '/game/single': {
            GET: {
                function: controllerService.single_game,
                middleware: [prepare.startPreparation, validAccess.validate]
            }
        }
    }

