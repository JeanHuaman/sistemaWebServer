import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const usuarioController = require("../controllers/usuarioController")
const validateJwt = helperValidateJwt()

router
    .get("/",validateJwt.catchToken,usuarioController.getAllUsuario)
    .post("/",validateJwt.catchToken,usuarioController.createUsuario)
    .get("/:rol",validateJwt.catchToken,usuarioController.getUsuariosRol)
    .put("/",validateJwt.catchToken,usuarioController.putUsuario)
    // .delete("/:alumnoId",administradorController.deleteAdministrador)
module.exports = router; 