const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform:{
      type: DataTypes.STRING,
      /* type: DataTypes.ARRAY(DataTypes.STRING), */
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });
};
