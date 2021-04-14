import express, { Request, Response } from 'express';
import { User } from '../models';
const router = express.Router();

router.get('/current-user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await User.findOne({ where: { id } });

    res.status(200).send(response?.toJSON());
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

export { router as getCurrentUser };
