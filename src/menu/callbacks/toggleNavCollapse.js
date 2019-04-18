const toggleNavCollapse = function() {
  let navContainer = document.querySelector('.ch-nav')

  if (navContainer.classList.contains('hover')) navContainer.classList.remove('hover')

  navContainer.classList.toggle('collapsed')
}

export { toggleNavCollapse }
