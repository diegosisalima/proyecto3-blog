//?importamos sequelize
const { Sequelize } = require("sequelize");
//?importamos nuestra configuración
const config = require("../../config");
//?instanciamos sequelize
const db = new Sequelize(config.db.development);
//?exportamos
module.exports = db;
