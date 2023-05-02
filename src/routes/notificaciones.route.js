import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const notificacionController = require("../controllers/notificacionesController")
const validateJwt = helperValidateJwt()

router
    .get("/:id_usuario",validateJwt.catchToken,notificacionController.getNotificaciones)
    .post("/",validateJwt.catchToken,notificacionController.createNotificacion)
module.exports = router; 