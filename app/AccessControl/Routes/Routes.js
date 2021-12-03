const ControllerOperation = require('../Controllers/ControllerOperations')
let controllerOperation = new ControllerOperation()
const ControllerResource = require('../Controllers/ControllerResources')
let controllerResources = new ControllerResource()
const ControllerRoles = require('../Controllers/ControllerRole')
let controllerRoles = new ControllerRoles()
const DataPreparation = require('../../../MiddleWares/DataPreparation/DataPreparation')
let prepare = new DataPreparation()
let schemas = require('../Schema/SchemaAccess')
const DataValidation = require('../../../MiddleWares/DataValidation/DataValidation')
let validAccess = new DataValidation(schemas)
const ControllerAccessControl = require('../Controllers/ControllerAccessControl')
let controllerAccessControl = new ControllerAccessControl()
const SendRequestAccessController = require('../../../MiddleWares/SendRequestAccessControl/SendRequestAccessControl')
let sendRequestAccessControl = new SendRequestAccessController()
const VerifyJWT  =  require('../../../MiddleWares/CheckTokens/VerifyJWT')
let verifyJWT = new VerifyJWT()
module.exports =
    {
        '/access/check_access': {
            POST: {
                function: controllerAccessControl.checkAccess,
                middleware: [prepare.startPreparation, validAccess.validate ]
            }
        },
        '/access/role': {
            POST: {
                function: controllerRoles.addRole,
                middleware: [prepare.startPreparation, validAccess.validate,sendRequestAccessControl.send ]
            }
        },
        '/access/resource': {
            POST: {
                function: controllerResources.addResource,
                middleware: [prepare.startPreparation, validAccess.validate , sendRequestAccessControl.send]
            },
        },
        '/access/operation': {
            POST: {
                function: controllerOperation.addOperation,
                middleware: [prepare.startPreparation, validAccess.validate , sendRequestAccessControl.send]
            }
        },
        '/access/assign_access': {
            POST: {
                function: controllerAccessControl.assignAccess,
                middleware: [prepare.startPreparation, validAccess.validate ,sendRequestAccessControl.send]
            }
        }
    }

