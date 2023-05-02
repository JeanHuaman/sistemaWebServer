const notificacionData = require("../database/notificacionData")

const getNotificaciones = async (id_usuario)=>{
    try{
        const notificaciones = await notificacionData.getNotificaciones(id_usuario)
        return notificaciones
    } catch (error) {
        return error
    }
}

const createNotificacion = async (notificaciones)=>{
    try {
        await notificacionData.createNotificacion(notificaciones)
        return
    } catch (error) {
        return error
    }
    
}


module.exports ={
    createNotificacion,
    getNotificaciones
}