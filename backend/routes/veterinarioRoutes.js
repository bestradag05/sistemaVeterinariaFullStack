import  Express  from "express";
import { perfil, 
    registrar, 
    confirmar, 
    autenticar, 
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword } from '../controllers/veterinarioController.js';
import checkAuth from "../middleware/authMiddleware.js";
 
const router = Express.Router();

// Area publica
router.post('/', registrar );
router.get('/confirmar/:token', confirmar );
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);

//Este codigo es lo mismo que los dos que estan debajo.
/* router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword); */
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);


//Area privada
router.get('/perfil', checkAuth, perfil );
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);

export default router; 