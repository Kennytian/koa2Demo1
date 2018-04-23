const login = async (ctx) => {
  ctx.response.body = `<h1>登录</h1>
        <form action="/detail" method="post">
            <p>Name: <input name="name" value="admin"></p>
            <p>Password: <input name="password" type="password" value="123456"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

module.exports = {
  'GET /': login,
};
