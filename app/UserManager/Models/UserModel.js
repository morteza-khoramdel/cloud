database = require('../DataBase/database.js')
const string = require('../../../assets/strings')


class UserModel {
    constructor() {

    }

    async checkLogin(person) {
        return await database.query(`select email , r.name
        from "user" inner join "user-role" ur on "user".id = ur.id_user inner join roles r on ur.id_role = r.id
        where email = '${person[string.IDENTIFICATION_KEY]}' and password = '${person.password}'`)
    }

    async checkUserIsExist(person) {
        return await database.query(`select email from "user" where email='${person[string.IDENTIFICATION_KEY]}'`)
    }

    async insertRow(person) {
        return await database.query(
            `with new_order as (
                insert into "user" (password, email, name) values ('${person.password}', '${person.email}', '${person.name}' )
                 returning id)
             insert into "user-role" (id_user, id_role)
             values ((select id from new_order) ,(select id from roles where name  ='${person.role}')) returning id_user ;`);
    }

    async changePassword(req) {
        let error = {rowCount: 0};
        let resExist = await database.query(`select email from "user" where email='${req.dataVerify['email']}';`)
        if (resExist.rowCount) {
            return await database.query(`UPDATE "user" SET password = '${req.data['password']}' WHERE email = '${req.dataVerify['email']}' returning email`)
        } else {
            return  error
        }


    }


}

module.exports = UserModel