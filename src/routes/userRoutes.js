import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveriam existir
router.get('/index', userController.index);
router.get('/show/:id', userController.show);

router.post('/store', userController.store); // Cria um usuario
router.put('/update', loginRequired, userController.update); // Muda os dados do proprio usuario
router.delete('/delete', loginRequired, userController.delete); // Deleta o proprio usuario

export default router;

/*

index -> lista todos os usuarios - GET
store/create -> cria um novo usuario - POST
delete -> apaga um usuario - DELETE
show -> mostra um usuario - GET
update -> atualiza um usuario - PUT OU PATCH

*/
