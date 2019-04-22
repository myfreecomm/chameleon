const toggleLogoShadow = function() {
  let logo = document.querySelector('.ch-logo')
  let prop = this.scrollTop > 0 ? 'add' : 'remove'

  logo.classList[prop]('has-shadow')
}

export { toggleLogoShadow }
