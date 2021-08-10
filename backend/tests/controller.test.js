const controller = require('../controllers/controller')
const { defaultFilters } = require('../utils/filters')

const testBegin = '2021-02-02T22:33:39.643569Z'
const testEnd = '2021-03-13T11:08:11.643530Z'

describe('controller', () => {
  test('findAllVaccinations returns correct vaccination amount', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllVaccinations(defaultFilters))).length).toEqual(7000)
  })

  test('findAllVaccinations returns correct vaccination amount when filtered with begin', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllVaccinations({vaccinationDate:true, begin:testBegin}))).length).toEqual(5948)
  })

  test('findAllVaccinations returns correct vaccination amount when filtered with end', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllVaccinations({vaccinationDate:true, end:testEnd}))).length).toEqual(3844)
  })

  test('findAllVaccinations returns correct vaccination amount when filtered with begin and end', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllVaccinations({vaccinationDate:true, begin:testBegin, end:testEnd}))).length).toEqual(2792)
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

  test('findAllOrders returns correct order amount when filtered with begin', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, []))).length).toEqual(0)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, ['Antiqua']))).length).toEqual(1171)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, ['SolarBuddhica']))).length).toEqual(1156)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, ['Zerpfy']))).length).toEqual(1176)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, ['Antiqua', 'SolarBuddhica']))).length).toEqual(2327)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, ['Antiqua', 'Zerpfy']))).length).toEqual(2347)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, ['SolarBuddhica', 'Zerpfy']))).length).toEqual(2332)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin}, ['Antiqua', 'SolarBuddhica', 'Zerpfy']))).length).toEqual(3503)
  })

  test('findAllOrders returns correct order amount when filtered with end', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, []))).length).toEqual(0)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, ['Antiqua']))).length).toEqual(1158)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, ['SolarBuddhica']))).length).toEqual(1170)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, ['Zerpfy']))).length).toEqual(1176)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, ['Antiqua', 'SolarBuddhica']))).length).toEqual(2328)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, ['Antiqua', 'Zerpfy']))).length).toEqual(2334)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, ['SolarBuddhica', 'Zerpfy']))).length).toEqual(2346)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, end:testEnd}, ['Antiqua', 'SolarBuddhica', 'Zerpfy']))).length).toEqual(3504)
  })

  test('findAllOrders returns correct order amount when filtered with begin and end', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, []))).length).toEqual(0)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, ['Antiqua']))).length).toEqual(668)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, ['SolarBuddhica']))).length).toEqual(650)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, ['Zerpfy']))).length).toEqual(689)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, ['Antiqua', 'SolarBuddhica']))).length).toEqual(1318)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, ['Antiqua', 'Zerpfy']))).length).toEqual(1357)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, ['SolarBuddhica', 'Zerpfy']))).length).toEqual(1339)
    expect(JSON.parse(JSON.stringify(await controller.findAllOrders({arrived:true, begin:testBegin, end:testEnd}, ['Antiqua', 'SolarBuddhica', 'Zerpfy']))).length).toEqual(2007)
  })
})
