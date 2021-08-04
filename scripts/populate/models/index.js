const config = require('../utils/config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_password,
  {
    host: config.db_host,
    dialect: config.dialect,
    operatorsAliases: 0,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
)

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  Antiqua: require('./Antiqua')(sequelize, Sequelize),
  SolarBuddhica: require('./SolarBuddhica')(sequelize, Sequelize),
  Zerpfy: require('./Zerpfy')(sequelize, Sequelize),
  vaccinations: require('./Vaccinations')(sequelize, Sequelize)
}

module.exports = db