/* eslint-disable no-undef,max-len */
import getSqlContent from '../src/utils/getSqlContent';

describe('getSqlContent group', () => {
  it('getSqlContent not.toBeNull', () => {
    expect(getSqlContent()).toBeDefined();
  });

  it('getSqlContent get sql string contains', () => {
    const isContain = Object.keys(getSqlContent()).includes('admin.sql');
    expect(isContain).toEqual(true);
  });
});
