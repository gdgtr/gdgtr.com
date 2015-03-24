module.exports = {
  status: 'default',
  mongoose: {
    uri: process.env.MONGO_URL || 'mongodb://localhost/gdg'
  },
  server: {
    port: process.env.PORT || 8000
  }
};