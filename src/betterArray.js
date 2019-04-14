import Reducer from './reducers/Reducer';
import NumericHelper from './helpers/NumericHelper';

class BetterArray extends Array {
  constructor(...args) {
    super(...args)
    this._reducer = super.reduce
  }

  sum() {
    return this._reducer(Reducer.sumReducer, 0)
  }

  subtraction() {
    return this._reducer(Reducer.subtractionReducer, 0)
  }

  product() {
    return this._reducer(Reducer.productReducer, 1)
  }

  maximum() {
    return this._reducer(Reducer.maxReducer())
  }

  minimum() {
    return this._reducer(Reducer.minReducer())
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
    return this._reducer(Reducer.objectReduce, {})
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
    return this._reducer(Reducer.concatReducer, []);
  }

  flatMap(fn) {
    return this._reducer(Reducer.concatReducer, []).map(fn)
  }

  inGroups(groups) {
    const iterations = Math.ceil(this.length / groups);
    const indices = Array(iterations).fill(null).map((_, index) => index * 2);

    return indices.map((index) => this.slice(index, index + groups));
  }
}

export default BetterArray
