import BetterArrayNumeric from './betterArrayNumeric'

export default class BetterArray extends BetterArrayNumeric {
  constructor(items = []) {
    super()

    this.from([...items])
  }
}
