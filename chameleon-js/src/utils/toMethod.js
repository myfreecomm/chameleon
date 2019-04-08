function toMethod (fn) {
  return function (...params) {
    return fn(this, ...params)
  }
}

export { toMethod }
