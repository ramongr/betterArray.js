import BetterArray from '../../src/betterArray';

describe('position related operations', () => {
  let betterArray;

  beforeEach(() => {
    betterArray = new BetterArray()
  })

  describe('from empty arrays', () => {
    let predicate = 1
    test('findIndex should return -1', () => {
      expect(betterArray.findIndex(predicate)).toBe(-1)
    })

    test('findLastIndex should return -1', () => {
      expect(betterArray.findLastIndex(predicate)).toBe(-1)
    })

    test('first should return undefined', () => {
      expect(betterArray.first()).toBeUndefined()
    })

    test('second should return undefined', () => {
      expect(betterArray.second()).toBeUndefined()
    })

    test('last should return undefined', () => {
      expect(betterArray.last()).toBeUndefined()
    })

    test('unique should return empty array', () => {
      expect(betterArray.unique()).toEqual([])
    })
  })

  describe('non empty arrays', () => {
    let predicate = 1
    test('findIndex should return 1', () => {
      betterArray.from([2, 1, 1, 3, 2, 3])
      expect(betterArray.findIndex(predicate)).toBe(1)
    })

    test('findLastIndex should return 2', () => {
      betterArray.from([2, 1, 1, 3, 2, 3])
      expect(betterArray.findLastIndex(predicate)).toBe(2)
    })

    test('first should return 2', () => {
      betterArray.from([2, 1, 1, 3, 2, 3])
      expect(betterArray.first()).toBe(2)
    })

    test('second should return 1', () => {
      betterArray.from([2, 1, 1, 3, 2, 3])
      expect(betterArray.second()).toBe(1)
    })

    test('last should return 3', () => {
      betterArray.from([2, 1, 1, 3, 2, 3])
      expect(betterArray.last()).toBe(3)
    })

    test('unique should return [2,1,3]', () => {
      betterArray.from([2, 1, 1, 3, 2, 3])
      expect(betterArray.unique().sort()).toEqual([3,2,1].sort())
    })
  })
});
