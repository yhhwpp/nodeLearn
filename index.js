var server = require('./server'),
    requestHandles = require('./requestHandlers'),
    router = require('./router');

var handle = {};
handle['/'] = requestHandles.start;
handle['/start'] = requestHandles.start;
handle['./upload'] = requestHandles.upload;
server.start(router.route, handle);