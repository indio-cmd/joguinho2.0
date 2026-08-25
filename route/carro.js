import express from "express"
import ControllerCarro from "../controller/carro.js"

const route = express.Router()    

route.get("/buscar", ControllerCarro.Buscar )

route.get("/buscarum/:id", ControllerCarro.Buscarum)

route.post("/criar", ControllerCarro.Criar )

route.put("/alterar/:id", ControllerCarro.Alterar )

route.delete("/deletar/:id", ControllerCarro.Deletar)

export default route