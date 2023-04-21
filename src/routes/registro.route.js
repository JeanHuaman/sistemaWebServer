import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const registroController = require("../controllers/registroController")
const validateJwt = helperValidateJwt()

router
    // .get("/:id_usuario",validateJwt.catchToken,asignarCursoController.getCursosAsignadosId)
    // .get("/",validateJwt.catchToken,asignarCursoController.getCursosAsignados)
    .post("/",registroController.createRegistro)
    // .delete("/",validateJwt.catchToken,asignarCursoController.deleteCursoAsignado)
module.exports = router; 