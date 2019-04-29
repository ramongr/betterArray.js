import BetterArray from '../../src/betterArray';

describe('arithmetic operations', () => {
  let betterArray;

  beforeEach(() => {
    betterArray = new BetterArray()
  })

  test('isEvenLength returns true for an empty array', () => {
    expect(betterArray.isEvenLength()).toBeTruthy()
  })

  test('isEvenLength returns false for an array with one item', () => {
    betterArray.from([1])
    expect(betterArray.isEvenLength()).toBeFalsy()
  })

  test('isEvenLength returns true for an array with two items', () => {
    betterArray.from([1, 2])
    expect(betterArray.isEvenLength()).toBeTruthy()
  })

  test('average should return NaN when empty', () => {
    expect(betterArray.average()).toBeNaN()
  })

  test('average should return the average value', () => {
    const averageValue = (1 + 2 + 3)/ 3;
    betterArray.from([1, 2, 3])
    expect(betterArray.average()).toBe(averageValue)
  })

  test('median should return NaN when empty', () => {
    expect(betterArray.median()).toBeNaN()
  })

  test('median with odd length should return the half point value', () => {
    const medianValue = 2;
    betterArray.from([1, 2, 3])
    expect(betterArray.median()).toBe(medianValue)
  })

  test('median with even length should return the calculated value', () => {
    const medianValue = 2.5;
    betterArray.from([1, 2, 3, 4])
    expect(betterArray.median()).toBe(medianValue)
  })

  test('mode should return NaN when empty', () => {
    expect(betterArray.mode()).toHaveLength(0)
  })

  test('mode with multiple occurences should return an array', () => {
    const modeValue = ["2", "3"]
    betterArray.from([1, 2, 2, 3, 3])
    expect(betterArray.mode()).toEqual(modeValue)
  })

  test('mode with even length should return the calculated value', () => {
    const modeValue = ["2"]
    betterArray.from([1, 2, 2, 3, 4])
    expect(betterArray.mode()).toEqual(modeValue)
  })
})