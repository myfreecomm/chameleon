const hideMenu = function() {
  let navContainer = document.querySelector('.ch-nav')

  if ( navContainer.classList.contains('collapsed')) {
    navContainer.classList.remove('hover')
  }
}

export { hideMenu }