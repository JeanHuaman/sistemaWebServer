const administradorData = require("../database/administradorData")

const getAllAdministrador = async ()=>{
    const jsonAllAdministrador = await administradorData.getAllAdministrador();
    return jsonAllAdministrador
}
const getAdministradorId = async (id)=>{
    const administrador = await administradorData.getIdAdministrador(id)
    return administrador;
}
const postAdministrador = async (administrador)=>{
    const createAdministrador = await administradorData.createAdministrador(administrador)
    return createAdministrador;
}
const putAdministrador = async (administrador,id)=>{
    const updateAdministrador = await administradorData.updateAdministrador(administrador,id)
    return updateAdministrador;
}
const deleteAdministrador = async (id)=>{
    const deletedAdministrador = await administradorData.deleteAdministrador(id)
    return deletedAdministrador;
}


module.exports ={
    getAllAdministrador,
    getAdministradorId,
    postAdministrador,
    putAdministrador,
    deleteAdministrador

}