//npm init - y  //inicia um projeto node
//npm install express  //instala a dependencia do Express
//configura type: module no package.json
//npm nodemon --save-dev
//configura o nodemon no package.json
    //scripts
    //"start": "node index.js",
    //"dev": "nodemon index.js"
//criar o arquivo index.js
//iniciar o servidor express
//npm run dev  //executa o projeto

import projectRoutes from './routes/projectsRoutes.js'
import express from 'express';
import morgan from 'morgan';
const app = express(); //cria instacia do express

app.use(morgan('dev'));
app.use(express.json()); //lida com o formato json

const port = 3000;

//Monta o router no prefixo
app.use('/api/v1/projects', projectRoutes);

app.get('/health', (req, res) =>{
    res.json({status: 'OK'});
});

  
// 404 — rota não encontrada 
app.use((req, res, next) => { 
  res.status(404).json({ 
    error: 'Rota não encontrada', 
    path: req.path, 
    method: req.method 
  }); 
});

// index.js — ÚLTIMO middleware, 4 parâmetros obrigatórios 
app.use((err, req, res, next) => { 
  console.error('Erro:', err.message); 
  const status = err.statusCode || 500; 
  res.status(status).json({ 
    error: err.message || 'Erro interno do servidor' 
  }); 
});

app.listen(port, () => {
    let data = new Date();
    console.log(`Servidor iniciado em ${data}`);
});