const database = require('../DataBase/database')

class ModelOperations {
    async addOperation(method) {
        return await database.query(`insert into operation (method) values ('${method}') returning method`);

    }
}

module.exports = ModelOperations