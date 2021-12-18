const DataPreparation = require('../../../MiddleWares/DataPreparation/DataPreparation')
let prepare = new DataPreparation()
let schemas = require('../Schema/SchemaAccess')
const DataValidation = require('../../../MiddleWares/DataValidation/DataValidation')
let validAccess = new DataValidation(schemas)
const ServiceController = require('../Controllers/ServiceController')
let controllerService = new ServiceController()
const SendRequestAccessController = require('../../../MiddleWares/SendRequestAccessControl/SendRequestAccessControl')
let sendRequestAccessControl = new SendRequestAccessController()
const VerifyJWT = require('../../../MiddleWares/CheckTokens/VerifyJWT')
let verifyJWT = new VerifyJWT()
module.exports =
    {
        '/game/single': {
            GET: {
                function: controllerService.single_game,
                middleware: [prepare.startPreparation, validAccess.validate,sendRequestAccessControl.send]
            }
        },
        '/game/like_name': {
            GET: {
                function: controllerService.like_name,
                middleware: [prepare.startPreparation, validAccess.validate,sendRequestAccessControl.send]
            }
        },

        '/game/filter_platform': {
            GET: {
                function: controllerService.filter_platform,
                middleware: [prepare.startPreparation, validAccess.validate ,sendRequestAccessControl.send]
            }
        },
        '/game/filter_year': {
            GET: {
                function: controllerService.filter_year,
                middleware: [prepare.startPreparation, validAccess.validate,sendRequestAccessControl.send]
            }
        },
        '/game/bestsellers': {
            GET: {
                function: controllerService.bestsellers,
                middleware: [prepare.startPreparation, validAccess.validate,sendRequestAccessControl.send]
            }
        },
        '/game/sell_europe_more_than_us': {
            GET: {
                function: controllerService.sell_europe_more_than_us,
                middleware: [prepare.startPreparation,sendRequestAccessControl.send]
            }
        }
    }

