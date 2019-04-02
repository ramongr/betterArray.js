import Reducer from './static/Reducer';

class BetterArray extends Array {
  sum() {
    return super.reduce(Reducer.sumReducer, 0);
  }

  subtraction() {
    if (super.length === 0) { return 0; }
    return super.reduce(Reducer.subtractionReducer);
  }

  product() {
    return super.reduce(Reducer.productReducer, 1);
  }

  maximum() {
    return super.reduce(Reducer.maxReducer());
  }

  minimum() {
    return super.reduce(Reducer.minReducer());
  }

  average() {
    return this.sum() / super.length;
  }

  median() {
    const half = Math.round(super.length / 2);
    const isEven = (super.length % 2 === 0);
    let median = super.sort()[half];

    if (isEven) { median = (median + super.sort()[half - 1]) / 2; }

    return median;
  }

  occurences() {
    return super.reduce(Reducer.objectReduce, {});
  }

  from(arr) {
    return super.push(...arr);
  }

  mode() {
    const occurences = this.occurences();
    const maxValue = Math.max(...Object.values(occurences));
    const occurenceKeys = Object.keys(occurences);

    return occurenceKeys.filter(occurenceKey => (occurences[occurenceKey] === maxValue));
  }
}

export default BetterArray;
