import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';


//importar routes

import backupRoutes from './routes/backup.routes';

// init
const app = express();

// settings

app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(bodyParser.json());

// routes

app.use(backupRoutes);

export default app;