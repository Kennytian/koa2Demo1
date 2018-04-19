'use strict';

import fs from 'fs';

function addMapping(router, mapping){
  for(const url in mapping){
    if(url.startsWith('GET ')){
      const path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    }else if(url.startsWith('POST ')){
      const path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    }else{
      console.log(`invalid URL: ${url}`);
    }
  }
}

function addControllers(router){
  //读取routes文件目录
  const files = fs.readdirSync(__dirname + '/routes');
  //过滤routes中的js文件
  const js_files = files.filter((f) => {
    return f.endsWith('.js');
  });
  for (const f of js_files) {
    console.log(`process controller: ${f}...`);
    let mapping = require(__dirname + '/routes/' + f);
    addMapping(router, mapping);
  }
}

module.exports = function(dir){
  const controllers_dir = dir || 'routes';
  const  router = require('koa-router')();
  addControllers(router, controllers_dir);
  return router.routes();
};
