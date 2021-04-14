import express, { Request, Response } from 'express';
import { User } from '../models';
const router = express.Router();

router.post('/create-user', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email } = req.body;

    try {
      const result = await User.create({
        firstName,
        lastName,
        email
      });

      console.log(`User created: ${result.toJSON()}`);
      res.status(201).send(result.toJSON());
    } catch (error) {
      throw new Error(error);
      res.status(500);
    }
  } catch (error) {
    console.error(error);
  }
});

export { router as createUser };
