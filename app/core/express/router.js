var config = require('config');
var express = require('express');

var controllers = require('./controller');
var log = require('../log/')(module);

exports.init = function (app) {

  var router = express.Router();
  router.route('*')
      .get(controllers.site.index);

  app.use(router);
  log.info('Router configured');
};