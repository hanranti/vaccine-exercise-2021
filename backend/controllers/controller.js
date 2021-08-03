const db = require('../models')
const findAllVaccinations = async () => await db.vaccinations.findAll({
  attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt', 'updatedAt']
})

const findAllOrders = async (vaccine) => {
  orders = []
  vaccine.includes('Antiqua') ? orders = orders.concat(await db.Antiqua.findAll({
    attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived']
  }))
    : orders = orders
  vaccine.includes('SolarBuddhica') ? orders = orders.concat(await db.SolarBuddhica.findAll({
    attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived']
  }))
    : orders = orders
  vaccine.includes('Zerpfy') ? orders = orders.concat(await db.Zerpfy.findAll({
    attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived']
  }))
    : orders = orders
  return orders
}

module.exports = {
  findAllVaccinations,
  findAllOrders
}