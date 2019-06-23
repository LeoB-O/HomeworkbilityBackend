const credentials = {
  production: {
    mongodb: {
      url: 'mongodb://localhost/homework',
      options: {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    },
    jwt: {
      secret: '123456',
      options: {
        cookie: 'hw',
        cookies: true,
      }
    },
    upload: {
      baseDir: '/data/homeworks',
      options: {
        createParentPath: true
      }
    },
    cors: {
      options: {
        origin: 'http://47.102.144.176',
        credentials: true
      }
    }
  },
  development: {
    mongodb: {
      url: 'mongodb://localhost/homework',
      options: {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    },
    jwt: {
      secret: '123456',
      options: {
        cookie: 'hw',
        cookies: true,
      }
    },
    upload: {
      baseDir: '/Users/leob_o/Desktop/homeworks',
      options: {
        createParentPath: true
      }
    },
    cors: {
      options: {
        origin: 'http://127.0.0.1:8080',
        credentials: true
      }
    }
  }
  
}



module.exports = process.env.NODE_ENV=='production'?credentials.production:credentials.development;