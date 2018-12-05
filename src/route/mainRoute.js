const mainController = require('../controller/mainController');


module.exports = function(server, prefixUrl){

    server.post('/webhook', mainController.main);
    
};