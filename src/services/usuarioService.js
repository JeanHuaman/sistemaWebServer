const usuarioData = require("../database/usuarioData")

const getAllUsuario = async ()=>{
    const {usuarios,alumnos} = await usuarioData.getAllUsuario();
    const resultado = usuarios.map(el=>{
        const aux = alumnos.filter(item=>(item.id_alumno===el.id_usuario))
        if(aux.length===0) return el
        
        const usuario = {...el,...{grado:aux[0].grado,seccion:aux[0].seccion}}
        return usuario
        })
    return resultado
}
// const getAdministradorId = async (id)=>{
//     const administrador = await administradorData.getIdAdministrador(id)
//     return administrador;
// }
// const postAdministrador = async (administrador)=>{
//     const createAdministrador = await administradorData.createAdministrador(administrador)
//     return createAdministrador;
// }
// const putAdministrador = async (administrador,id)=>{
//     const updateAdministrador = await administradorData.updateAdministrador(administrador,id)
//     return updateAdministrador;
// }
// const deleteAdministrador = async (id)=>{
//     const deletedAdministrador = await administradorData.deleteAdministrador(id)
//     return deletedAdministrador;
// }


module.exports ={
    getAllUsuario,
    // getAdministradorId,
    // postAdministrador,
    // putAdministrador,
    // deleteAdministrador

}