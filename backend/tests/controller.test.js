const controller = require('../controllers/controller')

describe('controller', () => {
  test('findAllVaccinations returns correct vaccination amount', async () => {
    expect(JSON.parse(JSON.stringify(await controller.findAllVaccinations())).length).toEqual(7000)
  })
})