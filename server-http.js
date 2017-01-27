var http = require('http');

var port = 7007,
    posts = [];

process.argv.forEach(function (key, index) {
    var value = process.argv[index + 1];
    switch (key) {
        case '-p':
            port = value;
            break;
    }
});

var ser = http.createServer(function (req, res) {

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    res.writeHead(200, {'Content-Type': 'content-type'});

    if (req.method === 'GET') {
        console.log(posts.toString());
        res.end(posts.toString());
    }
    if (req.method === 'POST') {
        req.on('data', function (data) {
            posts = data;
            console.log(posts.toString());
            res.end(posts);
        });
    }
});

ser.listen(port, function () {
    console.log('server ok');
});