Chameleon.Components.Dropdown = function() {
  let $nav               = $('.ch-nav');
  let $dropdownContainer = $('.ch-dropdown-content');

  const dropdown = function(event) {
    document.querySelectorAll('.ch-dropdown-toggle').forEach(function(button) {
      var dropdownMenu = button.nextElementSibling;

      if ( event.target === button || event.target.parentElement === button ) {

        if ( dropdownMenu.classList.contains('visible') === false ) {
          dropdownMenu.classList.add('visible');
          dropdownMenu.parentElement.classList.add('active');
        } else {
          dropdownMenu.classList.remove('visible');
          dropdownMenu.parentElement.classList.remove('active');
        }

      } else if ( event.target.offsetParent === dropdownMenu) {

        return;

      } else {

        dropdownMenu.classList.remove('visible');
        dropdownMenu.parentElement.classList.remove('active');

      }
    });
  }

  $(document).on('click', dropdown);
}
