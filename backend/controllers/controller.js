const db = require('../models')
const { addVaccinationFilters, addOrderFilters } = require('../utils/filters')
const findAllVaccinations = async (filters) => {
  let query = {
    attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt', 'updatedAt']
  }
  console.log(filters)
  query = addVaccinationFilters(filters, query)
  console.log(query)
  return await db.vaccinations.findAll(query)
}

const findAllOrders = async (filters, vaccine) => {
  const usedVaccines = await findAllVaccinations(filters)
  let orders = []
  let query = {
    attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived']
  }
  query = addOrderFilters(filters, usedVaccines, query)

  vaccine.includes('Antiqua') ? orders = orders.concat(await db.Antiqua.findAll(query))
    : console.log('Request does not include antiqua')
  vaccine.includes('SolarBuddhica') ? orders = orders.concat(await db.SolarBuddhica.findAll(query))
    : console.log('Request does not include solarbuddhica')
  vaccine.includes('Zerpfy') ? orders = orders.concat(await db.Zerpfy.findAll(query))
    : console.log('Request does not include zerpfy')
  return orders
}

module.exports = {
  findAllVaccinations,
  findAllOrders
}