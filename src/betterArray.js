import Numeric from '../src/predicates/Numeric'
import SubArray from '../src/predicates/SubArray'

class BetterArray extends Array {
  constructor(...items) {
    super()

    this.from([...items])
  }

  sum() {
    return this.reduce(Numeric.addition, 0)
  }

  subtraction() {
    return this.reduce(Numeric.subtraction)
  }

  product() {
    return this.reduce(Numeric.multiplication)
  }

  maximum() {
    return this.reduce(Numeric.greaterThan)
  }

  minimum() {
    return this.reduce(Numeric.lowerThan)
  }

  average() {
    return this.sum() / this.length
  }

  isEvenLength() {
    return Numeric.isEven(this.length)
  }

  median() {
    const sortedArray = this.sort()
    const half = Numeric.halfPoint(this.length)
    const median = sortedArray[half - 1]

    if (this.isEvenLength()) {
      return ((median + sortedArray[half]) / 2)
    }

    return median
  }

  occurences() {
    return this.reduce(SubArray.occurence, {})
  }

  from(arr) {
    return this.push(...arr)
  }

  mode() {
    const occurences = this.occurences()
    const maxValue = Math.max(...Object.values(occurences))
    const occurenceKeys = Object.keys(occurences)

    return occurenceKeys.filter(occurenceKey => (occurences[occurenceKey] === maxValue))
  }

  flat() {
    return this.reduce(SubArray.concat, [])
  }

  flatMap(fn) {
    return this.reduce(SubArray.concat, []).map(fn)
  }

  inGroups(groupValue) {
    const groupedArray = []
    let subGroup = []
    this.forEach((item, index) => {
      subGroup.push(item)
      if (index % groupValue === (groupValue - 1)) {
        groupedArray.push(subGroup)
        subGroup = []
      }
    })
    if (subGroup.length > 0) {
      groupedArray.push(subGroup)
    }
    return groupedArray
  }

  intersection(arr) {
    return this.filter(item => arr.indexOf(item) !== -1)
  }

  exists(itemOrArray = []) {
    const arr = Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray]
    const commonValues = this.intersection(arr)

    return this.length !== 0 || commonValues.length > 0
  }

  except(itemOrArray) {
    const arr = Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray]

    return this.filter(item => arr.indexOf(item) === -1)
  }

  union(arr) {
    const unionizableArray = this.except(arr)

    return this.concat(unionizableArray)
  }
}

export default BetterArray
