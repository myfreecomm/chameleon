function prepareEnv (obj, interface) {
  if (!obj.__interfaces__)
    Object.defineProperty(obj, '__interfaces__', {
      configurable: false,
      enumerable:   false,
      value:        []
    })
}

export { prepareEnv }
