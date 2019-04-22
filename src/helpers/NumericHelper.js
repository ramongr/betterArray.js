class NumericHelper {
  static isEven(num) { return (num.length / 2 === 0) }

  static isOdd(num) { return !this.isEven(num) }

  static halfPoint(num) { return Math.round(num / 2) }
}

export default NumericHelper