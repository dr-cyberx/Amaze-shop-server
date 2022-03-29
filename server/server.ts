import express, { Application } from 'express';
import dotenv from 'dotenv';
import Resolvers from '../api/resolvers/index';
import TypeDefs from '../api/typedefs';
import startApolloServer from './initializeServer';
import connectDB from '../db/connectDb';

dotenv.config();

const app: Application = express();

app.get('/', (req, res) => {
  res.json({ hello: 'hello' });
});

connectDB(`${process.env.MongoDB_URL}`)
  .then(() => {
    startApolloServer(TypeDefs, Resolvers, app);
  })
  .catch((err) => {
    console.log('failed to connect DB ', err);
  });
