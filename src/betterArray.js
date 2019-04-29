import Reducer from './reducers/Reducer'
import NumericHelper from './helpers/NumericHelper'

class BetterArray extends Array {
  constructor(...args) {
    super(...args)
    this._reducer = super.reduce
  }

  sum() {
    return this._reducer(Reducer.addition, 0)
  }

  subtraction() {
    if (this.length === 0) {
      return 0;
    }
    return this._reducer(Reducer.subtraction)
  }

  product() {
    return this._reducer(Reducer.multiplication, 1)
  }

  maximum() {
    return this._reducer(Reducer.greaterThan)
  }

  minimum() {
    return this._reducer(Reducer.lowerThan)
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
    return this._reducer(Reducer.occurence, {})
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
    return this._reducer(Reducer.concat, [])
  }

  flatMap(fn) {
    return this._reducer(Reducer.concat, []).map(fn)
  }

  inGroups(groups) {
    const iterations = Math.ceil(this.length / groups)
    const indices = Array(iterations).fill(null).map((_, index) => index * 2)

    return indices.map((index) => this.slice(index, index + groups))
  }

  intersection(arr) {
    return this.filter(item => arr.indexOf(item) === -1)
  }
}

export default BetterArray
