import express, { Request, Response } from 'express';
import { User } from '../models';
const router = express.Router();

router.get('/list-users', async (req: Request, res: Response) => {
  try {
    const response = await User.findAll();

    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

export { router as listUsers };
