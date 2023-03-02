import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const usuarioController = require("../controllers/usuarioController")
const validateJwt = helperValidateJwt()

router
    .get("/",validateJwt.catchToken,usuarioController.getAllUsuario)
    .post("/",validateJwt.catchToken,usuarioController.createUsuario)
    //.get("/:rol",administradorController.getAdministradorId)
    // .put("/:alumnoId",administradorController.putAdministrador)
    // .delete("/:alumnoId",administradorController.deleteAdministrador)
module.exports = router; 