import express from 'express';

const server = express();

server.get('/', (req, res)=>{ //req= requesicao para o sevidor, res= resposta

    return res.send("Ola dev")
}) 

export {  server };