import express from "express"
import BancodeDados from "../repository/carro.js"
import ControllerCarro from "../controller/carro.js"

const route = express.Router()    

route.get("/buscar", ControllerCarro.Buscar )

route.post("/criar", ControllerCarro.Criar )

route.put("/alterar/:id", ControllerCarro.Alterar )

route.delete("/deletar/:id", ControllerCarro.Deletar)

export default route