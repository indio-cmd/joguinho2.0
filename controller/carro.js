import ServiceCarro from "../service/carro.js"

class ControllerCarro{

    Buscar(req, res){
        try {
const carros = ServiceCarro.Buscar()

        res.send({message: carros})
    } catch (error) {
    res.status(500).send({message: error.message})
}
    }

    Criar(req, res){
         try {
                const  {id, name, marca}  = req.body
        
            ServiceCarro.Criar(id, name, marca)

                res.status(201).send({message: "pedido feito com sucesso"})
            } catch (error) {
                res.status(500).send({message: error.message})
            }
    }

    Alterar(req, res){
          try {
        const id = Number(req.params.id )
        const {name, marca} = req.body

        ServiceCarro.Alterar(name, marca)

    } catch (error) {
        res.status(500).send({message: error.message})
        
    }
    }

    Deletar(req, res){
        try {
    
    const id =  Number(req.params.id )
    
    ServiceCarro.Deletar()

res.send({message: "deletado com sucesso"})

} catch (error) {
    res.status(500).send({message: error.message})
    
}
    }

}

export default new ControllerCarro()