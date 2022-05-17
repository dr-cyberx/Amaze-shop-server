import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Resolvers from '../api/resolvers/index';
import TypeDefs from '../api/typedefs';
import startApolloServer from './initializeServer';
import connectDB from '../db/connectDb';
import { BulkImport } from '../controllers/Products';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credential: true,
};

app.use(cors(corsOptions));

connectDB(`${process.env.MongoDB_URL}`)
  .then(() => {
    startApolloServer(TypeDefs, Resolvers, app);
  })
  .catch((err) => {
    console.log('failed to connect DB ', err);
  });

app.get('/ishealthy', (req, res) => {
  res.json({ message: 'I am healthy' });
});

app.post('/uploadcsv', BulkImport);

app.get('/favicon.ico', (req, res) => {
  res.json({ hello: 'hello' });
});
