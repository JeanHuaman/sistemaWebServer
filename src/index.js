const morgan = require("morgan")
const express = require("express")
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3000


const routerLogin = require("./routes/login.route")
const routerUsuario = require("./routes/usuario.route")

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())


app.use("/login",routerLogin)
app.use("/usuario",routerUsuario)

app.listen(PORT,(req,res)=>{
    console.log("Server listening on port " + PORT);
})