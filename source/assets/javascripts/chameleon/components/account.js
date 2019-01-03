Chameleon.Components.Account = function() {

  const Selector = {
    accountContent   : '.ch-account-content',
    dropdownButton   : '.ch-account-content .ch-dropdown-button',
    dropdownMenuItem : '.ch-dropdown-menu-item',
  }

  const ClassName = {
    open: 'open'
  }

  const toggle = function(e) {
    e.preventDefault();
    $(Selector.accountContent).find(Selector.dropdownMenuItem).removeClass(ClassName.open);
    $(this).parent(Selector.dropdownMenuItem).addClass(ClassName.open)
  }

  $(document).on('click', Selector.dropdownButton, toggle);
}
