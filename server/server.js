require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const connectMongo = require('./config/mongodb');
const errorHandler = require('./middleware/error');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectMongo();

const authRouter = require('./routes/auth');

app.use('/api/auth', authRouter);

//Error Handler
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
