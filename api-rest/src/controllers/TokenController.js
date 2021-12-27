import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
    async store(req, res) {
        const { email = '', password = '' } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                errors: ['Credenciais invalidas'], // É interessante manter a vizualização de erros no mesmo padrão
            });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({
                errors: ['Usuario não existe'], // É interessante manter a vizualização de erros no mesmo padrão
            });
        }

        if (!(await user.passwordIsValid(password))) {
            return res.status(400).json({
                errors: ['senha invalida'], // É interessante manter a vizualização de erros no mesmo padrão
            });
        }

        const { id } = user;

        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,
        });

        /*
        {
            expiresIn: process.env.TOKEN_EXPIRATION,
        }
        */

        return res.json({ token });
    }
}

export default new TokenController();
