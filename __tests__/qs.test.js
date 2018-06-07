/* eslint-disable no-undef,max-len */
import qs from 'qs';

describe('qs group', () => {
  it('result 1', () => {
    const result = {
      state: 'opened',
      labels: 'foo',
      milestone: null,
      author_id: 5,
      iids: [1, 2],
    };
    const actual = qs.stringify(result, { addQueryPrefix: true, encode: false, skipNulls: true });
    const expected = '?state=opened&labels=foo&author_id=5&iids[0]=1&iids[1]=2';
    expect(actual).toEqual(expected);
  });
});
