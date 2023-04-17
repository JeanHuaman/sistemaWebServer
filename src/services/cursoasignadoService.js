const cursoAsignadoData = require("../database/cursoAsignadoData")

const getAllCursosAsignados = async ()=>{
    try {
        const cursosAsignados = await cursoAsignadoData.getAllCursosAsignados()
        const aux = []
        
        cursosAsignados.forEach(element => {
            let encontrado=false
            const alumno={
                id_alumno:element.id_alumno,
                nombre_alumno: element.nombre_alumno
            }
            const cursoAsignado = {
                id_curso: element.id_curso,
                nombre_curso: element.nombre_curso,
                id_docente: element.id_docente,
                nombre_docente: element.nombre_docente,
                grado: element.grado,
                seccion: element.seccion,
                ciclo: element.ciclo,
                alumnos:[alumno]
            }
            if(aux.length>0){
                aux.forEach(el=>{
                    if(el.id_curso==element.id_curso && el.id_docente==element.id_docente && 
                        el.grado==element.grado && el.seccion==element.seccion && el.ciclo===element.ciclo){
                            el.alumnos.push(alumno)
                            encontrado=true
                            return
                        }
                })
            }
            if(!encontrado){
                aux.push(cursoAsignado)
            }
        });
        
        return aux; 
        
    } catch (error) {
        return error
    }
}
    
const getAllCursosAsignadosId = async (id)=>{
    try {
        const cursosAsignados = await cursoAsignadoData.getAllCursosAsignadosId(id)
        const aux = []
        
        cursosAsignados.forEach(element => {
            let encontrado=false
            const alumno={
                id_alumno:element.id_alumno,
                nombre_alumno: element.nombre_alumno
            }
            const cursoAsignado = {
                id_curso: element.id_curso,
                nombre_curso: element.nombre_curso,
                id_docente: element.id_docente,
                nombre_docente: element.nombre_docente,
                grado: element.grado,
                seccion: element.seccion,
                ciclo: element.ciclo,
                alumnos:[alumno]
            }
            if(aux.length>0){
                aux.forEach(el=>{
                    if(el.id_curso==element.id_curso && el.id_docente==element.id_docente && 
                        el.grado==element.grado && el.seccion==element.seccion && el.ciclo===element.ciclo){
                            el.alumnos.push(alumno)
                            encontrado=true
                            return
                        }
                })
            }
            if(!encontrado){
                aux.push(cursoAsignado)
            }
        });
        
        return aux; 
        
    } catch (error) {
        return error
    }
}
const postCursoAsignado = async (cursoAsignado)=>{
    try {
        const createCursoAsignado = await cursoAsignadoData.createCursoAsignado(cursoAsignado)
        return createCursoAsignado; 
    } catch (error) {
        return error
    }
    
}
const deleteCursoAsignado = async (datos)=>{
    const deleteCurso = await cursoAsignadoData.deleteCursoAsignado(datos)
    return deleteCurso;
}


module.exports ={
    getAllCursosAsignados,
    getAllCursosAsignadosId,
    postCursoAsignado,
    deleteCursoAsignado
}