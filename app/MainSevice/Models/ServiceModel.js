database = require('../DataBase/database.js')
const string = require('../../../assets/strings')


class ServiceModel {
    constructor() {

    }

    async single_game(rank) {
        let query = `select * from vgsales where "Rank"=${rank}`
        return await database.query(query)
    }
    async like_name(name) {
        let query = `select * from vgsales where "Name" like '%${name}%'`
        return await database.query(query)
    }
}

module.exports = ServiceModel