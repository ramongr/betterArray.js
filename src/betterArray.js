import BetterArrayNumeric from './betterArrayNumeric'

class BetterArray extends BetterArrayNumeric {
  constructor(...items) {
    super()

    this.from([...items])
  }
}

export default BetterArray
