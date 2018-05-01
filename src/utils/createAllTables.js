/* eslint-disable no-restricted-syntax,guard-for-in,no-await-in-loop */
import getSqlContentMap from './getSqlContent';
import { query } from './mysql';

const eventLog = (err, sqlFile, index) => {
  if (err) {
    console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`);
  } else {
    console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`);
  }
};

const createAllTables = async () => {
  const sqls = getSqlContentMap();
  for (const key in sqls) {
    const sqlShell = sqls[key];
    const sqlShellList = sqlShell.split(';');

    for (const [i, shell] of sqlShellList.entries()) {
      if (shell.trim()) {
        const result = await query(shell);
        if (result.serverStatus * 1 === 2) {
          eventLog(null, key, i);
        } else {
          eventLog(true, key, i);
        }
      }
    }
  }
  console.log('sql脚本执行结束！');
};

export default createAllTables;
