import express, { Request, Response } from 'express';
import { coinAPIService } from '../services/CoinAPIService';
const router = express.Router();

router.get('/exchanges/:id', async (req: Request, res: Response) => {
  const { id: exchange_id } = req.params;

  try {
    const exchange = await coinAPIService.getExchangeById(exchange_id);

    console.log('DATA', exchange);

    res.json(exchange);
  } catch (error) {
    console.error(error);
  }
});

export { router as getExchangesById };
