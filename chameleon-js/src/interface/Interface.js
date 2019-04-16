import { prepareEnv } from './prepareEnv'

class Interface {
  constructor (obj) {
    for (let property in obj) this[property] = obj[property]

    Object.freeze(this)
  }

  implementedBy (obj, implementation = {}) {
    prepareEnv(obj)
    obj.__interfaces__.push(this)

    for (let property in this)
      obj[property] = implementation[property] || this[property]

    return this
  }

  isImplementedBy (obj) {
    let focus = obj

    do {
      let interfaces = focus.__interfaces__

      if (interfaces && interfaces.include(this)) return true

      focus = Object.getPrototypeOf(focus)
    } while (focus)

    return false
  }
}
