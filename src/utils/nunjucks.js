import { Environment, FileSystemLoader } from 'nunjucks';
import { ROOT_PATH } from '../const/site';

const templatesPath = `${ROOT_PATH}/src/templates/`;
const templatesOption = {
  watch: true,
  filters: {
    hex(n) { return `0x${n}`.toString(16); },
  },
};

function createEnv(path, opts) {
  const loaderOpts = { noCache: opts.noCache || false, watch: opts.watch || false };
  const envOpts = { autoescape: opts.autoescape && true, throwOnUndefined: opts.throwOnUndefined || false };
  const env = new Environment(new FileSystemLoader(path, loaderOpts), envOpts);
  if (opts.filters) {
    const keys = Object.keys(opts.filters);
    keys.forEach((f) => {
      env.addFilter(f, opts.filters[f]);
    });
  }
  return env;
}

export default createEnv(templatesPath, templatesOption);
