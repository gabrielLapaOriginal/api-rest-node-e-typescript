import { Router  } from "express"; //cria um middleware onde especificamos todas as rotas, depois passando para o server
import { StatusCodes } from 'http-status-codes'

import { CidadesController } from './../controllers'


  const router = Router();

  router.get('/', (req, res)=>{ //req= requesicao para o sevidor, res= resposta
    return res.send("Ola dev")
  }) 


  router.post('/cidades', CidadesController.create);




  export { router };