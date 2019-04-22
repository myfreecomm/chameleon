const stickyHeader = function() {
  let header = document.querySelector('.ch-header')
  let prop = window.scrollY > 0 ? 'add' : 'remove'

  header.classList[prop]('sticky')
}

export { stickyHeader }