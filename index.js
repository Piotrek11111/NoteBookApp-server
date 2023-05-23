const express = require('express');

const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')

const { port } = require('./config.js');

const routing = require('./routes/api');
require('./db/mongoose.js');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/', routing);



app.listen(port, () => {
  console.log(`running ${port}`);
});
