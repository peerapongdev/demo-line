const mainController = require('../controller/mainController');


module.exports = function(server, prefixUrl){

    // server.get('/', mainController.main);
    server.post('/webhook', mainController.main);

};