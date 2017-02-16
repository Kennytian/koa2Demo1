'use strict';

var nunjucks = require('../nunjucks');

var fn_get = async (ctx, next) => {
  var name = ctx.params.name;
  var s = nunjucks.render('blog.html', { name: name });
  console.log(s);
  ctx.response.body = s;
}

module.exports = {
  'GET /blog/:name' : fn_get
}