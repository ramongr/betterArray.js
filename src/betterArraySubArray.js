import SubArray from './predicates/SubArray'

class BetterArraySubArray extends Array {
  occurences() {
    return this.reduce(SubArray.occurence, {})
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
    return this.reduce(SubArray.concat, [])
  }

  flatMap(fn) {
    return this.reduce(SubArray.concat, []).map(fn)
  }

  inGroups(groupValue) {
    const groupedArray = []
    let subGroup = []
    this.forEach((item, index) => {
      subGroup.push(item)
      if (index % groupValue === (groupValue - 1)) {
        groupedArray.push(subGroup)
        subGroup = []
      }
    })
    if (subGroup.length > 0) {
      groupedArray.push(subGroup)
    }
    return groupedArray
  }

  intersection(arr) {
    return this.filter(item => arr.indexOf(item) !== -1)
  }

  exists(itemOrArray = []) {
    const arr = Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray]
    const commonValues = this.intersection(arr)

    return this.length !== 0 || commonValues.length > 0
  }

  except(itemOrArray) {
    const arr = Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray]

    return this.filter(item => arr.indexOf(item) === -1)
  }

  union(arr) {
    const unionizableArray = this.except(arr)

    return this.concat(unionizableArray)
  }
}

export default BetterArraySubArray
