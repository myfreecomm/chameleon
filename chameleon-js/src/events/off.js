function removeEvent (obj, eventName, callback) {
  let events = obj[eventName]
  
  if (!events)                    return
  if (callback)                   obj[eventName] = events.filter(v => v !== callback)
  if (!callback || events === []) delete obj[eventName]
}

function off (obj, eventName, callback) {
  if (!obj.__events__) return obj

  if (eventName.charAt(0) === '.')
    for (let event in obj.__events__) {
      let substring = event.substring(event.length - eventName.length, event.length)

      if (substring === eventName) removeEvent(obj.__events__, event, callback)
    }

  removeEvent(obj.__events__, eventName, callback)

  return obj
}

export { off }
