const db = require('../models')
const { addVaccinationFilters, addOrderFilters } = require('../utils/filters')
const findAllVaccinations = async (filters) => {
  let query = {
    attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt', 'updatedAt'],
    order: [
      ['vaccinationDate', 'ASC']
    ]
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
    attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived'],
    order: [
      ['arrived', 'ASC']
    ]
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

const getTotalOrdersData = async (filters, vaccine) => {
  const orders = await findAllOrders(filters, vaccine)
  const unMergedOrders = { labels: orders.map(order => order.arrived), injections: orders.map(order => order.injections), orders: orders.map(order => 1) }

  const newTotalOrders = { labels: [unMergedOrders.labels[0]], injections: [unMergedOrders.injections[0]], orders: [1] }
  let saveIndex = 0
  for (let i = 1; i < unMergedOrders.labels.length; i++) {
    newTotalOrders.labels[saveIndex] !== unMergedOrders.labels[i]
      ? saveIndex++
      : console.log('Same label')
    newTotalOrders.orders[saveIndex] === undefined 
      ? newTotalOrders.orders[saveIndex] = 1 
      : newTotalOrders.orders[saveIndex]++
    newTotalOrders.labels[saveIndex] = unMergedOrders.labels[i]
    newTotalOrders.injections[saveIndex] === undefined
      ? newTotalOrders.injections[saveIndex] = unMergedOrders.injections[i]
      : newTotalOrders.injections[saveIndex] += unMergedOrders.injections[i]
  }
  
  return newTotalOrders
}

module.exports = {
  findAllVaccinations,
  findAllOrders,
  getTotalOrdersData
}