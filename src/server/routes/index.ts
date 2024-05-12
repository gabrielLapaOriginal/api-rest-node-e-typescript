import { Router  } from "express"; //cria um middleware onde especificamos todas as rotas, depois passando para o server
import 'dotenv/config'
import { StatusCodes } from 'http-status-codes'


  const router = Router();

  router.get('/', (req, res)=>{ //req= requesicao para o sevidor, res= resposta
    return res.send("Ola dev")
  }) 
  router.post('/teste', (req, res)=>{ //req= requesicao para o sevidor, res= resposta
    console.log(req);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body)
  }) 




  export { router };