import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const registroController = require("../controllers/registroController")
const validateJwt = helperValidateJwt()

router
    .get("/obtenerNotas/:id_registro",validateJwt.catchToken,registroController.getNotasRegistro)
    .get("/",validateJwt.catchToken,registroController.getRegistroDelDocente)
    .post("/notaSubcapacidad",validateJwt.catchToken,registroController.guardarNotaSubcapacidad)
    .post("/notaCapacidad",validateJwt.catchToken,registroController.guardarNotaCapacidad)
    .post("/notaBimestre",validateJwt.catchToken,registroController.guardarNotaBimestre)
    .post("/",validateJwt.catchToken,registroController.createRegistro)
module.exports = router; 