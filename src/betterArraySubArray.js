import { occurence, concat } from './predicates/SubArray'

export default class BetterArraySubArray extends Array {
  occurences() {
    return this.reduce(occurence, {})
  }

  from(arr) {
    return this.push(...arr)
  }

  flat() {
    return this.reduce(concat, [])
  }

  flatMap(fn) {
    return this.reduce(concat, []).map(fn)
  }

  intervals(amount) {
    const offset = Math.ceil(this.length / amount);

    return this.reduce((offsets, _, index) => {
      if (index === 0 || index % offset === 0) {
        offsets.push([index, index + offset])
      }

      return offsets
    }, [])
  }

  inGroups(amount) {
    return this.intervals(amount).map(([firstIndex, lastIndex]) => this.slice(firstIndex, lastIndex))
  }

  intersection(arr) {
    return this.filter((item) => arr.indexOf(item) !== -1)
  }

  exists(itemOrArray = []) {
    if (this.length === 0) {
      return false
    }
    const arr = Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray]
    return this.intersection(arr).length > 0
  }

  except(itemOrArray) {
    const arr = Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray]

    return this.filter((item) => arr.indexOf(item) === -1)
  }

  union(arr) {
    const unionizableArray = this.except(arr)

    return this.concat(unionizableArray)
  }

  first() {
    return this[0]
  }

  second() {
    return this[1]
  }

  last() {
    return this[this.length - 1]
  }

  unique() {
    return Array.from(new Set(this))
  }
}
