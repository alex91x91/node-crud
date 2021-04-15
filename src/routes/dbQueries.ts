import express, { Request, Response } from 'express';
// import { User } from '../models';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    // quieries
    // console.log(`User created: ${result.toJSON()}`);
  } catch (error) {
    throw new Error(error);
  }
});

export { router as dbQueries };
