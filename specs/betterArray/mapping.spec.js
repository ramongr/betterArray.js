import BetterArray from '../../src/betterArray';

describe('reducer based operations', () => {
  let betterArray;

  beforeEach(() => {
    betterArray = new BetterArray()
  })

  test('occurences returns an empty object for an empty array', () => {
    expect(betterArray.occurences()).toEqual({})
  })

  test('occurences returns an object with one key for an array with one item', () => {
    betterArray.from([1])
    expect(betterArray.occurences()).toEqual({1:1})
  })

  test('occurences return an object with one key for an array with two items of the same value', () => {
    betterArray.from([1, 1])
    expect(betterArray.occurences()).toEqual({ 1: 2 })
  })

  test('flat returns an empty array for an empty array', () => {
    expect(betterArray.flat()).toEqual([])
  })

  test('flat return an array from a matrix', () => {
    const finalArray = [1,2,3,4,5,6,7,8,9]
    betterArray.from([[1,2,3], [4,5,6], [7,8,9]])
    expect(betterArray.flat()).toEqual(finalArray)
  })

  test('flat returns a flatter array', () => {
    const finalArray = [1, [2], 3]
    betterArray.from([1, [[2]], 3])
    expect(betterArray.flat()).toEqual(finalArray)
  })
})