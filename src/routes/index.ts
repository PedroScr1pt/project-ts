import express  from "express";
import v1 from './v1/'
import { logger } from "../middleware";

const router = express.Router()

router.use('/v1/',v1);
router.use('*', (req, res) => {
  logger.error(`Route not found: ${req.originalUrl}`);
  logger.error(`Method: ${req.method}`);
  logger.error(`Body: ${JSON.stringify(req.body)}`);
  res.status(404).json({ code: 404, message: 'Not Found' });
});

export default router;