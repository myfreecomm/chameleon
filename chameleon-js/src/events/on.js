import { prepareEvents } from './prepareEvents'

function on (obj, eventName, callback) {
  prepareEvents(obj, eventName)
  obj.__events__[eventName].push(callback)

  return obj
}

export { on }
