database = require('../DataBase/database.js')
const string = require('../../../assets/strings')


class UserModel {
    constructor() {

    }

    async checkLogin(person) {
        return await database.query(`select email , r.name
        from "user" inner join user_role ur on "user".id = ur.id_user inner join role r on ur.id_role = r.id
        where email = '${person[string.IDENTIFICATION_KEY]}' and hash_password = '${person.hash_password}'`)
    }

    async checkUserIsExist(person) {
        return await database.query(`select email from "user" where email='${person[string.IDENTIFICATION_KEY]}'`)
    }

    async insertRow(person) {
        return await database.query(
            `with new_order as (
                insert into "user" (hash_password, email, name , url_img) values ('${person.hash_password}', '${person.email}', '${person.name}' ,'${person.url_img}')
                 returning id)
             insert into "user_role" (id_user, id_role)
             values ((select id from new_order) ,(select id from role where name  ='${person.role}')) returning id_user ;`);
    }

    async changePassword(req, res) {
        let error = {rowCount: 0};
        let resExist = await database.query(`select email from "user" where email='${req.dataVerify['email']}';`)
        if (resExist.rowCount) {
            return await database.query(`UPDATE "user" SET password = '${req.data['password']}' WHERE email = '${req.dataVerify['email']}' returning email`)
        } else {
            return  error
        }


    }
    async getProfile(name){
        return await database.query(`select  email , registery_date , url_img , name  from "user" where name = '${name}'`)
    }

}

module.exports = UserModel