const registroData = require("../database/registroData")

const getallNotasRegistro = async (id_registro)=>{
    try {
        const resultado = await registroData.getAllRegistroNotas(id_registro);
        const registroAux=[...resultado]
        const registroNotas={
            id_registro,
            bimestres : []
        }
        registroAux.forEach((el,indice)=>{
        let isBimestreEncontrado = false
        let isCapacidadEncontrado = false
        let isAlumnoEncontrado = false
        const subcapacidad = 
            {
            id_subcapacidad:el.id_subcapacidad,
            nota_subcapacidad:el.nota_subcapacidad
            }
            
        const capacidad={
            id_capacidad : el.id_capacidad,
            nota_capacidad : el.nota_capacidad,
            subcapacidades : [subcapacidad]
        }

        const alumno = {
            id_alumno : el.id_alumno,
            capacidades : [capacidad]
        }
        const bimestre = {
            numero_bimestre : el.numero_bimestre,
            alumnos:[alumno]
        }
        if(indice>=1)
        {    
            registroNotas.bimestres.forEach((bimestreAux)=>{
                if(bimestreAux.numero_bimestre === el.numero_bimestre){
                    isBimestreEncontrado=true
                }

                if(isBimestreEncontrado){
                    bimestreAux.alumnos.forEach(alumnoAux=>{
                        if(alumnoAux.id_alumno === el.id_alumno){
                            isAlumnoEncontrado = true
                        }

                        if(isAlumnoEncontrado){
                            alumnoAux.capacidades.forEach(capacidadAux=>{
                                if(capacidadAux.id_capacidad === el.id_capacidad){
                                    capacidadAux.subcapacidades.push(subcapacidad)
                                    isCapacidadEncontrado = true
                                    return
                                }
                            })
                            if(!isCapacidadEncontrado)
                            {
                                alumnoAux.capacidades.push(capacidad)
                                return
                            }

                        }

                    })
                    if(!isAlumnoEncontrado)
                    {
                        bimestreAux.alumnos.push(alumno)
                        return
                    } 
                }
            })          
             
        }
        if(!isBimestreEncontrado){    
            registroNotas.bimestres.push(bimestre)
        } 
        })
        console.log(registroAux);
        return registroNotas
    } catch (error) {
        return error
    }
    
    
}

const getRegistroDelDocente = async (datos)=>{
    try {
        const registro = await registroData.getRegistroDelDocente(datos)
        return registro; 
    } catch (error) {
        return error
    }
    
}
const postRegistro = async (registro)=>{
    try {
        const createRegistro = await registroData.createRegistro(registro)
        return createRegistro; 
    } catch (error) {
        return error
    }
    
}
// const putCurso = async (curso)=>{
//     const updateCurso = await cursoData.updateCurso(curso)
//     return updateCurso;
// }
// const deleteCurso = async (cursoId)=>{
//     const deleteCurso = await cursoData.deleteCurso(cursoId)
//     return deleteCurso;
// }


module.exports ={
    getallNotasRegistro,
    getRegistroDelDocente,
    postRegistro,
    // putCurso,
    // deleteCurso
}