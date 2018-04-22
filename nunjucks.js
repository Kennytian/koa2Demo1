import nunjucks from 'nunjucks';

function createEnv(path, opts) {
  const autoEscape = opts.autoescape && true;
  const noCache = opts.noCache || false;
  const watch = opts.watch || false;
  const throwOnUndefined = opts.throwOnUndefined || false;
  const viewsPaths = `${__dirname}/views`;
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(viewsPaths, {
    noCache,
    watch,
  }), {
    autoescape: autoEscape,
    throwOnUndefined,
  });
  if (opts.filters) {
    const keys = Object.keys(opts.filters);
    keys.forEach((f) => {
      env.addFilter(f, opts.filters[f]);
    });
  }
  return env;
}

const env = createEnv(`${__dirname}/views`, {
  watch: true,
  filters: {
    hex(n) {
      return `0x${n}`.toString(16);
    },
  },
});

export default env;
