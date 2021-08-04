module.exports = (sequelize, DataTypes) => sequelize.define('solarbuddhica', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  orderNumber: DataTypes.BIGINT,
  responsiblePerson: DataTypes.STRING,
  healthCareDistrict: DataTypes.STRING,
  vaccine: DataTypes.STRING,
  injections: DataTypes.INTEGER,
  arrived: DataTypes.DATE
}, {
  freezeTableName: true
})