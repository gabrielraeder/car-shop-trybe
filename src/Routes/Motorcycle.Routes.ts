import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const router = Router();

router.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

router.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

router.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

router.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

router.delete(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).remove(),
);

export default router;