module.exports = {
  general: {
    port: 3000
  },
  database: {
    mongodbEndpoint: process.env.MONGODB_ENDPOINT || 'mongodb://127.0.0.1:27017/articles-sample-api'
  },
  api: {
    header: 'Bearer',
    key: process.env.API_KEY || '5CD4ED173E1C95FE763B753A297D5'
  }
}
