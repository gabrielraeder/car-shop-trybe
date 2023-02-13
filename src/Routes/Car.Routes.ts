import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const router = Router();

router.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

router.get(
  '/',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

router.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

router.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

router.delete(
  '/:id',
  (req, res, next) => new CarController(req, res, next).remove(),
);

export default router;