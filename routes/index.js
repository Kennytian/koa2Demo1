const index = async (ctx) => {
  ctx.response.body = `<h1>Index</h1>
        <form action="/signIn" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password" value="12345"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

const signIn = async (ctx) => {
  const name = ctx.request.body.name || '';
  const password = ctx.request.body.password || '';
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1><h2><a href="../blog/kenny">blog/kenny</a></h2>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
  }
};

export default {
  'GET /': index,
  'POST /signIn': signIn,
};
