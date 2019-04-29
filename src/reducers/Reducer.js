class Reducer {
  static addition = (accumulator, currentValue) => accumulator + currentValue

  static subtraction = (accumulator, currentValue) => accumulator - currentValue

  static multiplication = (accumulator, currentValue) => accumulator * currentValue

  static greaterThan = (max, compare) => (max > compare) ? max : compare

  static lowerThan = (min, compare) => (min < compare) ? min : compare

  static occurence = (object, item) => {
    const newObject = JSON.parse(JSON.stringify(object))

    newObject[item] = 1
    newObject[item] += object[item] ? 1 : 0

    return newObject
  }

  static concat = (arr, item) => arr.concat(item)
}

export default Reducer
