module.exports = {
  apps: [{
    name      : 'nuxt-app',
    script    : './.output/server/index.mjs',
    exec_mode : 'fork',
    instances : 1,
    autorestart: true,
    watch: false
  }]
};