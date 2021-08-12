const { assignFilters, addVaccinationFilters/**, addOrderFilters*/ } = require('../utils/filters')
const { Op } = require('sequelize')

const testBeginVaccinations = '2021-02-02T22:33:39.643569Z'
const testBeginOrders = '2019-02-02T22:33:39.643569Z'
const testEndVaccinations = '2021-03-13T11:08:11.643530Z'
const testEndOrders = '2023-03-13T11:08:11.643530Z'
//const testExpirationDate = '2021-02-04'

const testAttributesVaccination = {
  attributes: ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate', 'createdAt',
    'updatedAt'],
  order: [
    ['vaccinationDate', 'ASC']
  ]
}
/**const testAttributesOrders = {
  attributes: ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict', 'vaccine',
    'injections', 'arrived'],
  order: [
    ['arrived', 'ASC']
  ]
}*/

describe('filters', () => {

  test('assignFilters filters correctly', (() => {
    expect(assignFilters(assignFilters({}))).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false,
      byVaccinations: false,
      byOrders: false,
      gender: ['male', 'female', 'nonbinary'],
      expirationDate: false,
      expirationTime: 2592000000
    })
    expect(assignFilters({})).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false,
      byVaccinations: false,
      byOrders: false,
      gender: ['male', 'female', 'nonbinary'],
      expirationDate: false,
      expirationTime: 2592000000
    })
    expect(assignFilters()).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false,
      byVaccinations: false,
      byOrders: false,
      gender: ['male', 'female', 'nonbinary'],
      expirationDate: false,
      expirationTime: 2592000000
    })
    expect(assignFilters({ beginVaccinations: testBeginVaccinations })).toStrictEqual({
      beginVaccinations: testBeginVaccinations,
      endVaccinations: false,
      beginOrders: false,
      endOrders: false,
      byVaccinations: false,
      byOrders: false,
      gender: ['male', 'female', 'nonbinary'],
      expirationDate: false,
      expirationTime: 2592000000
    })
    expect(assignFilters({ endVaccinations: testEndVaccinations })).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: testEndVaccinations,
      beginOrders: false,
      endOrders: false,
      byVaccinations: false,
      byOrders: false,
      gender: ['male', 'female', 'nonbinary'],
      expirationDate: false,
      expirationTime: 2592000000
    })
    expect(assignFilters({ beginOrders: testBeginOrders })).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: testBeginOrders,
      endOrders: false,
      byVaccinations: false,
      byOrders: false,
      gender: ['male', 'female', 'nonbinary'],
      expirationDate: false,
      expirationTime: 2592000000
    })
    expect(assignFilters({ endOrders: testEndOrders })).toStrictEqual({
      beginVaccinations: false,
      endVaccinations: false,
      beginOrders: false,
      endOrders: testEndOrders,
      byVaccinations: false,
      byOrders: false,
      gender: ['male', 'female', 'nonbinary'],
      expirationDate: false,
      expirationTime: 2592000000
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
    expect(addVaccinationFilters({ beginVaccinations: testBeginVaccinations, vaccinationDate: true },
      [], testAttributesVaccination)).toStrictEqual(
      {
        'attributes':
            ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate',
              'createdAt', 'updatedAt'],
        'order': [
          ['vaccinationDate', 'ASC']
        ],
        'where':
          {
            'gender': undefined,
            'vaccinationDate':
              { [Op.gte]: '2021-02-02T22:33:39.643569Z' }
          }
      }
    )
    expect(addVaccinationFilters({ endVaccinations: testEndVaccinations, vaccinationDate: true }, [],
      testAttributesVaccination)).toStrictEqual(
      {
        'attributes':
            ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate',
              'createdAt', 'updatedAt'],
        'order': [
          ['vaccinationDate', 'ASC']
        ],
        'where':
          {
            'gender': undefined,
            'vaccinationDate':
              { [Op.lte]: '2021-03-13T11:08:11.643530Z' }
          }
      }
    )
    expect(addVaccinationFilters({
      beginVaccinations: testBeginVaccinations,
      endVaccinations: testEndVaccinations, vaccinationDate: true
    }, [],
    testAttributesVaccination)).toStrictEqual(
      {
        'attributes':
            ['vaccination-id', 'sourceBottle', 'gender', 'vaccinationDate',
              'createdAt', 'updatedAt'],
        'order': [
          ['vaccinationDate', 'ASC']
        ],
        'where':
          {
            'gender': undefined,
            'vaccinationDate':
              { [Op.between]: ['2021-02-02T22:33:39.643569Z', '2021-03-13T11:08:11.643530Z'] }
          }
      }
    )
  })

  /**  test('expiration date filters correctly', () => {
      expect(addOrderFilters({ expirationDate: testExpirationDate }, [],
        testAttributesOrders)).toStrictEqual(
          {
            'attributes':
              ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
                'vaccine', 'injections', 'arrived'],
            'order': [
              ['arrived', 'ASC']
            ],
            'where':
            {
              'arrived':
                { [Op.lte]: '2021-03-06' },
              'id':
                { [Op.not]: [] }
            }
          }
        )
      expect(addOrderFilters({ beginOrders: testBeginOrders, expirationDate: testExpirationDate }, [],
        testAttributesOrders)).toStrictEqual(
          {
            'attributes':
              ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
                'vaccine', 'injections', 'arrived'],
            'order': [
              ['arrived', 'ASC']
            ],
            'where':
            {
              'arrived':
                { [Op.lte]: '2021-03-06' },
              'id':
                { [Op.not]: [] }
            }
          }
        )
      expect(addOrderFilters({ endOrders: testEndOrders, expirationDate: testExpirationDate }, [],
        testAttributesOrders)).toStrictEqual(
          {
            'attributes':
              ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
                'vaccine', 'injections', 'arrived'],
            'order': [
              ['arrived', 'ASC']
            ],
            'where':
            {
              'arrived':
                { [Op.lte]: '2021-03-06' },
              'id':
                { [Op.not]: [] }
            }
          }
        )
      expect(addOrderFilters({
        beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations,
        expirationDate: testExpirationDate
      }, [], testAttributesOrders)).toStrictEqual(
        {
          'attributes':
            ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
              'vaccine', 'injections', 'arrived'],
          'order': [
            ['arrived', 'ASC']
          ],
          'where':
          {
            'arrived':
              { [Op.lte]: '2021-03-06' },
            'id':
              { [Op.not]: [] }
          }
        }
      )
    })*/

  /** test('arrived filters correctly', () => {
     expect(addOrderFilters({
       beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations,
       endVaccinations: testEndVaccinations, arrived: true
     }, [], testAttributesOrders)).toStrictEqual(
       {
         'attributes':
           ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
             'vaccine', 'injections', 'arrived'],
         'order': [
           ['arrived', 'ASC']
         ],
         'where':
         {
           'arrived':
             { [Op.gte]: '2019-02-02T22:33:39.643569Z' }
         }
       }
     )
     expect(addOrderFilters({
       endOrders: testEndOrders, beginVaccinations: testBeginVaccinations,
       endVaccinations: testEndVaccinations, arrived: true
     }, [], testAttributesOrders)).toStrictEqual(
       {
         'attributes':
           ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
             'vaccine', 'injections', 'arrived'],
         'order': [
           ['arrived', 'ASC']
         ],
         'where':
         {
           'arrived':
             { [Op.lte]: '2023-03-13T11:08:11.643530Z' },
           'id':
             { [Op.not]: [] }
         }
       }
     )
     expect(addOrderFilters({
       beginOrders: testBeginOrders, endOrders: testEndOrders,
       beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations,
       arrived: true
     }, [], testAttributesOrders)).toStrictEqual(
       {
         'attributes':
           ['id', 'orderNumber', 'responsiblePerson', 'healthCareDistrict',
             'vaccine', 'injections', 'arrived'],
         'order': [
           ['arrived', 'ASC']
         ],
         'where':
         {
           'arrived':
             { [Op.between]: ['2019-02-02T22:33:39.643569Z', '2023-03-13T11:08:11.643530Z'] }
         }
       }
     )
   })*/
})