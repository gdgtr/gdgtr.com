var express = require('express');
var compress = require('compression');
var morgan = require('morgan');
var responseTime = require('response-time');
var bodyParser = require('body-parser');

var routerUtil = require('./router');
var log = require('../log/')(module);

exports.init = function (app) {
  app.use(compress({
    filter: function (req, res) {
      return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    level: 9
  }));
  app.use(express.static(process.cwd() + '/public'));
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true, limit: '2mb'}));
  app.use(bodyParser.json({limit: '2mb'}));
  app.use(responseTime());
  log.info('Express configured');
  routerUtil.init(app);
};