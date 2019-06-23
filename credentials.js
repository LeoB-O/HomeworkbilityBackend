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
      cookies: false,
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
      origin: 'http://127.0.0.1:8080',
      credentials: true
    }
  }
}