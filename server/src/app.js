const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Start express app
const app = express();

// Middleware
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 3) ROUTES
app.use('/api/v1/health-check', (req, res) => {
  res.send({ status: 200, message: 'Working well 🔥' });
});
// app.use("/api/v1/businesses", businessesRouter);

app.all('*', (req, res) => {
  res.status('404').send(`Cant find ${req.originalUrl} on this server!`);
});

module.exports = app;
