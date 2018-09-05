Chameleon.Components.Dropdown = function() {
  const dropdownButtons = document.querySelectorAll('.ch-dropdown-toggle');
  const dropdownCloseButtons = document.querySelectorAll('.ch-dropdown .btn-close');

  const show = function(dropdownMenu) {
    dropdownMenu.classList.add('visible');
    dropdownMenu.parentElement.classList.add('active');

    definePosition(dropdownMenu);
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

  const definePosition = function(dropdownMenu) {
    if (dropdownMenu.dataset.position) {
      let validPositions = ['top', 'right', 'left', 'bottom'];
      let initialPosition = dropdownMenu.dataset.position.split(" ");

      dropdownMenu.classList.remove(...validPositions);
      dropdownMenu.classList.add(...initialPosition);

      positionLastResort(dropdownMenu);
    }
  }

  const positionLastResort = function(dropdownMenu) {
    if ( $(dropdownMenu).offset().left < 0 ) { //Find a better way of making this with vanilla JS
      dropdownMenu.classList.remove('right');
      dropdownMenu.classList.add('left');
    }

    if ( document.body.clientWidth < window.innerWidth ) {
      dropdownMenu.classList.remove('left');
      dropdownMenu.classList.add('right');
    }
  }

  const close = function(button) {
    button.addEventListener('click', function(dropdownMenu) {
      hide(this.offsetParent);
    })
  }

  dropdownCloseButtons.forEach(close);

  const dropdown = function(event) {
    dropdownButtons.forEach(create);
  }

  document.addEventListener('click', dropdown);
}
