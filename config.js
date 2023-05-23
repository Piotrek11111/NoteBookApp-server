require('dotenv').config()
module.exports = {
    port: process.env.PORT || 8979,
    database: process.env.MONGODB_URI
}