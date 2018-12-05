const mainController = require('../controller/mainController');

module.exports = function(app){
    app.post('/webhook', mainController.main);
};