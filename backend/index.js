// bibliotecas
const express = require('express')
const cors = require('cors')
const noteRoutes = require('./routes/NoteRoutes')
const sequelize = require('./config/database')

//app
const app = express()
const porta = 3001;

app.use(cors())
app.use(express.json())
app.use("/notes",noteRoutes);


sequelize.sync().then(()=>{
  app.listen(porta,()=>{
    console.log("api rodando agora conectada com o banco de dados")
  })
}).catch(err=>console.log("erro ao conectar com o banco"))
