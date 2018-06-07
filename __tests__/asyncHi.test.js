/* eslint-disable no-undef,max-len */
import asyncHi from './asyncHi';

test('should get "Hi, 58FE"', (done) => {
  asyncHi('58FE', (result) => {
    expect(result).toBe('Hi, 58FE');
    done();
  });
});
