const database = require('../DataBase/database')

class ModelRole {
    async addRole(name) {
        return await database.query(`insert into roles (name) values ('${name}') returning name`)
    }
}

module.exports = ModelRole