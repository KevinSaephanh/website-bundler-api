import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import connectToDatabase from '@utils/db';
import { errorMiddleware } from '@middleware/error.middleware';
import routes from '@routes/index';

const main = async () => {
  const app = express();
  const port = process.env.PORT;

  // Connect to DB
  await connectToDatabase();

  // Middleware
  app.use(logger('combined'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(errorMiddleware);

  // Routes
  app.use('/api/v1', routes);

  app.listen(port, () => {
    console.log(`Server started on the port ${port}`);
  });
};

main();
