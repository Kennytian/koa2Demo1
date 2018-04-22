import Koa from 'koa';

// 加载request 请求模块
import bodyParse from 'koa-bodyparser';

// 加载路由模块
import controller from './controllers/controller';
import reqLogger from './logger/reqLogger';
import timeLogger from './logger/timeLogger';

const app = new Koa();

const port = 8083;
const hostname = '127.0.0.1';

// app注入bodyParse中间件
app.use(bodyParse());

// 日志打印
app.use(reqLogger());

// 时间打印
app.use(timeLogger());

app.use(controller());

app.listen(port, hostname, () => {
  console.log(`server has running at http://${hostname}:${port}`);
});
