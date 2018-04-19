'use strict';

import nunjucks from '../nunjucks';

const fn_get = async (ctx, next) => {
  const name = ctx.params.name;
  const s = nunjucks.render('blog.html', { name: name });
  console.log(s);
  ctx.response.body = s;
}

module.exports = {
  'GET /blog/:name' : fn_get
};
