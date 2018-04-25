import fs from 'fs';

const walkFile = (pathResolve, mine) => {
  const files = fs.readdirSync(pathResolve);
  const fileList = {};
  files.forEach((item) => {
    const itemArr = item.split('.');
    const itemMine = itemArr.length > 1 ? itemArr[itemArr.length - 1] : 'undefined';
    if (mine === itemMine) {
      fileList[item] = pathResolve + item;
    }
  });
  return fileList;
};

export default walkFile;
