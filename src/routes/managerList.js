/* eslint-disable no-unused-vars */
import md5 from 'md5';
import { query } from '../utils/mysql';

import nunjucks from '../utils/nunjucks';
import Admin from '../model/admin';

const managerList = async (ctx) => {
  const name = ctx.request.body.name || '';
  const password = md5(ctx.request.body.password || '');
  const sql = `select * from admin where username = '${name}' and password = '${password}';`;
  const result = await query(sql);
  if (!result || !result.length) {
    ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
    return;
  }
  const { username, realname } = result[0];
  if (username === 'admin' && realname === 'Kenny') {
    ctx.session.realName = realname;
    const sqlAll = 'select uid, username, realname, password from admin';
    const resultAll = await query(sqlAll);
    ctx.response.body = nunjucks.render('managerList.njk', {
      name: realname,
      dataList: resultAll,
    });
  } else {
    ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
  }
};

const managerListWithSequelize = async (ctx) => {
  const name = ctx.request.body.name || '';
  const password = md5(ctx.request.body.password || '');
  const oneAdmin = await Admin.findOne({
    where: {
      username: name,
      password,
    },
  });
  if (!oneAdmin) {
    ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
    return;
  }
  const { username, realname } = oneAdmin;
  if (username === 'admin' && realname === 'Kenny') {
    ctx.session.realName = username;
    const allAdmin = await Admin.findAll({
      attributes: ['uid', 'username', 'realname', 'password'],
    });
    ctx.response.body = nunjucks.render('managerList.njk', {
      name: realname,
      dataList: allAdmin,
    });
  } else {
    ctx.response.body = '<h1>Login failed!</h1><p><a href="/">Try again</a></p>';
  }
};

const managerListOptions = async (ctx) => {
  const { action, uid } = ctx.params;
  if (uid && action === 'del') {
    const sql = `delete from admin where uid = ${uid}`;
    await query(sql);
    ctx.response.body = `<h1>${uid} deleted. <a href="javascript:history.go(-1)">Go back</a></p>`;
  } else if (uid && action === 'edit') {
    const sql = `select * from  admin where uid = ${uid}`;
    const result = await query(sql);
    if (result && result[0] && result[0].username) {
      const { realName } = ctx.session;
      ctx.response.body = nunjucks.render('managerEdit.njk', {
        name: realName,
        action,
        result: result[0],
      });
    } else {
      ctx.response.body = '<h1>Server unavailable, try again!</p>';
    }
  }
};

const managerListOptionsWithSequelize = async (ctx) => {
  const { action, uid } = ctx.params;
  if (uid && action === 'del') {
    await Admin.destroy({ where: { uid } });
    ctx.response.body = `<h1>${uid} deleted. <a href="javascript:history.go(-1)">Go back</a></p>`;
  } else if (uid && action === 'edit') {
    const result = await Admin.findOne({ where: { uid } });
    if (result && result.username) {
      const { realName } = ctx.session;
      ctx.response.body = nunjucks.render('managerEdit.njk', {
        name: realName,
        action,
        result,
      });
    } else {
      ctx.response.body = '<h1>Server unavailable, try again!</p>';
    }
  }
};

const managerEdit = async (ctx) => {
  const uid = ctx.request.body.uid || 0;
  const username = ctx.request.body.username || '';
  const realname = ctx.request.body.realname || '';
  const password = md5(ctx.request.body.password || '');
  const sqlEdit = `update admin set username='${username}', realname='${realname}', password='${password}' where uid = ${uid}`;
  const resultEdit = await query(sqlEdit);
  if (resultEdit && resultEdit.affectedRows) {
    const { realName } = ctx.session;
    const sqlAll = 'select uid, username, realname, password from admin';
    const resultAll = await query(sqlAll);
    ctx.response.body = nunjucks.render('managerList.njk', {
      name: realName,
      dataList: resultAll,
    });
  } else {
    ctx.response.body = '<h1>Server unavailable, try again!</p>';
  }
};

const managerEditWithSequelize = async (ctx) => {
  try {
    const uid = ctx.request.body.uid || 0;
    const username = ctx.request.body.username || '';
    const realname = ctx.request.body.realname || '';
    const password = md5(ctx.request.body.password || '');
    const result = await Admin.update(
      { username, realname, password },
      { where: { uid } },
    );
    const { realName } = ctx.session;
    const allAdmin = await Admin.findAll({
      attributes: ['uid', 'username', 'realname', 'password'],
    });
    ctx.response.body = nunjucks.render('managerList.njk', {
      name: realName,
      dataList: allAdmin,
    });
  } catch (e) {
    ctx.response.body = '<h1>Server unavailable, try again!</p>';
  }
};

module.exports = {
  // 'POST /managerList': managerList,
  // 'GET /managerList/:action/:uid': managerListOptions,
  // 'POST /managerList/:action/': managerEdit,
  'POST /managerList': managerListWithSequelize,
  'GET /managerList/:action/:uid': managerListOptionsWithSequelize,
  'POST /managerList/:action/': managerEditWithSequelize,
};
