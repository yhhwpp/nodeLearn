function route(handle, pathname) {
    // console.log('About to route a request for' + pathname);
    console.log('=============' + pathname)
    if(typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log('No request hander found for ' + pathname);
        return '404 Not Found';
    }
}
exports.route = route;