class Reducer {
  static sumReducer(accumulator, currentValue) { return accumulator + currentValue }

  static subtractionReducer(accumulator, currentValue) { return accumulator - currentValue }

  static productReducer(accumulator, currentValue) { return accumulator * currentValue }

  static maxReducer(max, compare) { return (max > compare) ? max : compare }

  static minReducer(min, compare) { return (min < compare) ? min : compare }

  static objectReduce(object, item) {
    const newObject = JSON.parse(JSON.stringify(object))

    newObject[item] = 1
    newObject[item] += object[item] ? 1 : 0

    return newObject
  }

  static concatReducer(arr, item) { return arr.concat(item) }

  static fullConcatReducer(arr, item) {
    return Array.isArray(item) ? arr.concat(Reducer.fullConcatReducer(item)) : arr.push(item)
  }
}

export default Reducer
