const { Op } = require('sequelize')

const addVaccinationFilters = (filters, query) => {
  let returnQuery = query

  filters.beginVaccinations && !filters.endVaccinations
    ? returnQuery = addVaccinationDateBegin(filters.beginVaccinations, returnQuery)
    : console.log('No begin date')
  filters.endVaccinations && !filters.beginVaccinations
    ? returnQuery = addVaccinationDateEnd(filters.endVaccinations, returnQuery)
    : console.log('No end date')
  filters.beginVaccinations && filters.endVaccinations
    ? returnQuery = addVaccinationDateBetween(filters.beginVaccinations, filters.endVaccinations, returnQuery)
    : console.log('No both begin and end date')

  return returnQuery
}

const addOrderFilters = (filters, vaccinations, query) => {
  let returnQuery = query

  filters.beginOrders && !filters.endOrders
    ? returnQuery = addArrivedBegin(filters.beginOrders, returnQuery)
    : console.log('No begin date')
  filters.endOrders && !filters.beginOrders
    ? returnQuery = addArrivedEnd(filters.endOrders, returnQuery)
    : console.log('No end date')
  filters.beginOrders && filters.endOrders
    ? returnQuery = addArrivedBetween(filters.beginOrders, filters.endOrders, returnQuery)
    : console.log('No both begin and end date')

  returnQuery = filterOrdersByVaccinations(vaccinations, returnQuery)

  return returnQuery
}

const addVaccinationDateBetween = (beginVaccinations, endVaccinations, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, vaccinationDate: { [Op.between]: [beginVaccinations, endVaccinations] } }
  return returnQuery
}

const addVaccinationDateBegin = (beginVaccinations, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, vaccinationDate: { [Op.gte]: beginVaccinations } }
  return returnQuery
}

const addVaccinationDateEnd = (endVaccinations, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, vaccinationDate: { [Op.lte]: endVaccinations } }
  return returnQuery
}

const addArrivedBetween = (beginOrders, endOrders, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, arrived: { [Op.between]: [beginOrders, endOrders] } }
  return returnQuery
}

const addArrivedBegin = (beginOrders, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, arrived: { [Op.gte]: beginOrders } }
  return returnQuery
}

const addArrivedEnd = (endOrders, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, arrived: { [Op.lte]: endOrders } }
  return returnQuery
}

const filterOrdersByVaccinations = (vaccinations, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, id: vaccinations.map(vaccination => vaccination.sourceBottle) }
  return returnQuery
}

const defaultFilters = {
  beginVaccinations: false,
  endVaccinations: false,
  beginOrders: false,
  endOrders: false
}

const assignFilters = (filters) => Object.assign(Object.assign({}, defaultFilters), filters)

module.exports = {
  addVaccinationFilters,
  addOrderFilters,
  assignFilters
}