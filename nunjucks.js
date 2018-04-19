'use strict';

const nunjucks = require('nunjucks');

function createEnv(path, opts) {
  const autoescape = opts.autoescape && true;
  const noCache = opts.noCache || false;
  const watch = opts.watch || false;
  const throwOnUndefined = opts.throwOnUndefined || false;
  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(__dirname + '/views',{
      noCache : noCache,
      watch : watch
    }),{
      autoescape : autoescape,
      throwOnUndefined : throwOnUndefined
    });
  if(opts.filters){
    for(const f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

const env = createEnv(__dirname + '/views',{
  watch : true,
  filters : {
    hex : function(n){
      return '0x' + n, toString(16);
    }
  }
});

module.exports = env;
