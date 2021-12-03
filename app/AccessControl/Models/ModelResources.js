const  database = require('../DataBase/database')

class ModelResources {

    async addResource(api) {
        let query = `insert into resource (api) values ('${api}') returning api`
        return await database.query(query)
    }
}

module.exports = ModelResources