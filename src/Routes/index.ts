import { Router } from 'express';
import CarRouter from './Car.Routes';
import MotoRouter from './Motorcycle.Routes';

const routes = Router();
routes.use('/cars', CarRouter);
routes.use('/motorcycles', MotoRouter);

export default routes;