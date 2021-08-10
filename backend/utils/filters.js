const { Op } = require('sequelize')

const addFilters = (filters, query) => {
  let returnQuery = query
  if (filters.vaccinationDate) {
    filters.begin && !filters.end
      ? query = addVaccinationDateBegin(filters.begin, query)
      : console.log('No begin date')
    filters.end && !filters.begin
      ? query = addVaccinationDateEnd(filters.end, query)
      : console.log('No end date')
    filters.begin && filters.end
      ? query = addVaccinationDateBetween(filters.begin, filters.end, query)
      : console.log('No both begin and end date')
  }
  if (filters.arrived) {
    filters.begin && !filters.end
      ? query = addArrivedBegin(filters.begin, query)
      : console.log('No begin date')
    filters.end && !filters.begin
      ? query = addArrivedEnd(filters.end, query)
      : console.log('No end date')
    filters.begin && filters.end
      ? query = addArrivedBetween(filters.begin, filters.end, query)
      : console.log('No both begin and end date')
  }
  return returnQuery
}

const addVaccinationDateBetween = (begin, end, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, vaccinationDate: { [Op.between]: [begin, end] } }
  return returnQuery
}

const addVaccinationDateBegin = (begin, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, vaccinationDate: { [Op.gte]: begin } }
  return returnQuery
}

const addVaccinationDateEnd = (end, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, vaccinationDate: { [Op.lte]: end } }
  return returnQuery
}

const addArrivedBetween = (begin, end, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, arrived: { [Op.between]: [begin, end] } }
  return returnQuery
}

const addArrivedBegin = (begin, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, arrived: { [Op.gte]: begin } }
  return returnQuery
}

const addArrivedEnd = (end, query) => {
  let returnQuery = query
  returnQuery.where = { ...returnQuery.where, arrived: { [Op.lte]: end } }
  return returnQuery
}

const defaultFilters = {
  begin: false,
  end: false,
  vaccinationDate: false,
  arrived: false
}

module.exports = {
  addFilters,
  defaultFilters
}