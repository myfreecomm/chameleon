function prepareEvents (obj, eventName) {
  if (!obj.__events__)
    Object.defineProperty(obj, '__events__', {
      configurable: false,
      enumerable:   false,
      value:        {}
    })

  if (eventName && !obj.__events__[eventName]) obj.__events__[eventName] = [];
}

export { prepareEvents }
