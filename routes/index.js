'use strict';

var app = require('../app');

app.get('/partials/*.html', function(req, res, next) {
  if (!req.xhr) return next(new Error(404));
  res.render('pages/partials/' + req.params[0]);
});

app.get('/*.html', function(req, res) {
  res.render('pages/' + req.params[0]);
});