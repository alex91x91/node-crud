import express, { Request, Response } from 'express';
import { coinAPIService } from '../services/CoinAPIService';
const router = express.Router();

router.get('/exchanges', async (req: Request, res: Response) => {
  try {
    const exchanges = await coinAPIService.getExchanges();

    console.log('DATA', exchanges);

    res.json(exchanges);
  } catch (error) {
    console.error(error);
  }
});

export { router as getExchanges };
