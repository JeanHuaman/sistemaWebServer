import mysql from "promise-mysql"
import config from "./../config"


const getConnection = ()=>{
    const connection = mysql.createConnection({
        host:config.host,
        database:config.database,
        user:config.user,
        password:config.password
    })
    
    
    return connection
}
if(getConnection()){console.log("Conexion a la BD");}
    else{console.log("ERROR al conectarse a la BD");}


module.exports ={
    getConnection
}