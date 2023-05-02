const notificacionesService = require("../services/notificacionesService")



const getNotificaciones = async (req,res)=>{
  try{
    const {id_usuario} = req.params
    const notificaciones = await notificacionesService.getNotificaciones(id_usuario);
    res.json({status:200,notificaciones})
  }catch(error){
    res.status(400).json({status:400,...error})
  }
}


const createNotificacion = async (req,res)=>{
    try{
        let notificaciones = req.body
     
        await notificacionesService.createNotificacion(notificaciones)
        res.json({status:200,message:"Notificacion creado exitosamente"})
    }catch(error){
      res.status(400).json({status:400,...error})
      } 
}



module.exports = {
    getNotificaciones,
    createNotificacion
}