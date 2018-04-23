const regLogger = () => async (ctx, next) => {
  console.log(`${ctx.req.method} ${ctx.req.url}`);
  await next(); // middleWare
};

export default regLogger;
