const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'User',
    {
      // id: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
      //   primaryKey: true,
      //   allowNull: false,
      // },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  )
}
