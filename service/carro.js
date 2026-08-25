import BancodeDados from "../repository/carro.js"

class ServiceCarro{

    Buscar(){
        return BancodeDados
    }

    Buscarum(id){
if(!id){
    throw new Error ("coloque o id ")
}

        const carro = BancodeDados.find(it => it.id === id)

if(!carro){
    throw new Error ("nao  encontrado")
}

return carro

    }

    Criar(id, name, marca){

                if(!id || !name || !marca){
                   throw new Error
                   ("favor informar todos os dados")
                }
        
                BancodeDados.push({id, name, marca})

                return(id, name, marca)
    }

    Alterar(id, name, marca){
        //if (id, marca , name){}
         const nome = BancodeDados.find(it => it.id === id)

        if(!nome){
         throw new Error("nome ou marca nao encontrado")
        
        }

    if(!name || !marca){
        throw new Error("parametros invalidos")
    }

         nome.name = name
         nome.marca = marca
        
         // throw new Error("pedido alterado com sucesso")

          return(name, marca)
    }

    Deletar(id){
    if(!id)
        {throw new Error("Favor informar o id")}

        const index = BancodeDados.findIndex(it => it.id === id)

    if(index === -1){
        throw new Error ("name ou marca nao encontrado")
        
    }

BancodeDados.splice(index,  1)

return id
    }


}

export default new ServiceCarro()