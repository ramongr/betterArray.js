import Reducer from './reducers/Reducer'
import NumericHelper from './helpers/NumericHelper'

class BetterArray extends Array {
  constructor(...items) {
    super();

    this.from([...items]);
  }

  sum() {
    return this.reduce(Reducer.addition, 0)
  }

  subtraction() {
    return this.reduce(Reducer.subtraction)
  }

  product() {
    return this.reduce(Reducer.multiplication)
  }

  maximum() {
    return this.reduce(Reducer.greaterThan)
  }

  minimum() {
    return this.reduce(Reducer.lowerThan)
  }

  average() {
    return this.sum() / this.length
  }

  isEvenLength() {
    return NumericHelper.isEven(this.length)
  }

  median() {
    const sortedArray = this.sort()
    const half = NumericHelper.halfPoint(this.length)
    const median = sortedArray[half - 1]

    if (this.isEvenLength()) {
      return ((median + sortedArray[half]) / 2)
    }

    return median
  }

  occurences() {
    return this.reduce(Reducer.occurence, {})
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
    return this.reduce(Reducer.concat, [])
  }

  flatMap(fn) {
    return this.reduce(Reducer.concat, []).map(fn)
  }

  inGroups(groupValue) {
    let groupedArray = []
    let subGroup = []
    this.forEach((item, index) => {
      subGroup.push(item)
      if (index % groupValue === (groupValue - 1)) {
        groupedArray.push(subGroup)
        subGroup = []
      }
    })
    subGroup.length > 0 && groupedArray.push(subGroup)
    return groupedArray;
  }

  intersection(arr) {
    return this.filter(item => arr.indexOf(item) !== -1)
  }

  exists(itemOrArray) {
    const arr = Array.from(itemOrArray).flat()
    const commonValues = this.intersection(arr)

    return JSON.stringify(this.sort()) === JSON.stringify(commonValues.sort())
  }

  except(itemOrArray) {
    const arr = Array.from(itemOrArray).flat()

    return this.filter(item => arr.indexOf(item) === -1)
  }

  union(arr) {
    return Array.from(new Set(this.concat(arr)))
  }
}

export default BetterArray
