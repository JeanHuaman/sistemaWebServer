const foroData = require("../database/foroData")

const getAllForosPorCurso = async (datos)=>{
    try{
        const forosPorCurso = await foroData.getForoPorCurso(datos)
        return forosPorCurso
    } catch (error) {
        return error
    }
}

const getAllForosComentados = async (foroId)=>{
    try {
        const forosComentados = await foroData.getForosComentados(foroId)
        const foro={
            nombre_foro : "",
            descripcion : "",
            fecha_creacion : "",
            fecha_fin : "",
            comentarios : []}

        forosComentados.forEach(el=>{
            const comentario={
                nombre_completo_usuario : el.nombre_completo_usuario,
                comentario : el.comentario,
                fecha_comentario : el.fecha_comentario,
                rol : el.rol
            }
            if(foro.comentarios.length==0){                
            foro.nombre_foro = el.nombre_foro
            foro.descripcion = el.descripcion
            foro.fecha_creacion = el.fecha_creacion
            foro.fecha_fin = el.fecha_fin
            }
            foro.comentarios.push(comentario)
        })
        return foro; 
    } catch (error) {
        return error
    }
    
}
const postForo = async (foro)=>{
    try {
        const createForo = await foroData.createForo(foro)
        return createForo; 
    } catch (error) {
        return error
    }
    
}
const postComentarForo = async (comentario)=>{
    try {
        const createComentarioForo = await foroData.createComentarioForo(comentario)
        return createComentarioForo; 
    } catch (error) {
        return error
    }
    
}

const putForo = async (foro)=>{
    const updateForo = await foroData.updateForo(foro)
    return updateForo;
}
const deleteForo = async (foroId)=>{
    const deleteForo = await foroData.deleteForo(foroId)
    return deleteForo;
}


module.exports ={
    getAllForosPorCurso,
    getAllForosComentados,
    postForo,
    postComentarForo,
    putForo,
    deleteForo
}