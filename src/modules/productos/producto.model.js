import db from "../../config/dbconexion.js";

export const ProductoModel = {
  ListarTodos: async () => {
    const sql = "SELECT * FROM productos ";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM productos WHERE codigo=?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM productos WHERE codigo=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    //let email = data.email;
    // console.log(data);
    // validamos que el email no exista ! , el usuario lo validaremos por el
    // email;
    // const [emailExiste] = await db.query(
    //   "SELECT * FROM usuario WHERE email = ?",
    //   [email],
    // );
    // if (emailExiste.length > 0) {
    //   throw new Error("El email ya está registrado");
    // }
    const productoNuevo = {
      descripcion: data.descripcion,
      unidad: data.unidad,
      costo: data.costo,
      precio: data.precio,
    
    };
    const sql = "INSERT INTO productos SET ?";
    const [rows] = await db.query(sql, [productoNuevo]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE productos SET ? WHERE codigo = ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
