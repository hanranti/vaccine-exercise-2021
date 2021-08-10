const controller = require('../controllers/controller')
const { defaultFilters } = require('../utils/filters')

describe('controller', () => {
  test('findAllVaccinations returns correct vaccination amount', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllVaccinations(defaultFilters))).length).toEqual(7000)
  })

  test('findAllOrders returns correct order amount', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, []))).length).toEqual(0)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, ['Antiqua']))).length).toEqual(1661)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, ['SolarBuddhica']))).length).toEqual(1676)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, ['Zerpfy']))).length).toEqual(1663)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, ['Antiqua', 'SolarBuddhica']))).length).toEqual(3337)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, ['Antiqua', 'Zerpfy']))).length).toEqual(3324)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, ['SolarBuddhica', 'Zerpfy']))).length).toEqual(3339)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(defaultFilters, ['Antiqua', 'SolarBuddhica', 'Zerpfy']))).length).toEqual(5000)
  })
})
