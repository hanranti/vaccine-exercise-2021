const controller = require('../controllers/controller')
const { assignFilters } = require('../utils/filters')

const testBeginVaccinations = '2021-02-02T22:33:39.643569Z'
const testEndVaccinations = '2021-03-13T11:08:11.643530Z'
//const testBeginOrders = '2019-02-02T22:33:39.643569Z'
//const testEndOrders = '2023-03-13T11:08:11.643530Z'

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

  /**test('findAllOrders returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), [])).length).toEqual(0)
  })
  test('findAllOrders antiqua returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), ['Antiqua'])).length).toEqual(1661)
  })
  test('findAllOrders solarbuddhica returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), ['SolarBuddhica'])).length).toEqual(1676)
  })
  test('findAllOrders zerpfy returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), ['Zerpfy'])).length).toEqual(1663)
  })
  test('findAllOrders antiqua, solarbuddhica returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), ['Antiqua', 'SolarBuddhica'])).length).toEqual(3337)
  })
  test('findAllOrders antiqua, zerpfy returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), ['Antiqua', 'Zerpfy'])).length).toEqual(3324)
  })
  test('findAllOrders solarbuddhica, zerpfy returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), ['SolarBuddhica', 'Zerpfy'])).length).toEqual(3339)
  })
  test('findAllOrders antiqua, solarbuddhica, zerpfy returns correct order amount', async () => {
    expect((await controller.findAllOrders(assignFilters({}), ['Antiqua', 'SolarBuddhica', 'Zerpfy'])).length).toEqual(5000)
  })

  test('findAllOrders returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), [])).length).toEqual(0)
  })
  test('findAllOrders antiqua returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua'])).length).toEqual(1171)
  })
  test('findAllOrders solarbuddhica returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['SolarBuddhica'])).length).toEqual(1156)
  })
  test('findAllOrders zerpfy returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Zerpfy'])).length).toEqual(1176)
  })
  test('findAllOrders antiqua, solarbuddhica returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'SolarBuddhica'])).length).toEqual(2327)
  })
  test('findAllOrders antiqua, zerpfy returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'Zerpfy'])).length).toEqual(2347)
  })
  test('findAllOrders solarbuddhica, zerpfy returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['SolarBuddhica', 'Zerpfy'])).length).toEqual(2332)
  })
  test('findAllOrders antiqua, solarbuddhica, zerpfy returns correct order amount when filtered with begin', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'SolarBuddhica', 'Zerpfy'])).length).toEqual(3503)
  })

  test('findAllOrders returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), [])).length).toEqual(0)
  })
  test('findAllOrders antiqua returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua'])).length).toEqual(1158)
  })
  test('findAllOrders solarbuddhica returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['SolarBuddhica'])).length).toEqual(1170)
  })
  test('findAllOrders zerpfy returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Zerpfy'])).length).toEqual(1176)
  })
  test('findAllOrders antiqua, solarbuddhica returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'SolarBuddhica'])).length).toEqual(2328)
  })
  test('findAllOrders antiqua, zerpfy returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'Zerpfy'])).length).toEqual(2334)
  })
  test('findAllOrders solarbuddhica, zerpfy returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['SolarBuddhica', 'Zerpfy'])).length).toEqual(2346)
  })
  test('findAllOrders antiqua, solarbuddhica, zerpfy returns correct order amount when filtered with end', async () => {
    expect((await controller.findAllOrders(assignFilters({ endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'SolarBuddhica', 'Zerpfy'])).length).toEqual(3504)
  })

  test('findAllOrders returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), [])).length).toEqual(0)
  })
  test('findAllOrders antiqua returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua'])).length).toEqual(668)
  })
  test('findAllOrders solarbuddhica returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['SolarBuddhica'])).length).toEqual(650)
  })
  test('findAllOrders zerpfy returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Zerpfy'])).length).toEqual(689)
  })
  test('findAllOrders antiqua, solarbuddhica returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'SolarBuddhica'])).length).toEqual(1318)
  })
  test('findAllOrders antiqua, zerpfy returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'Zerpfy'])).length).toEqual(1357)
  })
  test('findAllOrders solarbuddhica, zerpfy returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['SolarBuddhica', 'Zerpfy'])).length).toEqual(1339)
  })
  test('findAllOrders antiqua, solarbuddhica, zerpfy returns correct order amount when filtered with begin and end', async () => {
    expect((await controller.findAllOrders(assignFilters({ beginOrders: testBeginOrders, endOrders: testEndOrders, beginVaccinations: testBeginVaccinations, endVaccinations: testEndVaccinations }), ['Antiqua', 'SolarBuddhica', 'Zerpfy'])).length).toEqual(2007)
  })*/
})
