/* eslint-disable no-undef,max-len */
import getSqlMap from '../src/utils/getSqlMap';
import { ROOT_PATH } from '../src/const/site';

describe('getSqlMap group', () => {
  it('getSqlMap toBeDefined', () => {
    expect(getSqlMap()).toBeDefined();
  });

  it('getSqlMap get sql path', () => {
    expect(getSqlMap()).toEqual({ 'admin.sql': `${ROOT_PATH}/src/sql/admin.sql` });
  });

  it('getSqlMap ROOT_PATH', () => {
    expect(__dirname).toContain('/__tests__');
    expect(ROOT_PATH).not.toContain('/__tests__');
  });
});
