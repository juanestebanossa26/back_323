import {ProductoModel} from "./producto.model.js"

export const obtenerProductos = async (req, res) => {
  try {
    const results = await ProductoModel.ListarTodos();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al listar : ${error}`,
    });
  }
};
export const ObtenerproductoId= async (req, res) => {
  // codigo protegido con try..catch
  try {
    const results = await ProductoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar : ${error}`,
    });
  }
  
};
export const obtenerUsuarioId = async (req, res) => {
// codigo protegido con try..catch
try {
const results = await ProductoModel.findById(req.params.id);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `error al listar : ${error}`,
});
}
};
export const crearProducto = async (req, res) => {
  const datos = {
    descripcion: req.body.descripcion,
    unidad: req.body.unidad,
    costo: req.body.costo,
    precio: req.body.precio,
  
  };
  try {
    const results = await ProductoModel.create(datos);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error en la insercion:${error}`,
    });
  }
};
export const borrarProducto = async (req, res) => {
  try {
    const results = await ProductoModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al eliminar:${error}`,
    });
  }
};
export const actualizarProducto = async (req, res) => {
  try {
    const results = await ProductoModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al actualizar ${error}`,
    });
  }
};