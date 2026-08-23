import express from "express"
import BancodeDados from "../repository/carro.js"

const route = express.Router()    

route.get("/buscar", (req, res) =>{
try {
        res.status(201).send(BancodeDados)
} catch (error) {
    res.status(500).send({message: error.message})
    
}

})

route.post("/criar", (req, res) => {
    try {
        const  {id, name, marca}  = req.body

        if(!id || !name || !marca){
           res.status(200).send({message: "favor informar todos os dados"})
           return
        }

        BancodeDados.push({id, name, marca})
        res.status(201).send({message: "pedido feito com sucesso"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }

} )

route.put("/alterar/:id", (req, res) => {
    try {
        const id = Number(req.params.id )
        const {name, marca} = req.body

        const nome = BancodeDados.find(it => it.id === id)
        if(!nome){
            res.status(4040).send({message: "nome ou marca nao encontrado"})
            return
        }

    if(!name || !marca){
        res.status(404).send({message: "parametros invalidos"})
        return
    }

         nome.name = name
         nome.marca = marca
        
         res.status(201).send({message: "pedido alterado com sucesso"})
 
    } catch (error) {
        res.status(500).send({message: error.message})
        
    }

})

route.delete("/deletar/:id", (req, res) => {
try {
    
    const id =  Number(req.params.id )
    const index = BancodeDados.findIndex(it => it.id === id)

    if(index === -1){
        res.status(404).send({message: "name ou marca nao encontrado"})
        return
    }


BancodeDados.splice(index,  1)
res.send({message: "deletado com sucesso"})

} catch (error) {
    res.status(500).send({message: error.message})
    
}
})

export default route