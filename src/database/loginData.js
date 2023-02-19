import {getConnection} from "../database/database"

const getUser = async (user,pass)=>{
    try{
    const connection = await  getConnection();
    const result = await connection.query("SELECT * FROM usuario WHERE user=? and password=? limit 1",[user,pass])  
    connection.end()    
    return result
    }catch(error){
        return error
    } 
}


module.exports = {
    getUser
}