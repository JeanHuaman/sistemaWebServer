const express = require("express")
const router = express.Router();
const profesorController = require("../controllers/profesorController")

router
    .get("/",profesorController.getAllProfesores)
    .get("/:alumnoId",profesorController.getProfesorId)
    .post("/",profesorController.postProfesor)
    //.put("/:alumnoId",profesorController.putP)
    // .delete("/:alumnoId",profesorController.deleteAlumno)
module.exports = router; 