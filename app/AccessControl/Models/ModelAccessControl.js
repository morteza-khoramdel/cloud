const database = require('../DataBase/database')
class ModelAccessControl {

    async checkAccess(resource, role, operation) {
        return await database.query(
            `select re.api , o.method  , ro.name from access inner join operation o on access.id_operation = o.id
             inner join resource re on access.id_resource = re.id inner join role ro on access.id_role = ro.id
             where re.api = '${resource}' and o.method = '${operation}' and ro.name = '${role}'`);

    }
    async assignAccess(resource, role, operation){
        let error = {rowCount : 0};
        let resResource = await database.query(`select id from resource where api = '${resource}';`)
        let resRole = await database.query(`select id from role where name = '${role}';`)
        let resOperation  =await database.query(`select id from operation where method = '${operation}';`)
        if (resOperation.rowCount && resResource.rowCount && resRole.rowCount){
           return await database.query(`insert into access (id_resource, id_role, id_operation) VALUES ('${resResource.rows[0].id}','${resRole.rows[0].id}','${resOperation.rows[0].id}');`)
        }else {
            return  error
        }

    }
}

module.exports = ModelAccessControl