class Numeric {
  static addition = (accumulator, currentValue) => accumulator + currentValue

  static subtraction = (accumulator, currentValue) => accumulator - currentValue

  static multiplication = (accumulator, currentValue) => accumulator * currentValue

  static greaterThan = (max, compare) => (max > compare) ? max : compare

  static lowerThan = (min, compare) => (min < compare) ? min : compare

  static isEven = (num) => (num % 2 === 0)

  static isOdd = (num) => !this.isEven(num)

  static halfPoint = (num) => Math.round(num / 2)
}

export default Numeric
