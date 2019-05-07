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
      expect(betterArray.unique()).toBe([])
    })
  })
});
