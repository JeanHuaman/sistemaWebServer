import {config} from "dotenv"
config()
export const configData= { 
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD
}

export const security = {
    secretKey : process.env.SECRET_KEY
}