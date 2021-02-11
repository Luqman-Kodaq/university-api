import express from 'express';
import connectDB from './db/connection.js';
import api from './api/index.js';

connectDB();

const app = express();

app.use(express.json());

app.use('/api', api);

export default app;
