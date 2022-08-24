//const express = require('express');
//const server = express();
//const filmes = require('../src/data/filmes.json');

// require('./index')(app);

// server.get('/filmes',(req,res) => {
//     return res.json(filmes)
// });

// function aplicarDesconto(valor, desconto){
//    if(desconto > valor) return 0
//    return valor - desconto
// }
 
// module.exports = {aplicarDesconto}

// const JurosRoutes = require('./JurosRoutes');
// module.exports = (app) => {
//     JurosRoutes(app)
// }

// server.listen(3000, () =>{
//     console.log("Servidor inicializado!");
// });

const JurosRoutes = require('./JurosRoutes');
module.exports = (app) => {
   JurosRoutes(app)
}







