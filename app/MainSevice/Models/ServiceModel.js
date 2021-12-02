database = require('../DataBase/database.js')


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
    async bestsellers(platform ,  year){
        let query = `select * from vgsales where "Year" = '${year}' and "Platform" = '${platform}' order by "Global_Sales" desc limit 5`;

        return  await  database.query(query)
    }
    async sell_europe_more_than_us(){
        let query = `select * from vgsales where "EU_Sales" > "NA_Sales"`
        return await database.query(query)
    }
}

module.exports = ServiceModel