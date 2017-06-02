var server = require('./server'),
    requestHandlers = require('./requestHandlers'),
    router = require('./router');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;
server.start(router.route, handle);