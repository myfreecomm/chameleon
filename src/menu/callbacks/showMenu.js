const showMenu = function() {
  let navContainer = document.querySelector('.ch-nav')

  if ( navContainer.classList.contains('collapsed')) {
    navContainer.classList.add('hover')
  }
}

export { showMenu }