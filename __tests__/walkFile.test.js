/* eslint-disable no-undef,max-len */
import walkFile from '../src/utils/walkFile';

describe('walkFile group', () => {
  it('walkFile not.toBeNull', () => {
    const filePath = '/Users/kenny/projects/private/nodejs/koa2Demo1/src/routes';
    expect(walkFile(filePath, 'js')).not.toBeNull();
  });

  it('walkFile check file type .js', () => {
    const filePath = '/Users/kenny/projects/private/nodejs/koa2Demo1/src/logger/';
    const expected = {
      'reqLogger.js': '/Users/kenny/projects/private/nodejs/koa2Demo1/src/logger/reqLogger.js',
      'timeLogger.js': '/Users/kenny/projects/private/nodejs/koa2Demo1/src/logger/timeLogger.js',
    };
    expect(walkFile(filePath, 'js')).toEqual(expected);
  });

  it('walkFile check file type .jsx', () => {
    const filePath = '/Users/kenny/projects/private/nodejs/koa2Demo1/src/logger';
    expect(walkFile(filePath, 'jsx')).not.toHaveProperty('reqLogger.js');
  });

  it('walkFile check file type .json', () => {
    const filePath = '/Users/kenny/projects/private/nodejs/koa2Demo1/src';
    expect(walkFile(filePath, 'json')).toEqual({});
  });
});
