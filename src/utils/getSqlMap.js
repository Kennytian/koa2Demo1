import walkFile from './walkFile';
import { ROOT_PATH } from '../const/site';

export default function getSqlMap() {
  const path = `${ROOT_PATH}/../src/sql/`;
  const fileList = walkFile(path, 'sql');
  return fileList;
}
