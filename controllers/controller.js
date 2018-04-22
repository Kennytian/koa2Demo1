import fs from 'fs';

function addMapping(router, mapping) {
  const keys = Object.keys(mapping);
  keys.forEach((url) => {
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
  });
}

function addControllers(router) {
  // 读取routes文件目录
  const routesPath = `${process.cwd()}/routes/`;
  const files = fs.readdirSync(routesPath);
  // 过滤routes中的js文件
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const keys = Object.values(jsFiles);
  keys.forEach((f) => {
    console.log(`process controller: ${f}...`);
    const mapping = require(routesPath + f);
    addMapping(router, mapping);
  });
}

const routes = (dir) => {
  const newDir = dir || 'routes';
  const router = require('koa-router')();
  addControllers(router, newDir);
  return router.routes();
};

export default routes;
