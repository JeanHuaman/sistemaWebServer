require("dotenv").config()
const morgan = require("morgan")
const express = require("express")
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000


const routerLogin = require("./routes/login.route")
const routerUsuario = require("./routes/usuario.route")
const routerCurso = require("./routes/curso.route")
const routerAsignarCurso = require("./routes/asignarcurso.route")
const routerForo = require("./routes/foro.route")
const routeRegistro = require("./routes/registro.route")
const routeNotificacion = require("./routes/notificaciones.route")
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


app.use("/login",routerLogin)
app.use("/usuario",routerUsuario)
app.use("/curso",routerCurso) 
app.use("/asignarcurso",routerAsignarCurso)
app.use("/foro",routerForo)
app.use("/registro",routeRegistro)
app.use("/notificacion",routeNotificacion)

app.listen(PORT,(req,res)=>{
    console.log("Server listening on port " + PORT);
})