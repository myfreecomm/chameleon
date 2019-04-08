function trigger (obj, eventName, data, thisObject) {
  if (!obj.__events__) return obj

  let callbacks = []

  thisObject = thisObject === undefined ? obj : thisObject

  for (let event in obj.__events__)
    if (
      event.length >= eventName.length &&
      event === eventName ||
      ( event.substring(0, eventName.length) === eventName &&
        event.charAt(eventName.length) === '.' )
    ) callbacks = callbacks.concat(obj.__events__[event])

  callbacks.forEach(callback => callback.call(thisObject, data))

  return obj
}

export { trigger }
