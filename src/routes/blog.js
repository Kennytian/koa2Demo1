import nunjucks from '../utils/nunjucks';

const get = async (ctx) => {
  const { name } = ctx.params;
  ctx.response.body = nunjucks.render('blog.html', { name });
};

module.exports = {
  'GET /blog/:name': get,
};
