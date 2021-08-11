const { assignFilters, addVaccinationFilters, addOrderFilters } = require('../utils/filters')
const { Op } = require('sequelize')

const testBeginVaccinations = '2021-02-02T22:33:39.643569Z'
const testBeginOrders = '2019-02-02T22:33:39.643569Z'
const testEndVaccinations = '2021-03-13T11:08:11.643530Z'
const testEndOrders = '2023-03-13T11:08:11.643530Z'

const testAttributesVaccination = {
  attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt', 'updatedAt']
}
const testAttributesOrders = {
  attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine', 'injections', 'arrived']
}

describe('filters', () => {

  test('assignFilters filters correctly', (() => {
    expect(assignFilters(assignFilters({}))).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false
    })
    expect(assignFilters({})).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false
    })
    expect(assignFilters()).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false
    })
    expect(assignFilters({ beginVaccinations: testBeginVaccinations })).toStrictEqual({
      beginVaccinations: testBeginVaccinations,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false
    })
    expect(assignFilters({ endVaccinations: testEndVaccinations })).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: testEndVaccinations,
      beginOrders: false,
      endOrders: false
    })
    expect(assignFilters({ beginOrders: testBeginOrders })).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: testBeginOrders,
      endOrders: false
    })
    expect(assignFilters({ endOrders: testEndOrders })).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: testEndOrders
    })
  }))

  test('default beginVaccinations is correct', () => {
    expect(assignFilters({}).beginVaccinations).toBe(false)
  })

  test('default endVaccinations is correct', () => {
    expect(assignFilters({}).endVaccinations).toBe(false)
  })

  test('default beginOrders is correct', () => {
    expect(assignFilters({}).beginOrders).toBe(false)
  })

  test('default endOrders is correct', () => {
    expect(assignFilters({}).endOrders).toBe(false)
  })

  test('vaccinationDate filters correctly', () => {
    expect(addVaccinationFilters({ beginVaccinations: testBeginVaccinations, vaccinationDate: true }, testAttributesVaccination)).toStrictEqual(
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
    expect(addVaccinationFilters({ endVaccinations: testEndVaccinations, vaccinationDate: true }, testAttributesVaccination)).toStrictEqual(
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
    expect(addVaccinationFilters({ beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations, vaccinationDate: true }, testAttributesVaccination)).toStrictEqual(
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
    expect(addOrderFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations, arrived: true }, [], testAttributesOrders)).toStrictEqual(
      {
        'attributes':
          ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
            'vaccine', 'injections', 'arrived'],
        'where':
        {
          'arrived':
            { [Op.gte]: '2019-02-02T22:33:39.643569Z' },
          'id': []
        }
      }
    )
    expect(addOrderFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations, arrived: true }, [], testAttributesOrders)).toStrictEqual(
      {
        'attributes':
          ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
            'vaccine', 'injections', 'arrived'],
        'where':
        {
          'arrived':
            { [Op.lte]: '2023-03-13T11:08:11.643530Z' },
          'id': []
        }
      }
    )
    expect(addOrderFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations, arrived: true }, [], testAttributesOrders)).toStrictEqual(
      {
        'attributes':
          ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
            'vaccine', 'injections', 'arrived'],
        'where':
        {
          'arrived':
            { [Op.between]: ['2019-02-02T22:33:39.643569Z', '2023-03-13T11:08:11.643530Z'] },
          'id': []
        }
      }
    )
  })
})