import mysql from 'mysql';

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

  const connection = mysql.createConnection({
    host: 'localhost', user: 'root', password: 'root', database: 'firstKoa',
  });

  ctx.response.body = `<h3>Logging...${ctx.session.realName || ''}</h3>`;

  connection.connect();
  connection.query(`select * from admin where username = '${name}' and password = '${password}';`, (error, results) => {
    if (error || !results || results.length === 0) {
      ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
      throw error;
    }

    const { username, realname } = results[0];
    if (username === 'admin' && realname === 'Kenny') {
      ctx.session.realName = realname;
      console.log('username, realname, ctx.session:', username, realname, ctx.session);
      ctx.response.body = `<h1>Welcome, ${realname}!</h1><h2><a href="../blog/kenny">blog/kenny</a></h2>`;
    } else {
      ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
    }
  });
  connection.end();
};

module.exports = {
  'GET /': index,
  'POST /signIn': signIn,
};
