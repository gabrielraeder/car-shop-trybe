import express from 'express';
import ErrorHandler from './Middlewares/Error.middleware';
import routes from './Routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorHandler.errorMiddleware);

export default app;
