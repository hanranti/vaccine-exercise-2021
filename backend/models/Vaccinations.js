module.exports = (sequelize, DataTypes) => sequelize.define('vaccinations', {
    'vaccination-id': {
        type: DataTypes.STRING,
        primaryKey: true
    },
    sourceBottle: DataTypes.STRING,
    gender: DataTypes.STRING,
    vaccinationDate: DataTypes.DATE
}, {
    freezeTableName: true
})