import Koa from 'koa';
import session from 'koa-session';

// 加载request 请求模块
import bodyParse from 'koa-bodyparser';

// 加载路由模块
import controller from './controllers/controller';
import reqLogger from './logger/reqLogger';
import timeLogger from './logger/timeLogger';
import { HOST_NAME, PORT } from './const/site';

const app = new Koa();

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
};

app.use(session(CONFIG, app));

// app注入bodyParse中间件
app.use(bodyParse());

// 日志打印
app.use(reqLogger());

// 时间打印
app.use(timeLogger());

app.use(controller());

app.listen(PORT, HOST_NAME, () => {
  console.log(`server has running at http://${HOST_NAME}:${PORT}`);
});
