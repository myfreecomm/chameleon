import { Query } from '../utils/index'
import {
  toggleMenuDropdown,
  toggleNavCollapse,
  toggleNav,
  toggleLogoShadow,
  showMenu,
  hideMenu
} from './callbacks/index'

const Selectors = {
  button : '.ch-menu-item .ch-dropdown-button',
  collapseButton : '.ch-expand-button > button',
  navContainer : '.ch-nav',
  navMenu : '.ch-menu',
  toggleButton : '[data-toogle="nav"]',
  dropdown : '.ch-dropdown',
  logo : '.ch-logo',
  navElements : '.ch-nav, .ch-nav > .ch-menu'
}

function init() {
  let dom = new Query(Selectors);

  dom.$button.send('addEventListener', 'click', toggleMenuDropdown, false)
  dom.$collapseButton.send('addEventListener', 'click', toggleNavCollapse, false)
  dom.$toggleButton.send('addEventListener', 'click', toggleNav, false)
  dom.$navMenu.send('addEventListener', 'scroll', toggleLogoShadow, false)
  dom.$navElements.send('addEventListener', 'mouseenter', showMenu, false)
  dom.$navContainer.send('addEventListener', 'mouseleave', hideMenu, false)
}

export { init }
