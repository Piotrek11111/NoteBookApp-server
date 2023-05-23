require('dotenv').config()
module.exports = {
    port: process.env.PORT || 8979,
    database: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/notes-app' 
}