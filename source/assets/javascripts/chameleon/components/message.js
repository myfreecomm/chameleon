Chameleon.Components.Message = function() {

  const closeButton = document.querySelector('[data-action="close"]');

  const handleCloseMessage = (element, event, attr) => {
    element.addEventListener(event, function() {
      element.parentNode.classList.add(attr);
    });
  }

  handleCloseMessage(closeButton, 'click', 'ch-message--hide');
}
