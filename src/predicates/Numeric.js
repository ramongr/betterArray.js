export const addition = (accumulator, currentValue) => accumulator + currentValue

export const subtraction = (accumulator, currentValue) => accumulator - currentValue

export const multiplication = (accumulator, currentValue) => accumulator * currentValue

export const greaterThan = (max, compare) => ((max > compare) ? max : compare)

export const lowerThan = (min, compare) => ((min < compare) ? min : compare)

export const isEven = (num) => (num % 2 === 0)

export const isOdd = (num) => !this.isEven(num)

export const halfPoint = (num) => Math.round(num / 2)
