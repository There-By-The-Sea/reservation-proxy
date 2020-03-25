const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

//middleware
app.use(morgan('dev'));

//serve up the react client
app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


//[[[[[[[[[[[[[[[[[[[[[ RESERVATION FROM API ROUTES ]]]]]]]]]]]]]]]]]]]]]

app.use('/reservations/plan', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrgin: true
}));

app.use('/reservations/book', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrgin: true
}));


//[[[[[[[[[[[[[[[[[[[[[ REVIEWS API ROUTES ]]]]]]]]]]]]]]]]]]]]]

app.use('/api/search', createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrgin: true
}));

app.use('/api/reviews', createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrgin: true
}));