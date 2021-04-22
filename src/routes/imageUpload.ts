import express, { Request, Response } from 'express';
// import { User } from '../models';
const router = express.Router();

import { upload } from '../services/ImageUpload';
const singleUpload = upload.single('image');

router.post('/upload', async (req: Request, res: Response) => {
  singleUpload(req, res, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return res.json({ imageUrl: req.file.location });
  });
});

export { router as imageUpload };
