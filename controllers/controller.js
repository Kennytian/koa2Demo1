import fs from 'fs';

function addMapping(router, mapping) {
  for (const url in mapping) {
    if (url.startsWith('GET ')) {
      const path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith('POST ')) {
      const path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else {
      console.log(`invalid URL: ${url}`);
    }
  }
}

function addControllers(router) {
  // 读取routes文件目录
  const routesPath = `${process.cwd()}/routes/`;
  const files = fs.readdirSync(routesPath);
  // 过滤routes中的js文件
  const jsFiles = files.filter(f => f.endsWith('.js'));
  for (const f of jsFiles) {
    console.log(`process controller: ${f}...`);
    const mapping = require(routesPath + f);
    addMapping(router, mapping);
  }
}

module.exports = function (dir) {
  const newDir = dir || 'routes';
  const router = require('koa-router')();
  addControllers(router, newDir);
  return router.routes();
};
