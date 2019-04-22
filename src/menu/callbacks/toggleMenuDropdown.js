import { siblings } from '../../utils/index'

const toggleMenuDropdown = function() {
  let $dropdown = this.parentNode
  let $dropdownSiblings = siblings(this)

  $dropdownSiblings.forEach(sibling => {
    if (sibling.classList.contains('open')) {
      sibling.classList.remove('open')
    }
  })

  $dropdown.classList.toggle('open');
}

export { toggleMenuDropdown }
