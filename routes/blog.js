import nunjucks from '../nunjucks';

const get = async (ctx) => {
  const { name } = ctx.params;
  const s = nunjucks.render('blog.html', { name });
  console.log('blog.js-e:', s);
  ctx.response.body = s;
};

module.exports = {
  'GET /blog/:name': get,
};
