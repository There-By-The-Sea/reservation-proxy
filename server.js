const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

//middleware
app.use(morgan('dev'));

//serve up the react client
app.use(express.static('client'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});