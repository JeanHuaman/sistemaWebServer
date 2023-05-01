const cursoData = require("../database/cursoData")

const getAllCurso = async ()=>{
    try {
        const resultado = await cursoData.getAllCurso();
        const cursoAux=[...resultado[0]]
        const cursoFinales=[]
        cursoAux.forEach((el,indice)=>{
        let isCapacidadEncontrado = false
        let isCursoEncontrado = false
        
        const subcapacidad = 
            {
            id_subcapacidad:el.id_subcapacidad,
            nombre_subcapacidad:el.nombre_subcapacidad
            }
            
        const capacidad={
            id_capacidad : el.id_capacidad,
            nombre_capacidad : el.nombre_capacidad,
            subcapacidades : [subcapacidad]
        }
        const curso = {
            id_curso : el.id_curso,
            nombre : el.nombre,
            capacidades:[capacidad]
        }
        if(indice>=1)
        {    
            cursoFinales.forEach((cursoAux)=>{
            if(cursoAux.id_curso === el.id_curso){
                isCursoEncontrado=true
            }
            if(isCursoEncontrado){
                cursoAux.capacidades.forEach((elementoCapacidad)=>{
                if(elementoCapacidad.id_capacidad === el.id_capacidad){
                    elementoCapacidad.subcapacidades.push(subcapacidad)
                    isCapacidadEncontrado=true
                    return
                }
                })
                if(!isCapacidadEncontrado){
                cursoAux.capacidades.push(capacidad)
                return
                }
            }
            })
            
        }
        if(!isCursoEncontrado){    
            cursoFinales.push(curso)
        }
        })
        return cursoFinales
    } catch (error) {
        return error
    }
    
    
}

const getAllCursoPorId = async (cursoId)=>{
    try {
        const resultado = await cursoData.getAllCursoPorId(cursoId);
        const cursoAux=[...resultado[0]]
        const cursoFinales=[]
        cursoAux.forEach((el,indice)=>{
        let isCapacidadEncontrado = false
        let isCursoEncontrado = false
        
        const subcapacidad = 
            {
            id_subcapacidad:el.id_subcapacidad,
            nombre_subcapacidad:el.nombre_subcapacidad
            }
            
        const capacidad={
            id_capacidad : el.id_capacidad,
            nombre_capacidad : el.nombre_capacidad,
            subcapacidades : [subcapacidad]
        }
        const curso = {
            id_curso : el.id_curso,
            nombre : el.nombre,
            capacidades:[capacidad]
        }
        if(indice>=1)
        {    
            cursoFinales.forEach((cursoAux)=>{
            if(cursoAux.id_curso === el.id_curso){
                isCursoEncontrado=true
            }
            if(isCursoEncontrado){
                cursoAux.capacidades.forEach((elementoCapacidad)=>{
                if(elementoCapacidad.id_capacidad === el.id_capacidad){
                    elementoCapacidad.subcapacidades.push(subcapacidad)
                    isCapacidadEncontrado=true
                    return
                }
                })
                if(!isCapacidadEncontrado){
                cursoAux.capacidades.push(capacidad)
                return
                }
            }
            })
            
        }
        if(!isCursoEncontrado){    
            cursoFinales.push(curso)
        }
        })
        return cursoFinales[0]
    } catch (error) {
        return error
    }
    
    
}
const getCursos = async ()=>{
    try {
        const cursos = await cursoData.getCursos()
        return cursos; 
    } catch (error) {
        return error
    }
    
}
const postCurso = async (curso)=>{
    try {
        const createCurso = await cursoData.createCurso(curso)
        return createCurso; 
    } catch (error) {
        return error
    }
    
}
const putCurso = async (curso)=>{
    const updateCurso = await cursoData.updateCurso(curso)
    return updateCurso;
}
const deleteCurso = async (cursoId)=>{
    const deleteCurso = await cursoData.deleteCurso(cursoId)
    return deleteCurso;
}


module.exports ={
    getAllCurso,
    getAllCursoPorId,
    getCursos,
    postCurso,
    putCurso,
    deleteCurso
}