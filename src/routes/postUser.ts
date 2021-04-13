import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/create-user', async (req: Request, res: Response) => {
  try {
    // console.log('DATA', exchanges);

    res.status(201).send({});
  } catch (error) {
    console.error(error);
  }
});

export { router as getExchanges };
