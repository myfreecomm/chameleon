Chameleon.Components.Dropdown = function() {
  const dropdownButtons = document.querySelectorAll('.ch-dropdown-toggle');

  const show = function(dropdownMenu) {
    dropdownMenu.classList.add('visible');
    dropdownMenu.parentElement.classList.add('active');
  }

  const hide = function(dropdownMenu) {
    dropdownMenu.classList.remove('visible');
    dropdownMenu.parentElement.classList.remove('active');
  }

  const toggle = function(dropdownMenu) {
    if ( dropdownMenu.classList.contains('visible') === false ) {
      show(dropdownMenu);
    } else {
      hide(dropdownMenu);
    }
  }

  const create = function(button) {
    let dropdownMenu = button.nextElementSibling;

    if ( event.target === button || event.target.parentElement === button ) {
      toggle(dropdownMenu)
    } else if ( event.target.offsetParent === dropdownMenu) {
      return;
    } else {
      hide(dropdownMenu);
    }
  }

  const dropdown = function(event) {
    dropdownButtons.forEach(create);
  }

  document.addEventListener('click', dropdown);
}
