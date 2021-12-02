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

    async filter_platform(platform, n) {
        let query = `select  * from vgsales where "Platform" = '${platform}' limit ${n} `
        return await database.query(query)
    }

    async filter_year(year, n) {
        let query = `select  * from vgsales where "Year" = '${year}' limit ${n} `
        return await database.query(query)
    }

    async filter_category(category, n) {
        let query = `select  * from vgsales where "Genre" = '${category}' limit ${n} `
        return await database.query(query)
    }
}

module.exports = ServiceModel