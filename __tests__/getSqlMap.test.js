/* eslint-disable no-undef,max-len */
import getSqlMap from '../src/utils/getSqlMap';
import { ROOT_PATH } from '../src/const/site';

describe('getSqlMap group', () => {
  it('getSqlMap toBeDefined', () => {
    expect(getSqlMap()).toBeDefined();
  });

  it('getSqlMap get sql path', () => {
    expect(getSqlMap()).toEqual({ 'admin.sql': '/Users/kenny/projects/private/nodejs/koa2Demo1/src/sql/admin.sql' });
  });

  it('getSqlMap ROOT_PATH', () => {
    expect(__dirname).toContain('/__tests__');
    expect(ROOT_PATH).not.toContain('/__tests__');
    expect(ROOT_PATH).toBe('/Users/kenny/projects/private/nodejs/koa2Demo1');
  });
});
