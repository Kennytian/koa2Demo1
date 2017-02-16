'use strict';

const koa = require('koa');
const router = require('koa-router')();
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

router.get('/blog/:name', async(ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}</h1>`;
});

router.get('/', async(ctx, next) => {
  ctx.response.body = `<h1>Index</h1>`;
});

app.use(router.routes());

app.listen(port, hostname, () => {
  console.log('server has running at ', hostname, port);
});