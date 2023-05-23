const { database } =  require('../config.js')
const mongoose = require('mongoose')
mongoose.connect(database , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


