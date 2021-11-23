const  database = require('../DataBase/database')

class ModelResources {

    async addResource(api) {
        return await database.query(`insert into resource (api) values ('${api}') returning api`)
    }
}

module.exports = ModelResources