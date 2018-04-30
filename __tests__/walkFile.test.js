/* eslint-disable no-undef,max-len */
import walkFile from '../src/utils/walkFile';
import { ROOT_PATH } from '../src/const/site';

describe('walkFile group', () => {
  it('walkFile not.toBeNull', () => {
    const filePath = `${ROOT_PATH}/src/routes`;
    expect(walkFile(filePath, 'js')).not.toBeNull();
  });

  it('walkFile check file type .js', () => {
    const filePath = `${ROOT_PATH}/src/logger/`;
    const expected = {
      'reqLogger.js': `${ROOT_PATH}/src/logger/reqLogger.js`,
      'timeLogger.js': `${ROOT_PATH}/src/logger/timeLogger.js`,
    };
    expect(walkFile(filePath, 'js')).toEqual(expected);
  });

  it('walkFile check file type .jsx', () => {
    const filePath = `${ROOT_PATH}/src/logger`;
    expect(walkFile(filePath, 'jsx')).not.toHaveProperty('reqLogger.js');
  });

  it('walkFile check file type .json', () => {
    const filePath = `${ROOT_PATH}/src`;
    expect(walkFile(filePath, 'json')).toEqual({});
  });
});
