const usuarioData = require("../database/usuarioData")

const getAllUsuario = async ()=>{
    try {
    const res= await usuarioData.getAllUsuario();
    const usuarios =[...res[0]]
    
    const usuariosFinales = usuarios.map(usuario=>{
        if(usuario.rol!=="alumno"){
            delete usuario.grado
            delete usuario.seccion
            delete usuario.ciclo
            return usuario
        }else{
            return usuario
        }
    })
    // const resultado = usuarios.map(el=>{
    //     const aux = alumnos.filter(item=>(item.id_alumno===el.id_usuario))
    //     if(aux.length===0) return el
        
    //     const usuario = {...el,...{grado:aux[0].grado,seccion:aux[0].seccion}}
    //     return usuario
    //     })
    return usuariosFinales
    } catch (error) {
        
    }
    
}
const getUsuariosRol = async (rol)=>{
    const usuarios = await usuarioData.getUsuariosRol(rol)
    return usuarios;
}
const postUsuario = async (usuario)=>{
    const createUsuario = await usuarioData.createUsuario(usuario)
    return createUsuario;
}
const putUsuario = async (usuario)=>{
    const updateUsuario = await usuarioData.updateUsuario(usuario)
    return updateUsuario;
}
const deleteUsuario = async (usuarioId,rol)=>{
    const deletedUsuario = await usuarioData.deleteUsuario(usuarioId,rol)
    return deletedUsuario;
}


module.exports ={
    getAllUsuario,
    getUsuariosRol,
    postUsuario,
    putUsuario,
    deleteUsuario
}