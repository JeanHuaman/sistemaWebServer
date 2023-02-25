import mysql from "promise-mysql"
import {configData} from "./../config"


const getConnection = ()=>{
    const connection = mysql.createPool({
        connectionLimit:100,
        host:configData.host,
        database:configData.database,
        user:configData.user,
        password:configData.password
    })
    
    
    return connection
}
if(getConnection()){console.log("Conexion a la BD");}
    else{console.log("ERROR al conectarse a la BD");}


module.exports ={
    getConnection
}