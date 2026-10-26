#paso a paso
-verificar version de node: node -v
-inicializar el proyecto: npm init
-crea el package.json
-cambiamos esta linea: "type": "module"
- paquetes basicos : npm i nodemon cors express mysql2
   -nodemon: sirve para  desarrollar! sirve para cambiar codigo y que se actualice automaticamente
   -cors:setear la seuridad de intearctuar  con direcciones ip diferentes
   -express:libreria para crear un servidor rest (post,get,put,delete)
   -mysql2:libreria que permite hacer consultas sql 
   cambiamos la seccion script package.json asi :
    "dev":"nodemon index.js",
    "start": "node index.js",
    con el fin de tener dos scripts de ejecucion 