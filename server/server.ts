import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Resolvers from '../api/resolvers/index';
import TypeDefs from '../api/typedefs';
import startApolloServer from './initializeServer';
import connectDB from '../db/connectDb';
import { BulkImport, productCsvExport } from '../controllers/Products';
import { findFromDB } from '../utils/shared';
import Product from '../db/models/Product';

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

// ------------------routes---------------------

app.get('/ishealthy', (req: Request, res: Response): void => {
  res.json({ message: 'I am healthy' });
});

app.get('/favicon.ico', (req: Request, res: Response) => {
  res.json({ hello: 'hello' });
});

app.get('/GetAllProductCSV', productCsvExport);

app.post('/uploadcsv', BulkImport);
