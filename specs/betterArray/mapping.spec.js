import BetterArray from '../../src/betterArray';

describe('mapping operations', () => {
  let betterArray;

  beforeEach(() => {
    betterArray = new BetterArray()
  })

  describe('mapping operations on empty arrays', () => {
    test('occurences returns an empty object for an empty array', () => {
      expect(betterArray.occurences()).toEqual({})
    })

    test('flat returns an empty array for an empty array', () => {
      expect(betterArray.flat()).toEqual([])
    })

    test('inGroups returns an empty array', () => {
      const groupValue = parseInt(Math.random() * 100)
      expect(betterArray.inGroups(groupValue)).toEqual([])
    })

    test('intersection return an empty array when input is an empty array', () => {
      expect(betterArray.intersection([])).toEqual([])
    })

    test('intersection return an empty array when input is any array', () => {
      expect(betterArray.intersection([1, 2, 3])).toEqual([])
    })
  })

  describe('mapping operations', () => {
    test('occurences returns an object with one key for an array with one item', () => {
      betterArray.from([1])
      expect(betterArray.occurences()).toEqual({ 1: 1 })
    })

    test('occurences return an object with one key for an array with two items of the same value', () => {
      betterArray.from([1, 1])
      expect(betterArray.occurences()).toEqual({ 1: 2 })
    })

    test('flat return an array from a matrix', () => {
      const finalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      betterArray.from([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
      expect(betterArray.flat()).toEqual(finalArray)
    })

    test('flat returns a flatter array', () => {
      const finalArray = [1, [2], 3]
      betterArray.from([1, [[2]], 3])
      expect(betterArray.flat()).toEqual(finalArray)
    })

    test('inGroups groups by any value smaller than the arrays length', () => {
      betterArray.from([1,2,3,4,5,6])
      const groupValue = parseInt(Math.random() * betterArray.length)
      const expectedLength = Math.ceil(betterArray.length/groupValue)
      const inGroupsResult = betterArray.inGroups(groupValue)

      expect(inGroupsResult.length).toEqual(expectedLength)
    })

    test('inGroups returns one group when the group equals the length', () => {
      const array = [1, 2, 3, 4, 5, 6]
      betterArray.from(array)
      expect(betterArray.inGroups(betterArray.length)).toEqual([array])
    })

    test('inGroups returns a matrix with the correct amount of values', () => {
      const array = [1, 2, 3, 4, 5, 6]
      betterArray.from(array)
      expect(betterArray.inGroups(3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    })

    test('intersection returns the value 2 arrays have in common', () => {
      const intersect = [1, 2, 3]
      betterArray.from([1, 2, 3, 4, 5, 6])
      expect(betterArray.intersection(intersect)).toEqual(intersect)
    })

    test('intersection the value 2 arrays have in common', () => {
      const intersect = [7, 8, 9]
      betterArray.from([1, 2, 3, 4, 5, 6])
      expect(betterArray.intersection(intersect)).toEqual([])
    })
  })

  describe('mapping operation with empty array and idempotent function', () => {
    test('flatMap returns an empty array', () => {
      expect(betterArray.flatMap((item) => item)).toEqual([])
    })
  })
})
