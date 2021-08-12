const { Op } = require('sequelize')

const addVaccinationFilters = (filters, orders, query) => {
  let returnQuery = query

  if (filters.beginVaccinations && !filters.endVaccinations) returnQuery = addVaccinationDateBegin(filters.beginVaccinations, returnQuery)
  if (filters.endVaccinations && !filters.beginVaccinations) returnQuery = addVaccinationDateEnd(filters.endVaccinations, returnQuery)
  if (filters.beginVaccinations && filters.endVaccinations) returnQuery = addVaccinationDateBetween(filters.beginVaccinations, filters.endVaccinations, returnQuery)
  returnQuery = filterVaccinationsByGender(filters, returnQuery)
  if (filters.byOrders) returnQuery = filterVaccinationsByOrders(orders, returnQuery)

  return returnQuery
}

const addOrderFilters = (filters, vaccinations, query) => {
  let returnQuery = query

  if (filters.beginOrders && !filters.endOrders) returnQuery = addArrivedBegin(filters.beginOrders, returnQuery)
  if (filters.endOrders && !filters.beginOrders) returnQuery = addArrivedEnd(filters.endOrders, returnQuery)
  if (filters.beginOrders && filters.endOrders) returnQuery = addArrivedBetween(filters.beginOrders, filters.endOrders, returnQuery)
  if (filters.expirationDate) returnQuery = filterExpiredOrders(filters, vaccinations, returnQuery)
  else if (filters.byVaccinations) returnQuery = filterOrdersByVaccinations(vaccinations, returnQuery)

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

const filterVaccinationsByOrders = (orders, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, sourceBottle: orders.map(order => order.id) }
  return returnQuery
}

const filterVaccinationsByGender = (filters, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, gender: filters.gender }
  return returnQuery
}

const filterExpiredOrders = (filters, vaccinations, query) => {
  let returnQuery = query
  returnQuery.where = {
    ...returnQuery.where,
    id: { [Op.not]: vaccinations.map(vaccination => vaccination.sourceBottle) },
    arrived: { [Op.lte]: new Date(new Date(filters.expirationDate) - filters.expirationTime).toISOString().split('T')[0] }
  }
  return returnQuery
}

const defaultFilters = {
  beginVaccinations: false,
  endVaccinations: false,
  beginOrders: false,
  endOrders: false,
  byVaccinations: false,
  byOrders: false,
  gender: ['male', 'female', 'nonbinary'],
  expirationDate: false,
  expirationTime: 2592000000
}

const assignFilters = (filters) => Object.assign(Object.assign({}, defaultFilters), filters)

module.exports = {
  addVaccinationFilters,
  addOrderFilters,
  assignFilters
}