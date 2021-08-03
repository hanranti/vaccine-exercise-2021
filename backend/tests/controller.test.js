const controller = require('../controllers/controller')

describe('controller', () => {
  test('findAllVaccinations returns correct vaccination amount', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllVaccinations())).length).toEqual(7000)
  })

  test('findAllOrders returns correct order amount', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders([]))).length).toEqual(0)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(['Antiqua']))).length).toEqual(1661)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(['SolarBuddhica']))).length).toEqual(1676)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(['Zerpfy']))).length).toEqual(1663)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(['Antiqua', 'SolarBuddhica']))).length).toEqual(3337)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(['Antiqua', 'Zerpfy']))).length).toEqual(3324)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(['SolarBuddhica', 'Zerpfy']))).length).toEqual(3339)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders(['Antiqua', 'SolarBuddhica', 'Zerpfy']))).length).toEqual(5000)
  })
})
