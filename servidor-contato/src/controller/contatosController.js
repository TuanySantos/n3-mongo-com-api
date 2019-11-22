const contatosCollection = require("../model/contatoSchema")

const getAll = (request, response) => {
     console.log(request.url)
  // response.status(200).send(model.agenda)
    contatosCollection.find((error, contatos) =>{
      if(error){
        return response.status(500).send(error)
      }else{
        return response.status(200).send(contatos)
      }
    })
};

const getByName = (request, response) => {
const nomeParams = request.params.nome
const regex = new RegExp(nomeParams,"i")
const filtro = {nome: regex}

 contatosCollection.find(filtro,(error, contatos) =>{
   if(error){
     return response.status(500).send(error)
   }else{
     return response.status(200).send(contatos)
   }
 })
};


const getById = (request, response) => {
  const idParams = request.params.id
  
   contatosCollection.findById(idParams,(error, contato) =>{
     if(error){
       return response.status(500).send(error)
     }else {
      if(contato){
        return response.status(200).send(contato)
       }else{
        return response.status(404).send("contato não encontrado!")
       }
      }
     })
  }


  const removeById = (request, response)=>{  
    const id = request.params.id;  
    contatosCollection.findByIdAndRemove(id, (error, contatoExcluido) => {
      if(error){
        return response.status(404).send(error)
      }
      else{
        return response.status(200).send(contatoExcluido)
      }
    });  
   }

const updateById = (request, response) =>{
    const idParams = request.params.id
    const contatoDoBody = request.body
    const options = {new:true}

    contatosCollection.findByIdAndUpdate(
      idParams,
      contatoDoBody,
      options,

      (error, contato) =>{
        if(error){
          return response.status(500).send(error) 
        }else if(contato){
          return response.status(200).send(contato)
        }else{
          return response.status(404)
        }
      })
    }
  




const add = (request, response) => {
  const contatoDoBody = request.body
  const contato = new contatosCollection(contatoDoBody)

  contato.save((error) =>{

    if(error){
      return response.status(400).send(error)
    }else{
      return response.status(201).send(contato)
    }
  })
}

module.exports = {
  getAll,
  getByName,
  getById,
  add,
  updateById,
  removeById
}
