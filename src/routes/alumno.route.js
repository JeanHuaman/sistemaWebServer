const express = require("express")
const router = express.Router();
const alumnoController = require("../controllers/alumnoController")

router
    .get("/",alumnoController.getAllAlumnos)
    .get("/:alumnoId",alumnoController.getAlumnoId)
    .post("/",alumnoController.postAlumno)
    .put("/:alumnoId",alumnoController.putAlumno)
    .delete("/:alumnoId",alumnoController.deleteAlumno)
module.exports = router; 