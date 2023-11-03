import  Express  from "express";
import { perfil, registrar, confirmar, autenticar } from '../controllers/veterinarioController.js';
import checkAuth from "../middleware/authMiddleware.js";
 
const router = Express.Router();

router.post('/', registrar );
router.get('/confirmar/:token', confirmar );
router.post('/login', autenticar);


router.get('/perfil', checkAuth, perfil );

export default router; 