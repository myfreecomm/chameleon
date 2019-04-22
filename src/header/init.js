import { Query } from '../utils/index'
import { stickyHeader, toggleOptions } from './callbacks/index'

const Selectors = {
  moreOptionsButton : '.ch-header-nav-button--moreOptions',
}

function init() {
  let dom = new Query(Selectors);

  document.addEventListener('scroll', stickyHeader, false)
  dom.$moreOptionsButton.send('addEventListener', 'click', toggleOptions, false)
}

export { init }
