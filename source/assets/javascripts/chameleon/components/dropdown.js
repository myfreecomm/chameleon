Chameleon.Components.Dropdown = function() {
  const Selector = {
    closeButton      : '.ch-dropdown .btn-close',
    dropdownButton   : '.ch-dropdown-toggle',
    dropdownContent  : '.ch-dropdown-content'
  }

  const ClassName = {
    active  : 'active',
    visible : 'visible'
  }

  const show = function(dropdownMenu) {
    dropdownMenu.classList.add(ClassName.visible);
    dropdownMenu.parentElement.classList.add(ClassName.active);

    definePosition(dropdownMenu);
  }

  const hide = function(dropdownMenu) {
    dropdownMenu.classList.remove(ClassName.visible);
    dropdownMenu.parentElement.classList.remove(ClassName.active);
  }

  const toggle = function(dropdownMenu) {
    if ( dropdownMenu.classList.contains(ClassName.visible) === false ) {
      show(dropdownMenu);
    } else {
      hide(dropdownMenu);
    }
  }

  const definePosition = function(dropdownMenu) {
    let initialPosition = "";
    let validPositions = ['top', 'right', 'left', 'bottom'];

    dropdownMenu.classList.remove(...validPositions);
    initialPosition = dropdownMenu.dataset.position ? dropdownMenu.dataset.position.split(" ") : ['bottom' , 'right'];
    dropdownMenu.classList.add(...initialPosition);

    positionLastResort(dropdownMenu);
  }

  const positionLastResort = function(dropdownMenu) {
    if ($(dropdownMenu).offset().left < 0) {
      dropdownMenu.classList.remove('right');
      dropdownMenu.classList.add('left');
    }

    if (document.body.scrollWidth > window.innerWidth) {
      dropdownMenu.classList.remove('left');
      dropdownMenu.classList.add('right');
    }
  }

  const dropdown = function(button) {
    let dropdownMenu = button.nextElementSibling;

    if (event.target === button || event.target.parentElement === button) {
      toggle(dropdownMenu)
    } else if ($(event.target).parents(Selector.dropdownContent)[0] === dropdownMenu) {
      return;
    } else {
      hide(dropdownMenu);
    }
  }

  const close = function(button) {
    if (event.target === button || event.target.parentElement === button) {
      hide(button.offsetParent);
    }
  }

  const handleDropdown = function(event) {
    let dropdownButtons = document.querySelectorAll(Selector.dropdownButton);
    dropdownButtons.forEach(dropdown);
  }

  const handleCloseDropdown = function(e) {
    let dropdownCloseButtons = document.querySelectorAll(Selector.closeButton);
    dropdownCloseButtons.forEach(close);
  }

  document.addEventListener('click', handleDropdown);
  document.addEventListener('click', handleCloseDropdown);
}
