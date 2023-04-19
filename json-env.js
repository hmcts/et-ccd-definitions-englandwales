const env = process.argv[2];
if (!env) {
  console.error('Provide an environment parameter');
  process.exit(1);
}

const config = require('./env.json');

if (!config[env]) {
  console.error(`Environment "${env}" not found in env.json`);
  process.exit(1);
}

Object.entries(config[env]).forEach(([k, v]) => {
  process.env[k] = v.startsWith('$') ? process.env[v.slice(1)] : v;
});

process.env.ET_ENV = env;

require('./node_modules/.bin/yarn')([
  'run',
  `generate-excel`,
  '-e',
  '*-prod.json',
]);

