const InterestController = require('../../Controllers/InterestController');

module.exports = (app) => {
   app.get('/test', InterestController.getTest);
   app.get('/calculateInterest', InterestController.calculateInterest);
}