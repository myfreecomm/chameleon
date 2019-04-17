import { DOMProxy } from './DOMProxy'

class Query {
  constructor (options) {
    for (let key in options) {
      this[`$${key}`] = new DOMProxy(options[key])
    }
  }
}

export { Query }

