class Reducer {
  static addition(accumulator, currentValue) { return accumulator + currentValue }

  static subtraction(accumulator, currentValue) { return accumulator - currentValue }

  static multiplication(accumulator, currentValue) { return accumulator * currentValue }

  static greaterThan(max, compare) { return (max > compare) ? max : compare }

  static lowerThan(min, compare) { return (min < compare) ? min : compare }

  static occurence(object, item) {
    const newObject = JSON.parse(JSON.stringify(object))

    newObject[item] = 1
    newObject[item] += object[item] ? 1 : 0

    return newObject
  }

  static concat(arr, item) { return arr.concat(item) }
}

export default Reducer
