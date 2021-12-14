const Sequelize = require('sequelize');
const database = require('../conectaBD');
const Acesso = require('./mod_acesso');
 
const Usuario = database.define('tb_usuarios', {

    usu_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usu_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usu_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usu_senha: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

Usuario.belongsTo(Acesso, {foreignKey: {name:'usu_idAcesso',allowNull: false}})
 
module.exports = Usuario;