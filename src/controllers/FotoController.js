/* eslint-disable consistent-return */
import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
    store(req, res) {
        return upload(req, res, async(err) => {
            if (err) {
                return res.status(400).json({ errors: [err.code] });
            }
            const { originalname, filename } = req.file;
            const { aluno_id } = req.body;
            console.body(aluno_id);
            const foto = await Foto.create({ originalname, filename });
            return res.json(foto);
        });
    }
}

export default new FotoController();
