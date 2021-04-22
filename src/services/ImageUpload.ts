import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

interface FileFilterCallback {
  (error: Error): void;
  (error: Error | null, acceptFile: boolean): void;
}

aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_KEY_ID,
  accessKeyId: process.env.S3_ACCESS_SECRET_KEY,
  region: 'eu-central-1'
});

const s3 = new aws.S3();

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
};

export const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    // acl: 'public-read',
    bucket: process.env.S3_BUCKET_NAME || '',
    metadata: function (_req, _file, cb) {
      cb(null, { fieldName: 'TESTING_METADATA' });
    },
    key: function (_req, _file, cb) {
      cb(null, Date.now().toString());
    }
  })
});
