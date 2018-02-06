const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'BACKEND_URL': prod ? 'http://soonoo.me' : 'http://localhost'
}