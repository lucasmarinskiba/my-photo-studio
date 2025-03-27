// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Rutas
const authRoutes = require('./routes/authRoutes');
const photoRoutes = require('./routes/photoRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/photos', photoRoutes);

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/photoStudio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = app;

