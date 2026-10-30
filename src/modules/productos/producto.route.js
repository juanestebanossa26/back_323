import { Router } from "express";//importa el creador de rutas de express
// /api/usuario

import * as prodcutosctr from "./prodcuto.controller.js";

const router = Router();//uso el metodo router de exepresspara crear las rutas

router.get("/productos", prodcutosctr.obtenerProductos);
router.get("/productos/:id", prodcutosctr.ObtenerproductoId);
router.post("/productos", prodcutosctr.crearProducto);
router.delete("/productos/:id", prodcutosctr.borrarProducto);
router.put("/productos/:id", prodcutosctr.actualizarProducto);
export default router;