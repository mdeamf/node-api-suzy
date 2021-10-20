'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enderecos.belongsTo(models.Cidades, {
        as: 'cidades',
        foreignKey: 'cidade'
      })
      Enderecos.belongsTo(models.Clientes, { 
        as: 'endereco_tipos',
        foreignKey: 'endereco_tipo'
      })
    }
  };
  Enderecos.init({
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};