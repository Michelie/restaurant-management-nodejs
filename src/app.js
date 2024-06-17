const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();
// Middleware
app.use(bodyParser.json());

// Menu Routes
const menuRoutes = require('./routes/menu.routes');
app.use('/api/menu', menuRoutes);

// Order routes
const orderRoutes = require('./routes/order.routes');
app.use('/api/order', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
