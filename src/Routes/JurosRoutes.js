const JurosController = require('../../Controllers/JurosController');

module.exports = (app) => {
   app.get('/teste', JurosController.getTest);
   app.get('/calculaJuros', JurosController.calculaJuros);
}