import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const asignarCursoController = require("../controllers/asignarCursoController")
const validateJwt = helperValidateJwt()

router
    .get("/:id_usuario",validateJwt.catchToken,asignarCursoController.getCursosAsignadosId)
    .get("/",validateJwt.catchToken,asignarCursoController.getCursosAsignados)
    .post("/",validateJwt.catchToken,asignarCursoController.createAsignarCurso)
    .delete("/",validateJwt.catchToken,asignarCursoController.deleteCursoAsignado)
module.exports = router; 