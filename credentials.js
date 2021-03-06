/*
 * @Description: 
 * @version: 1.0
 * @Author: Leo
 * @Date: 2019-06-22 15:03:11
 * @LastEditors: Leo
 * @LastEditTime: 2019-08-08 21:43:19
 */
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
        origin: 'http://blog.leobob.cn',
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