import {helperValidateJwt} from "../middlewares/helper/helperValidateJwt"
const express = require("express")
const router = express.Router();
const foroController = require("../controllers/foroController")
 const validateJwt = helperValidateJwt()

router
    .get("/",validateJwt.catchToken,foroController.getAllForosPorCurso)
    .post("/",validateJwt.catchToken,foroController.createForo)
    .post("/comentar",validateJwt.catchToken,foroController.comentarForo)
    .get("/:foroId",validateJwt.catchToken,foroController.getAllForosComentados)
    .put("/",validateJwt.catchToken,foroController.putForo)
    .delete("/:foroId",validateJwt.catchToken,foroController.deleteForo)
module.exports = router; 