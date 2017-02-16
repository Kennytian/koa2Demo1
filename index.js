'use strict';

const koa = require('koa');
const app = new koa();

const port = 8089;
const hostname = 'localhost';

app.use(async(ctx, next) => {
  console.log(`${ctx.req.method} ${ctx.req.url}`);
  await next();
});

app.use(async(ctx, next) => {
  const start = new Date().getTime();

  await next();

  const ms = new Date().getTime() - start;

  console.log('time:', ms);
});

app.use(async(ctx, next) => {
  await next();

  ctx.res.writeHead(200, {'Content-Type': 'text/html'});
  ctx.res.end('<h1>Welcome to koa world!</h1>');
});

app.listen(port, hostname, () => {
  console.log('server has running at ', hostname, port);
});