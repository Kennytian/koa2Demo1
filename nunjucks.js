'use strict';

const nunjucks = require('nunjucks');

function createEnv(path, opts) {
  var autoescape = opts.autoescape && true;
  var noCache = opts.noCache || false;
  var watch = opts.watch || false;
  var throwOnUndefined = opts.throwOnUndefined || false;
  var env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(__dirname + '/views',{
      noCache : noCache,
      watch : watch
    }),{
      autoescape : autoescape,
      throwOnUndefined : throwOnUndefined
    });
  if(opts.filters){
    for(var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

var env = createEnv(__dirname + '/views',{
  watch : true,
  filters : {
    hex : function(n){
      return '0x' + n,toString(16);
    }
  }
});

module.exports = env;