import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const registroController = require("../controllers/registroController")
const validateJwt = helperValidateJwt()

router
    .get("/notasFinales/:id_registro",validateJwt.catchToken,registroController.getNotasFinales)
    .get("/obtenerNotas/:id_registro",validateJwt.catchToken,registroController.getNotasRegistro)
    .get("/",validateJwt.catchToken,registroController.getRegistroDelDocente)
    .post("/notaFinal",validateJwt.catchToken,registroController.guardarNotaFinal)
    .post("/notaSubcapacidad",validateJwt.catchToken,registroController.guardarNotaSubcapacidad)
    .post("/notaCapacidad",validateJwt.catchToken,registroController.guardarNotaCapacidad)
    .post("/notaBimestre",validateJwt.catchToken,registroController.guardarNotaBimestre)
    .post("/",validateJwt.catchToken,registroController.createRegistro)
module.exports = router; 