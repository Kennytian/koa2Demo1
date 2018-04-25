/* eslint-disable no-undef,max-len */
import getSqlMap from '../src/utils/getSqlMap';

describe('getSqlMap group', () => {
  it('getSqlMap not.toBeNull', () => {
    expect(getSqlMap()).not.toBeNull();
  });

  it('getSqlMap can work', () => {
    expect(getSqlMap()).toEqual(1);
  });
});
