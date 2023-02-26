const express = require('express');
const cors = require('cors');

require('./config/connect');
const consoleRoute=require('./routes/console')




const app = express();
app.use(express.json());
app.use(cors());




app.use('/console', consoleRoute);

app.use('/getimage', express.static('./uploads'));


app.listen(3002, () => {
  console.log('server work :) !');
})