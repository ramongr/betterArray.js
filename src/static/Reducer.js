class Reducer {
  static sumReducer(accumulator, currentValue) { return accumulator + currentValue; }

  static subtractionReducer(accumulator, currentValue) { return accumulator - currentValue; }

  static productReducer(accumulator, currentValue) { return accumulator * currentValue; }

  static maxReducer(max, compare) { return (max > compare) ? max : compare; }

  static minReducer(min, compare) { return (min < compare) ? min : compare; }
}

export default Reducer;
