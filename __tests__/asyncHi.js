export default (name, cb) => {
  setTimeout(() => cb(`Hi, ${name}`), 1000);
};
