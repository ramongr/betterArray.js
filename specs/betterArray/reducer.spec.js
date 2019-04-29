import BetterArray from '../../src/betterArray';

describe('reducer based operations', () => {
  let betterArray;

  beforeEach(() => {
    betterArray = new BetterArray()
  })

  test('sum should work with an empty array' , () => {
    expect(betterArray.sum()).toBe(0)
  })

  test('sum should be the result of adding all the values', () => {
    const sumValue = 1 + 2 + 3;
    betterArray.from([1,2,3])
    expect(betterArray.sum()).toBe(sumValue)
  })

  test('subtraction should work with an empty array', () => {
    expect(betterArray.subtraction()).toBe(0)
  })

  test('subtraction should be the result of subtracting all the values', () => {
    const subtractionValue = 1 - 2 - 10;
    betterArray.from([1, 2, 10])
    expect(betterArray.subtraction()).toBe(subtractionValue)
  })

  test('product should work with an empty array', () => {
    expect(betterArray.product()).toBe(1)
  })

  test('product should be the result of subtracting all the values', () => {
    const productValue = 1 * 2 * 3;
    betterArray.from([1, 2, 3])
    expect(betterArray.product()).toBe(productValue)
  })

  test('maximum should not work', () => {
    expect(() => {betterArray.maximum()}).toThrowError(TypeError)
  })

  test('maximum should be the result of subtracting all the values', () => {
    const maximumValue = 7;
    betterArray.from([7, 1, 2, 3])
    expect(betterArray.maximum()).toBe(maximumValue)
  })

  test('minimum should not work', () => {
    expect(() => { betterArray.minimum() }).toThrowError(TypeError)
  })

  test('minimum should be the result of subtracting all the values', () => {
    const minimumValue = 1;
    betterArray.from([7, 1, 2, 3])
    expect(betterArray.minimum()).toBe(minimumValue)
  })
})