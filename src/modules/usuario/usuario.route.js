import { Router } from "express";//importa el creador de rutas de express
// /api/usuario

import * as usuarioCtr from "./usuario.controller.js";

const router = Router();//uso el metodo router de exepresspara crear las rutas

router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.ObtenerUsuarioId);
export default router;