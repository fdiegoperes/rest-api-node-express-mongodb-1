require('dotenv').config();

const express = require('express'); // pull the express library 
const app = express(); // app variable used to configure the server
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

// Anonymous funtions gets run whener the server is started
app.listen(3000, () => console.log('Server Started'));