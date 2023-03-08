import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const cursoController = require("../controllers/cursoController")
const validateJwt = helperValidateJwt()

router
    .get("/",validateJwt.catchToken,cursoController.getAllCurso)
    .post("/",validateJwt.catchToken,cursoController.createCurso)
    // .get("/:rol",validateJwt.catchToken,usuarioController.getUsuariosRol)
    .put("/",validateJwt.catchToken,cursoController.putCurso)
    .delete("/:cursoId",validateJwt.catchToken,cursoController.deleteCurso)
module.exports = router; 