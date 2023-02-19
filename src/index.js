const morgan = require("morgan")
const express = require("express")

const app = express();
const PORT = process.env.PORT || 3000

const routerAdministrador = require("./routes/administrador.route")
const routerAlumno = require("./routes/alumno.route")
const routerProfesor = require("./routes/profesor.route")
const routerLogin = require("./routes/login.route")

app.use(morgan("dev"))
app.use(express.json())

app.use("/administrador",routerAdministrador)
app.use("/alumno",routerAlumno)
app.use("/profesor",routerProfesor)
app.use("/login",routerLogin)

app.listen(PORT,(req,res)=>{
    console.log("Server listening on port " + PORT);
})