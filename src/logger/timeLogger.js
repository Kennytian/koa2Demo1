const timeLogger = () => async (ctx, next) => {
  const start = new Date().getTime(); // bengin time

  await next(); // 调用下一个中间件 middleWare

  const ms = new Date().getTime() - start; // use time

  console.log(`Use time: ${ms}`); // print use time
};

export default timeLogger;
