import express from 'express'
import bodyparser from 'body-parser'
import router from './rotas.js'
import cors from 'cors'

const app = express()
const porta = 8000
app.use(cors())

app.use(bodyparser.json())


app.use("", router)


app.listen(porta, () => {
    console.log(`API rodando na porta ${porta}`)
})