class DOMProxy {
  constructor (query) {
    this._$elements = document.querySelectorAll(query)
  }

  send (method, ...options) {
    this._$elements.forEach($element => {
      $element[method](...options)
    })
  }
}

export { DOMProxy }
