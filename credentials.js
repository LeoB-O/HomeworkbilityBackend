module.exports = {
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
      cookieOptions: {domain: '', path: ''}
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
      origin: 'http://47.102.144.176',
      credentials: true
    }
  }
}