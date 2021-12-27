/* eslint-disable consistent-return */
import Aluno from '../models/Aluno';

class AlunoController {
    async index(req, res) {
        const listaAlunos = await Aluno.findAll();
        console.log('index');
        res.status(200).json(listaAlunos);
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(404).json({
                    errors: ['Aluno não encontrado'],
                });
            }

            return res.json(aluno);
        } catch (e) {
            res.status(404).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async store(req, res) {
        try {
            const novoAluno = await Aluno.create(req.body);

            return res.json(novoAluno);
        } catch (e) {
            res.status(404).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe'],
                });
            }

            const alunoAtualizado = await aluno.update(req.body);

            res.status(200).json(alunoAtualizado);
        } catch (e) {
            res.status(400).json('Nao deu');
            // return res.status(400).json({ errors: e.errors.map((err) => err.message) });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(404).json({
                    errors: ['Aluno não encontrado'],
                });
            }

            await aluno.destroy();

            return res.json({ delete: ['true'] });
        } catch (e) {
            res.status(404).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new AlunoController();