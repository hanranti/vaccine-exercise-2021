const config = require('../utils/config')

describe('config', () => {
  test('backend port is 2222', () => {
    expect(config.PORT).toBe('2222')
  })
})