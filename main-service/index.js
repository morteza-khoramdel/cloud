let events = require('events');
const fs = require('fs')
require('dotenv').config({path: './main-service.env'})
const Server = require("my-server-part-morteza");
const Router = require("my-router-part-morteza")
let eventEmitter = new events.EventEmitter();
let router = new Router(eventEmitter)
const appDirectory = 'app/';
readAllRoutes().then((routes) => {
    router.setRoutes(routes)
    console.log(routes)
})
let server = new Server(process.env.HOST_SERVER, process.env.PORT_SERVER, router)
server.start()

async function readAllRoutes() {
    let routes = {}
    await fs.readdirSync(appDirectory).forEach(file => {
        for (const property in require('./' + appDirectory + file + '/index.js')) {
            routes[property] = require('./' + appDirectory + file + '/index.js')[property]
            for (obj in require('./' + appDirectory + file + '/index.js')[property]) {
                if (require('./' + appDirectory + file + '/index.js')[property][obj]['function'] != null) {
                    require('./' + appDirectory + file + '/index.js')[property][obj]['middleware']
                        .push(require('./' + appDirectory + file + '/index.js')[property][obj]['function'])
                }
            }
        }
    });
    return routes
}
