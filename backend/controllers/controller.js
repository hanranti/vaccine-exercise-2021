const db = require('../models')
const findAllVaccinations = async () => await db.vaccinations.findAll({
  attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt', 'updatedAt']
})

module.exports = {
  findAllVaccinations
}