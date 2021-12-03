const database = require('../DataBase/database')

class ModelOperations {
    async addOperation(method) {
        let query = `insert into operation (method) values ('${method}') returning method`
        return await database.query(query);

    }
}

module.exports = ModelOperations