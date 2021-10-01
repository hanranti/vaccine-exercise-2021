const controller = require('../controllers/controller')
const { assignFilters } = require('../utils/filters')

const testBeginVaccinations = '2021-02-02T22:33:39.643569Z'
const testEndVaccinations = '2021-03-13T11:08:11.643530Z'

describe('controller', () => {
  test('findAllVaccinations returns correct vaccination amount', async () => {
    expect((await controller.findAllVaccinations(assignFilters({}))).length).toEqual(7000)
  })

  test('findAllVaccinations returns correct vaccination amount when filtered with begin', async () => {
    expect((await controller.findAllVaccinations(assignFilters({ beginVaccinations: testBeginVaccinations }))).length).toEqual(5948)
  })

  test('findAllVaccinations returns correct vaccination amount when filtered with end', async () => {
    expect((await controller.findAllVaccinations(assignFilters({ endVaccinations: testEndVaccinations }))).length).toEqual(3844)
  })

  test('findAllVaccinations returns correct vaccination amount when filtered with begin and end', async () => {
    expect((await controller.findAllVaccinations(assignFilters({ beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }))).length).toEqual(2792)
  })
})
