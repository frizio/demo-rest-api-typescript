// Server CONFIGURATION

import express from 'express'
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  return res.send(`The API is at http://localhost:${app.get('port')}`);
})

export default app;