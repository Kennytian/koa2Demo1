import nunjucks from '../nunjucks';

const get = async (ctx) => {
  const { name } = ctx.params;
  ctx.response.body = nunjucks.render('blog.html', { name });
};

export default {
  'GET /blog/:name': get,
};
