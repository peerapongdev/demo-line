const mainController = require('../controller/mainController');


module.exports = function(server, prefixUrl){

    server.get('/', mainController.debug);
    server.post('/webhook', mainController.main);

};