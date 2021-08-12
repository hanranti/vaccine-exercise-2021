const db = require('../models')
const { addVaccinationFilters, addOrderFilters } = require('../utils/filters')

const findAllVaccinations = async (filters, vaccine) => {
  const openedOrders = filters.byOrders
    ? await findAllOrders(Object.assign(filters, { byVaccinations: false }), vaccine)
    : []
  let query = {
    attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt', 'updatedAt'],
    order: [
      ['vaccinationDate', 'ASC']
    ]
  }
  query = addVaccinationFilters(filters, openedOrders, query)
  return await db.vaccinations.findAll(query)
}

const findAllOrders = async (filters, vaccine) => {
  const usedVaccines = filters.byVaccinations
    ? await findAllVaccinations(Object.assign(filters, { byOrders: false }), vaccine)
    : []
  let orders = []
  let query = {
    attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived'],
    order: [
      ['arrived', 'ASC']
    ]
  }
  query = addOrderFilters(filters, usedVaccines, query)

  if (vaccine.includes('Antiqua')) orders = orders.concat(await db.Antiqua.findAll(query))
  if (vaccine.includes('SolarBuddhica')) orders = orders.concat(await db.SolarBuddhica.findAll(query))
  if (vaccine.includes('Zerpfy')) orders = orders.concat(await db.Zerpfy.findAll(query))
  return orders
}

const getTotalOrdersData = async (filters, vaccine) => {
  const orders = await findAllOrders(Object.assign(filters, { byOrders: false }), vaccine)
  const vaccinations = await findAllVaccinations(Object.assign(filters, {
    byOrders: true, byVaccinations: false
  }), vaccine)

  const unMergedOrders = {
    labels: orders.map(order => order.arrived),
    injections: orders.map(order => order.injections),
    orderIds: orders.map(order => order.id)
  }

  const newTotalOrders = {
    labels: [unMergedOrders.labels[0]],
    injections: [unMergedOrders.injections[0]],
    orderIds: [[unMergedOrders.orderIds[0]]],
    vaccinationDates: []
  }

  let saveIndex = 0
  let orderIndex = 0
  for (let i = 1; i < unMergedOrders.labels.length; i++) {
    if (newTotalOrders.labels[saveIndex] !== unMergedOrders.labels[i]) saveIndex++
    newTotalOrders.orderIds[saveIndex] === undefined
      ? (() => {
        orderIndex = 0
        newTotalOrders.orderIds[saveIndex] = [unMergedOrders.orderIds[i]]
      })()
      : (() => {
        orderIndex = orderIndex + 1
        newTotalOrders.orderIds[saveIndex].push(unMergedOrders.orderIds[i])
      })()
    newTotalOrders.labels[saveIndex] = unMergedOrders.labels[i]
    newTotalOrders.injections[saveIndex] === undefined
      ? newTotalOrders.injections[saveIndex] = unMergedOrders.injections[i]
      : newTotalOrders.injections[saveIndex] += unMergedOrders.injections[i]
  }
  vaccinations.forEach(vaccination => {
    newTotalOrders.orderIds.forEach(ids => {
      if (ids.includes(vaccination.sourceBottle))
        newTotalOrders.vaccinationDates[newTotalOrders.orderIds.indexOf(ids)] !== undefined
          ? newTotalOrders.vaccinationDates[newTotalOrders.orderIds.indexOf(ids)].push(vaccination.vaccinationDate)
          : newTotalOrders.vaccinationDates[newTotalOrders.orderIds.indexOf(ids)] = [vaccination.vaccinationDate]
    })
  })

  return newTotalOrders
}

const getExpiredData = async (filters, vaccine) => {
  filters.expirationDate
    = filters.expirationDate
      ? filters.expirationDate
      : new Date()
  const totalOrders = await getTotalOrdersData(filters, vaccine)

  totalOrders.expired = totalOrders.labels.map(label =>
    totalOrders.injections[totalOrders.labels.indexOf(label)])

  delete totalOrders.injections
  delete totalOrders.orderIds
  delete totalOrders.vaccinationDates

  return totalOrders
}

const getAdditionalInfo = async (filters, vaccine) => {
  const totalOrders = await getTotalOrdersData(filters, vaccine)
  const expired = await getExpiredData(filters, vaccine)
  const additionalInfo = {
    usedVaccinesSum: totalOrders.vaccinationDates
      .map(dates => dates.length)
      .reduce((a, b) => a + b, 0),
    expiredSum: expired.expired.reduce((a, b) => a + b, 0)
  }
  return additionalInfo
}

module.exports = {
  findAllVaccinations,
  findAllOrders,
  getTotalOrdersData,
  getExpiredData,
  getAdditionalInfo
}