Chameleon.Components.Message = function() {

  const iconClose = document.querySelector('[data-js="close"]');

  const handleCloseMessage = (element, event, attr) => {
    element.addEventListener(event, function(e){
      e.preventDefault();
      element.parentNode.classList.toggle(attr);
    });
  }

  handleCloseMessage(iconClose, 'click', 'ch-hide--message');
}
