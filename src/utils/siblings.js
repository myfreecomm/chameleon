function siblings(element) {
  let filter   = Array.prototype.filter
  let parentChildren = element.parentNode.children

  return filter.call(parentChildren, child => child !== element)
}

export { siblings }
