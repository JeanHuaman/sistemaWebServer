import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const cursoController = require("../controllers/cursoController")
const validateJwt = helperValidateJwt()

router
    .get("/capacidades",validateJwt.catchToken,cursoController.getAllCurso)
    .get("/capacidades/:cursoId",validateJwt.catchToken,cursoController.getAllCursoPorId)
    .get("/",validateJwt.catchToken,cursoController.getCursos)
    .post("/",validateJwt.catchToken,cursoController.createCurso)
    .put("/",validateJwt.catchToken,cursoController.putCurso)
    .delete("/:cursoId",validateJwt.catchToken,cursoController.deleteCurso)
module.exports = router; 