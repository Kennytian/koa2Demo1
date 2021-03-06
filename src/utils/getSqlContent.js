import fs from 'fs';
import getSqlMap from './getSqlMap';

export default function getSqlContentMap() {
  const sqlContentMap = {};
  const sqlMap = getSqlMap();
  const keys = Object.keys(sqlMap);
  keys.forEach((key) => {
    const content = fs.readFileSync(sqlMap[key], 'utf-8');
    sqlContentMap[key] = content;
  });
  return sqlContentMap;
}
