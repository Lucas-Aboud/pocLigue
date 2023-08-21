const express = require('express')
const path = require('path')
const app = express()
const router = require('./routers/homeRouter.js')
const port = 8000


app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('front', path.join(__dirname, 'src', 'views'));

app.use(router)

app.listen(port, () => console.log("Aplicação rodando em http://localhost:8000"))