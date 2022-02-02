import express from 'express';
import StatsService from '../../services/stats/stats_service';
import authRoutes from './auth';
import chatBotRoutes from './chat_bot';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/chat', chatBotRoutes);

router.get('/stats', (req, res, next) => {
  try {
    const response = StatsService();
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

router.post('/setToken', (req, res, next) => {
  const { code } = req.body;
  // console.log(code);
  res.sendStatus(204);
});

export default router;
