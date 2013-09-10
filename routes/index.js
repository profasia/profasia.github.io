'use strict';

var app = require('../app');

app.get('/*.html', function(req, res) {
  res.render('pages/' + req.params[0]);
});