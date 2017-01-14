var http = require('http');

var posts = [12];

var ser = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if(req.method === 'GET') {
        res.end(posts.toString());
    }
    if(req.method === 'POST') {
        /*var xxx;

        for(var iii in req) {
           // console.log(iii);
        }*/

        req.on('data', function (data) {
            console.log(data);
            res.end('post ' + data);
        });
    }
});

ser.listen(3333, function () {
    console.log('server ok');
});