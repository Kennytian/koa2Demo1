import { query } from './async-mysql';
import { md5 } from '../utils/crypto';

const index = async (ctx) => {
  ctx.response.body = `<h1>Index${ctx.session.realName || ''}</h1>
        <form action="/signIn" method="post">
            <p>Name: <input name="name" value="admin"></p>
            <p>Password: <input name="password" type="password" value="123456"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};


const signIn = async (ctx) => {
  const name = ctx.request.body.name || '';
  const password = md5(ctx.request.body.password || '');
  const sql = `select * from admin where username = '${name}' and password = '${password}';`;

  const result = await query(sql);
  console.log(result);
  const { username, realname } = result[0];
  if (username === 'admin' && realname === 'Kenny') {
    ctx.session.realName = realname;
    console.log('username, realname, ctx.session:', username, realname, ctx.session);
    ctx.response.body = `<h1>Welcome, ${realname}!</h1><h2><a href="../blog/kenny">blog/kenny</a></h2>`;
  } else {
    ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
  }
};

module.exports = {
  'GET /': index,
  'POST /signIn': signIn,
};
