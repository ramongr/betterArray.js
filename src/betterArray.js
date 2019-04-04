import Reducer from './static/Reducer';

class BetterArray extends Array {
  constructor(...args) {
    super(...args);
    this._reducer = super.reduce;
  }

  sum() {
    return this._reducer(Reducer.sumReducer, 0);
  }

  subtraction() {
    return this._reducer(Reducer.subtractionReducer, 0);
  }

  product() {
    return this._reducer(Reducer.productReducer, 1);
  }

  maximum() {
    return this._reducer(Reducer.maxReducer());
  }

  minimum() {
    return this._reducer(Reducer.minReducer());
  }

  average() {
    return this.sum() / this.length;
  }

  isEven () {
    return (this.length % 2 === 0);
  }

  median() {
    const sortedArray = this.sort();
    const half = Math.round(sortedArray.length / 2);
    const median = sortedArray[half - 1];

    if (this.isEven()) {
      return ((median + sortedArray[half]) / 2);
    }

    return median;
  }

  occurences() {
    return this._reducer(Reducer.objectReduce, {});
  }

  from(arr) {
    return this.push(...arr);
  }

  mode() {
    const occurences = this.occurences();
    const maxValue = Math.max(...Object.values(occurences));
    const occurenceKeys = Object.keys(occurences);

    return occurenceKeys.filter(occurenceKey => (occurences[occurenceKey] === maxValue));
  }
}

export default BetterArray;
