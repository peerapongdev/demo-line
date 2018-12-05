const mainController = require('../controller/mainController');


module.exports = function(app){

    // app.get('/', mainController.debug);
    app.post('/webhook', mainController.main);

};