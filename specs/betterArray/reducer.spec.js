import BetterArray from '../../src/betterArray'

describe('reducer operations', () => {
  let betterArray

  beforeEach(() => {
    betterArray = new BetterArray()
  })

  describe('from empty arrays', () => {
    test('sum should return 0' , () => {
      expect(betterArray.sum()).toBe(0)
    })

    test('subtraction should raise an error', () => {
      expect(() => { betterArray.subtraction() }).toThrow(TypeError)
    })

    test('product should raise an error', () => {
      expect(() => { betterArray.product() }).toThrow(TypeError)
    })

    test('maximum should raise an error', () => {
      expect(() => { betterArray.maximum() }).toThrow(TypeError)
    })

    test('minimum should raise an error', () => {
      expect(() => { betterArray.minimum() }).toThrow(TypeError)
    })
  })

  describe('non empty arrays', () => {
    test('sum should be the result of adding all the values', () => {
      const sumValue = 1 + 2 + 3;
      betterArray.from([1, 2, 3])
      expect(betterArray.sum()).toBe(sumValue)
    })

    test('subtraction should be the result of subtracting all the values', () => {
      const subtractionValue = 1 - 2 - 10;
      betterArray.from([1, 2, 10])
      expect(betterArray.subtraction()).toBe(subtractionValue)
    })

    test('product should be the result of multiplying all the values', () => {
      const productValue = 1 * 2 * 3;
      betterArray.from([1, 2, 3])
      expect(betterArray.product()).toBe(productValue)
    })

    test('maximum returns the highest value', () => {
      const maximumValue = 7;
      betterArray.from([7, 1, 2, 3])
      expect(betterArray.maximum()).toBe(maximumValue)
    })

    test('minimum returns lowest value', () => {
      const minimumValue = 1;
      betterArray.from([7, 1, 2, 3])
      expect(betterArray.minimum()).toBe(minimumValue)
    })
  })
})