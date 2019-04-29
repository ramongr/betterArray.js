class NumericHelper {
  static isEven = (num) => (num % 2 === 0)

  static isOdd = (num) => !this.isEven(num)

  static halfPoint = (num) => Math.round(num / 2)
}

export default NumericHelper