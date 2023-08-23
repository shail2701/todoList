const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./config/db');
const todoRoutes = require('./routes/todoRoute');


const PORT = process.env.PORT || 3001;

async function startApp() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      // Your middleware and routes will go here
      app.use(express.json());
      app.use('/api/tododata',todoRoutes);
  
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  startApp();