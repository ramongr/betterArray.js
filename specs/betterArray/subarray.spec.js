import BetterArray from '../../src/betterArray'

describe('subarray operations', () => {
  let betterArray

  describe('from empty arrays', () => {
    beforeEach(() => {
      betterArray = new BetterArray()
    })

    test('exists with empty array should return false', () => {
      expect(betterArray.exists([1, 2])).toBeFalsy()
    })

    test('except with empty array should return an empty array', () => {
      expect(betterArray.except([])).toEqual([])
    })

    test('first returns undefined', () => {
      expect(betterArray.first()).toEqual(undefined)
    })

    test('second returns undefined', () => {
      expect(betterArray.second()).toEqual(undefined)
    })

    test('last returns undefined', () => {
      expect(betterArray.last()).toEqual(undefined)
    })

    test('intervals returns an empty array', () => {
      const groupValue = parseInt(Math.random() * 100, 10)
      expect(betterArray.intervals(groupValue)).toEqual([])
    })
  })

  describe('subarray operations', () => {
    beforeEach(() => {
      betterArray = new BetterArray([1, 2, 3])
    })

    test('exists returns true when actual subarray exists', () => {
      expect(betterArray.exists([1, 2])).toBeTruthy()
    })

    test("exists returns false when actual subarray doesn't exist", () => {
      expect(betterArray.exists([4, 5])).toBeFalsy()
    })

    test('except with should remove specific item from array', () => {
      expect(betterArray.except(1)).toEqual([2, 3])
    })

    test('except returns empty array', () => {
      expect(betterArray.except([1,2,3])).toEqual([])
    })

    test('first returns correct value', () => {
      expect(betterArray.first()).toEqual(betterArray[0])
    })

    test('second returns correct value', () => {
      expect(betterArray.second()).toEqual(betterArray[1])
    })

    test('last returns correct value', () => {
      expect(betterArray.last()).toEqual(betterArray[betterArray.length - 1])
    })

    test('intervals returns intervals of one', () => {
      expect(betterArray.intervals(1)).toEqual([[0, 3]])
    })

    test('intervals returns one interval when value is the length of the array', () => {
      expect(betterArray.intervals(betterArray.length)).toEqual([[0, 1], [1, 2], [2, 3]])
    })

    test('intervals returns a matrix with the correct amount of values', () => {
      const otherBetterArray = new BetterArray([1, 2, 3, 4, 5, 6])
      expect(otherBetterArray.intervals(3)).toEqual([[0, 2], [2, 4], [4, 6]])
    })
  })
})
