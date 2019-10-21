import {
  addition, subtraction, multiplication, greaterThan, lowerThan, isEven, halfPoint,
} from './predicates/Numeric'
import BetterArraySubArray from './betterArraySubArray'

export default class BetterArrayNumeric extends BetterArraySubArray {
  sum() {
    return this.reduce(addition, 0)
  }

  subtraction() {
    return this.reduce(subtraction)
  }

  product() {
    return this.reduce(multiplication)
  }

  maximum() {
    return this.reduce(greaterThan)
  }

  minimum() {
    return this.reduce(lowerThan)
  }

  average() {
    return this.sum() / this.length
  }

  isEvenLength() {
    return isEven(this.length)
  }

  median() {
    const sortedArray = this.sort()
    const half = halfPoint(this.length)
    const median = sortedArray[half - 1]

    if (this.isEvenLength()) {
      return ((median + sortedArray[half]) / 2)
    }

    return median
  }

  mode() {
    const occurences = this.occurences()
    const maxValue = Math.max(...Object.values(occurences))
    const occurenceKeys = Object.keys(occurences)

    return occurenceKeys.filter((occurenceKey) => (occurences[occurenceKey] === maxValue))
  }
}