const controller = require('../controllers/controller')

describe('controller', () => {
  test('findAllVaccinations returns correct vaccination amount', async () => {
    expect(await controller.findAllVaccinations()).toEqual(5)
  })
})