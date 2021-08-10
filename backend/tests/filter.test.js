const { defaultFilters, addFilters } = require('../utils/filters')
const { Op } = require('sequelize')


const testBegin = '2021-02-02T22:33:39.643569Z'
const testEnd = '2021-03-13T11:08:11.643530Z'
const testAttributesVaccination = {
  attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt', 'updatedAt']
}
const testAttributesOrders = {
  attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived']
}

describe('filters', () => {
  test('default vaccinationDate is correct', () => {
    expect(defaultFilters.vaccinationDate).toBe(false)
  })

  test('default arrived is correct', () => {
    expect(defaultFilters.arrived).toBe(false)
  })

  test('default begin is correct', () => {
    expect(defaultFilters.begin).toBe(false)
  })

  test('default end is correct', () => {
    expect(defaultFilters.end).toBe(false)
  })

  test('vaccinationDate filters correctly', () => {
    expect(addFilters({ begin: testBegin, vaccinationDate: true }, testAttributesVaccination)).toStrictEqual(
      {
        'attributes':
                    ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate',
                      'createdAt', 'updatedAt'],
        'where':
                {
                  'vaccinationDate':
                        { [Op.gte]: '2021-02-02T22:33:39.643569Z' }
                }
      }
    )
    expect(addFilters({ end: testEnd, vaccinationDate: true }, testAttributesVaccination)).toStrictEqual(
      {
        'attributes':
                    ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate',
                      'createdAt', 'updatedAt'],
        'where':
                {
                  'vaccinationDate':
                        { [Op.lte]: '2021-03-13T11:08:11.643530Z' }
                }
      }
    )
    expect(addFilters({ begin: testBegin, end: testEnd, vaccinationDate: true }, testAttributesVaccination)).toStrictEqual(
      {
        'attributes':
                    ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate',
                      'createdAt', 'updatedAt'],
        'where':
                {
                  'vaccinationDate':
                        { [Op.between]: ['2021-02-02T22:33:39.643569Z', '2021-03-13T11:08:11.643530Z'] }
                }
      }
    )
  })

  test('arrived filters correctly', () => {
    expect(addFilters({ begin: testBegin, arrived: true }, testAttributesOrders)).toStrictEqual(
      {
        'attributes':
                    ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
                      'vaccine', 'injections', 'arrived'],
        'where':
                {
                  'arrived':
                        { [Op.gte]: '2021-02-02T22:33:39.643569Z' }
                }
      }
    )
    expect(addFilters({ end: testEnd, arrived: true }, testAttributesOrders)).toStrictEqual(
      {
        'attributes':
                    ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
                      'vaccine', 'injections', 'arrived'],
        'where':
                {
                  'arrived':
                        { [Op.lte]: '2021-03-13T11:08:11.643530Z' }
                }
      }
    )
    expect(addFilters({ begin: testBegin, end: testEnd, arrived: true }, testAttributesOrders)).toStrictEqual(
      {
        'attributes':
                    ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
                      'vaccine', 'injections', 'arrived'],
        'where':
                {
                  'arrived':
                        { [Op.between]: ['2021-02-02T22:33:39.643569Z', '2021-03-13T11:08:11.643530Z'] }
                }
      }
    )
  })
})