const UserController = require('../Controllers/UserController')
let controller = new UserController()
const DataPreparation = require('../../../MiddleWares/DataPreparation/DataPreparation')
let prepare = new DataPreparation()

let schemas = require('../Schema/SchemaValidUser')
const DataValidation = require('../../../MiddleWares/DataValidation/DataValidation')
let validUser = new DataValidation(schemas)
const SendRequestAccessControl = require('../../../MiddleWares/SendRequestAccessControl/SendRequestAccessControl')
let accessControl = new SendRequestAccessControl()
module.exports =
    {
        '/user/login': {
            POST: {
                function: controller.login,
                middleware: [prepare.startPreparation, validUser.validate, accessControl.send]
            }
        },
        '/user/signUp': {
            POST: {
                function : controller.signUp,
                middleware: [prepare.startPreparation, validUser.validate, accessControl.send, controller.checkUserIsExist]
            }

        },
        '/user/changePassword': {
            POST: {
                function: controller.changePassword,
                middleware: [prepare.startPreparation, validUser.validate, accessControl.send ]
            },

        },
        '/user/logout': {
            GET: {
                function: controller.logout,
                middleware: [prepare.startPreparation, accessControl.send ]
            },

        },

    }

