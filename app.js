import dotenv from 'dotenv';

dotenv.config();
import './src/database/index';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        console.log('consttructor');
    }

    middlewares() {
        console.log('mid');
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        console.log('rotas');
        this.app.use('/', homeRoutes);
        this.app.use('/users', userRoutes);
        this.app.use('/tokens', tokenRoutes);
        this.app.use('/alunos', alunoRoutes);
    }
}

export default new App().app;
