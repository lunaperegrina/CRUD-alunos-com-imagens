import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = Math.floor(Math.random() * 10000 + 20000);

export default {

    // eslint-disable-next-line consistent-return
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
            return cb(new multer.MulterError('arquivo precisa ser PNG ou JPG'));
        }
        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`);
        },
    }),

};
