import Numeric from './predicates/Numeric'
import BetterArraySubArray from './betterArraySubArray'

class BetterArrayNumeric extends BetterArraySubArray {
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
}

export default BetterArrayNumeric
