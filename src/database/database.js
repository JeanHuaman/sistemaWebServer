import mysql from "promise-mysql"
import {configData} from "./../config"

let globalPool = undefined
export async function getConnection (){
    if (typeof globalPool !== "undefined") {
        return globalPool
    }
    globalPool = await mysql.createPool({
        connectionLimit:10,
        host:configData.host,
        database:configData.database,
        user:configData.user,
        password:configData.password
    })
    
    
    return globalPool
}
if(getConnection()){console.log("Conexion a la BD");}
    else{console.log("ERROR al conectarse a la BD");}



// module.exports ={
//     getConnection
// }