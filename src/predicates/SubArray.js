class SubArray {
  static occurence = (object, item) => {
    const newObject = JSON.parse(JSON.stringify(object))

    newObject[item] = 1
    newObject[item] += object[item] ? 1 : 0

    return newObject
  }

  static concat = (arr, item) => arr.concat(item)
}