import User from '../models/User';

class UserController {
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);

            const { id, nome, email } = novoUser;

            return res.status(200).json({ id, nome, email });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ errors: e.errors.map((err) => err.message) });
        }
    }

    async index(req, res) {
        try {
            console.log(req.userId);
            console.log(req.userEmail);
            const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
            return res.status(200).json(users);
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map((err) => err.message) });
        }
    }

    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);

            const { id, nome, email } = user;

            return res.status(200).json({ id, nome, email });
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map((err) => err.message) });
        }
    }

    async update(req, res) {
        try {
            // if (!req.userId) {
            //     return res.status(400).json({
            //         errors: ['ID não enviado'], // É interessante manter a vizualização de erros no mesmo padrão
            //     });
            // }

            const user = await User.findByPk(req.userId);
            if (!user) {
                return res.status(400).json({
                    errors: ['Usuario não existe'], // É interessante manter a vizualização de erros no mesmo padrão
                });
            }
            const novosDados = await user.update(req.body);

            const { id, nome, email } = novosDados;

            return res.status(200).json({ id, nome, email });
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map((err) => err.message) });
        }
    }

    async delete(req, res) {
        try {
            console.log('passou 1');

            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuario não existe'], // É interessante manter a vizualização de erros no mesmo padrão
                });
            }

            await user.destroy();
            return res.status(200).json({ success: 'Usuario deletado' });
        } catch (e) {
            return res.status(400).json({ errors: e.errors.map((err) => err.message) });
        }
    }
}

export default new UserController();
