import nunjucks from '../utils/nunjucks';

const get = async (ctx) => {
  const { realName } = ctx.session;
  const { name } = ctx.params;
  ctx.response.body = nunjucks.render('blog.njk', { name: realName || name });
};

module.exports = {
  'GET /blog/:name': get,
};
