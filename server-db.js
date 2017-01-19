var express = require("express"),
    mongo = require("mongodb"),
    dbUrl = "mongodb://127.0.0.1:27017/course",
    app = express(),
    port = 3333;



process.argv.forEach(function (key, index) {
    var value = process.argv[index + 1];
    switch (key) {
        case '-p':
            port = value;
            break;
    }
});

app.use(function (req, res, next) {
    req.on('data', function (data) {
        req.body = JSON.parse(data);
    });
    next();
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    next();
});

function postsCollection(res, callback) {
    mongo
        .MongoClient
        .connect(dbUrl, function (err, db) {
            if (err) {
                res.status(500);
                res.json({error: err});
            } else {
                callback(db.collection('posts'));
            }
        });
}

app.get('/posts', function (req, res) {
    postsCollection(res, function (posts) {
        posts
            .find()
            .toArray(function (err, result) {
                res.json({status: 'ok', posts: result});
            });
    });
});

app.post('/posts', function (req, res) {
    postsCollection(res, function (posts) {
        posts
            .insertOne({title: req.body.title})
            .then(function (val) {
                res.send(val.ops[0]);
            });
    });
});

app.put('/posts', function (req, res) {
    postsCollection(res, function (posts) {
        posts
            .updateOne({_id: new mongo.ObjectID(req.body._id)}, {$set: {comments: req.body.comments}})
            .then(function (value) {
                res.send(value.result);
            });
    });
});

app.delete('/posts', function (req, res) {
    postsCollection(res, function (posts) {
        posts
            .deleteOne({_id: new mongo.ObjectID(req.body.id)})
            .then(function (value) {
                res.send(value.result);
            });
    });
});

app.listen(port, function () {
    console.log('server ok');
});