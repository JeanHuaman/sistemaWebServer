const express = require("express")
const router = express.Router();
const administradorController = require("../controllers/administradorController")

router
    .get("/",administradorController.getAllAdministrador)
    .get("/:alumnoId",administradorController.getAdministradorId)
    .post("/",administradorController.postAdministrador)
    .put("/:alumnoId",administradorController.putAdministrador)
    .delete("/:alumnoId",administradorController.deleteAdministrador)
module.exports = router;