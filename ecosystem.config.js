module.exports = {
  apps : [{
    name: 'homework',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      // key  : '~/.ssh/',
      host : '47.102.144.176',
      ref  : 'origin/master',
      repo : 'git@github.com:LeoB-O/HomeworkbilityBackend.git',
      path : '/data/project/HomeworkbilityBackend',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
