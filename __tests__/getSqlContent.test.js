/* eslint-disable no-undef,max-len */
import getSqlContent from '../src/utils/getSqlContent';

describe('getSqlContent group', () => {
  it('getSqlContent not.toBeNull', () => {
    expect(getSqlContent()).toBeDefined();
  });

  it('getSqlContent get sql string toMatchObject', () => {
    const expected = { 'admin.sql': expect.stringMatching(/CREATE TABLE/) };
    expect(getSqlContent()).toMatchObject(expected);
  });
});
