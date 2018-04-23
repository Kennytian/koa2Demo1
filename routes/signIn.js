import { md5 } from '../src/utils/crypto';
import { query } from '../src/utils/mysql';
import nunjucks from '../nunjucks';

const signIn = async (ctx) => {
  const name = ctx.request.body.name || '';
  const password = md5(ctx.request.body.password || '');
  const sql = `select * from admin where username = '${name}' and password = '${password}';`;

  const result = await query(sql);
  const { username, realname } = result[0];
  if (username === 'admin' && realname === 'Kenny') {
    ctx.session.realName = realname;
    ctx.response.body = nunjucks.render('signIn.html', { name: realname });
  } else {
    ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
  }
};

module.exports = {
  'POST /signIn': signIn,
};
