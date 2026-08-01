import {Router} from 'express';
 import authenticate from '../middlewares/authenticate.js';
import { me  , login, register } from '../controllers/auth.controller.js';
import validate from "../middlewares/validate.js";
import { registerSchema , loginSchema } from "../schemas/auth.schema.js";


const router = Router();
 
router.post("/register", validate(registerSchema), register);

router.post("/login" , validate(loginSchema), login);

router.get("/me" , authenticate , me);

export default router;