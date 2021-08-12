import convertArrayCumulative from './convertArrayCumulative'

describe('Cumulative convert function', () => {
  const testArray = [1, 3, 2, 6, 4]
  const emptyArray = []

  test('works with numeric array', () => {
    expect(testArray.map(convertArrayCumulative(0))).toEqual([1, 4, 6, 12, 16])
  })

  test('works with empty array', () => {
    expect(emptyArray.map(convertArrayCumulative(0))).toEqual([])
  })
})