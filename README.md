## BLOG APP

# Installing
* `npm i nodemon http-server concurrently -g` - to install global dependencies
* `npm i` to install local dependencies

# Running with localstorage
* `npm start` - to run localhost client server

# Installing mongoDB
* download and install mongodb from mongoDB website. Utwórz katalog C:/data/db. Dodaj do PATH scieżkę do katalogu mongodb/bin.
* `npm i mongodb --save`
* `npm i nodemon -g`
* `npm i express --save`

# Running with mongoDB
* `mongod` - to run mongo
* `mongoimport --db course --collection posts --file db.json --jsonArray` - to import db data from file
* `npm start` - to run localhost client server