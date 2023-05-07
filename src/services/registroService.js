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
                nota_bimestre:el.nota_bimestre,
                capacidades : [capacidad]
            }
            const bimestre = {
                numero_bimestre : el.numero_bimestre,
                alumnos:[alumno]
            }
            if(indice>=1)
            {    
                for(let i=0;i<registroNotas.bimestres.length;i++){
                    if(registroNotas.bimestres[i].numero_bimestre === el.numero_bimestre){
                        isBimestreEncontrado=true
                    }
    
                    if(isBimestreEncontrado){
                        for(let j=0;j<registroNotas.bimestres[i].alumnos.length;j++){
                            if(registroNotas.bimestres[i].alumnos[j].id_alumno === el.id_alumno){
                                isAlumnoEncontrado = true
                            }
    
                            if(isAlumnoEncontrado){
                                for(let k=0;k<registroNotas.bimestres[i].alumnos[j].capacidades.length;k++){
                                    if(registroNotas.bimestres[i].alumnos[j].capacidades[k].id_capacidad === el.id_capacidad){
                                        registroNotas.bimestres[i].alumnos[j].capacidades[k].subcapacidades.push(subcapacidad)
                                        isCapacidadEncontrado = true
                                        return
                                    }
                                }
                                if(!isCapacidadEncontrado)
                                {
                                    registroNotas.bimestres[i].alumnos[j].capacidades.push(capacidad)
                                    return
                                }
    
                            }
    
                        }
                        if(!isAlumnoEncontrado)
                        {
                            registroNotas.bimestres[i].alumnos.push(alumno)
                            return
                        } 
                    }
                }        
            }
            if(!isBimestreEncontrado){    
                registroNotas.bimestres.push(bimestre)
            } 
        })
        return registroNotas
    } catch (error) {
        return error
    }
    
    
}

const getNotasDelAlumno = async (datos)=>{
    try {
        const resultado = await registroData.getNotasDelAlumno(datos);
        const registroAux=[...resultado]
        const registroNotas={
            id_registro:datos.id_registro ,
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
                nota_bimestre:el.nota_bimestre,
                capacidades : [capacidad]
            }
            const bimestre = {
                numero_bimestre : el.numero_bimestre,
                alumnos:[alumno]
            }
            if(indice>=1)
            {    
                for(let i=0;i<registroNotas.bimestres.length;i++){
                    if(registroNotas.bimestres[i].numero_bimestre === el.numero_bimestre){
                        isBimestreEncontrado=true
                    }
    
                    if(isBimestreEncontrado){
                        for(let j=0;j<registroNotas.bimestres[i].alumnos.length;j++){
                            if(registroNotas.bimestres[i].alumnos[j].id_alumno === el.id_alumno){
                                isAlumnoEncontrado = true
                            }
    
                            if(isAlumnoEncontrado){
                                for(let k=0;k<registroNotas.bimestres[i].alumnos[j].capacidades.length;k++){
                                    if(registroNotas.bimestres[i].alumnos[j].capacidades[k].id_capacidad === el.id_capacidad){
                                        registroNotas.bimestres[i].alumnos[j].capacidades[k].subcapacidades.push(subcapacidad)
                                        isCapacidadEncontrado = true
                                        return
                                    }
                                }
                                if(!isCapacidadEncontrado)
                                {
                                    registroNotas.bimestres[i].alumnos[j].capacidades.push(capacidad)
                                    return
                                }
    
                            }
    
                        }
                        if(!isAlumnoEncontrado)
                        {
                            registroNotas.bimestres[i].alumnos.push(alumno)
                            return
                        } 
                    }
                }        
            }
            if(!isBimestreEncontrado){    
                registroNotas.bimestres.push(bimestre)
            } 
        })
        return registroNotas
    } catch (error) {
        return error
    }
    
    
}

const getNotasFinales = async (id_registro)=>{
    try {
        const notasFinales = await registroData.getNotasFinales(id_registro);
        return notasFinales
    } catch (error) {
        return error
    }
}

const getNotaFinalPorAlumno = async (datos)=>{
    try {
        const notaFinalPorAlumno = await registroData.getNotaFinalPorAlumno(datos);
        return notaFinalPorAlumno
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

const guardarNotaSubcapacidad = async (requestNotaSubcapacidad)=>{
    try {
        const id_registro_nota = await registroData.guardarNotaSubcapacidad(requestNotaSubcapacidad)
        return id_registro_nota; 
    } catch (error) {
        return error
    }
    
}


const guardarNotaCapacidad = async (requestNotaCapacidad)=>{
    try {
        const id_registro_nota = await registroData.guardarNotaCapacidad(requestNotaCapacidad)
        return id_registro_nota; 
    } catch (error) {
        return error
    }
    
}


const guardarNotaBimestre = async (requestNotaBimestre)=>{
    try {
        const id_registro_nota = await registroData.guardarNotaBimestre(requestNotaBimestre)
        return id_registro_nota; 
    } catch (error) {
        return error
    }
    
}

const guardarNotaFinal = async (requestNotaFinal)=>{
    try {
        const id_registro_nota = await registroData.guardarNotaFinal(requestNotaFinal)
        return id_registro_nota; 
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
    guardarNotaSubcapacidad,
    guardarNotaCapacidad,
    guardarNotaBimestre,
    guardarNotaFinal,
    getNotasFinales,
    getNotasDelAlumno,
    getNotaFinalPorAlumno
}