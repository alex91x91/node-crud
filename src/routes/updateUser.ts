import express, { Request, Response } from 'express';
import { User } from '../models';
const router = express.Router();

router.put('/update-user/:id', async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;

  try {
    await User.update(
      { firstName, lastName, email },
      {
        where: {
          id
        }
      }
    );

    res.status(200).send({});
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

export { router as updateUser };
