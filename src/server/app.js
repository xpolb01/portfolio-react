'use strict';
const express = require('express');
const app = express();

const path = require('path');
const volleyball = require('volleyball');


var rootPath = path.join(__dirname, '../../');
var indexPath = path.join(rootPath, './src/browser/index.html');

app.use(volleyball);

app.use(express.static(path.join(rootPath, 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(indexPath);
});

app.use(function (req, res, next) {
    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }
});

app.use(function (req, res, next) {
    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }
});

app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000!');
});
