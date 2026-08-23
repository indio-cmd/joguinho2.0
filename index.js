import express from 'express'
import route from './route/carro.js'

const app = express()

app.use(express.json())


app.use("/api/v1",route )

app.listen(3000, () => {
console.log("servidor rodando na porta 3000")
})