import express, { Request, Response } from 'express';
import { User } from '../models';
const router = express.Router();

router.delete('/delete-user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await User.destroy({
      where: {
        id
      }
    });

    res.status(204).send({});
  } catch (error) {
    throw new Error(error);
  }
});

export { router as deleteUser };
