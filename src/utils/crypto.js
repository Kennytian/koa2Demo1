import CryptoJS from 'crypto-js';

export function md5(originString) {
  return CryptoJS.MD5(originString).toString();
}
