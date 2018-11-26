Chameleon.Components.Message = function() {

	class handleCloseMessage {

		constructor(){
			let $ = document.querySelector.bind(document);
			this.closeButton = $('[data-action="close"]');
			this.contentFlashMessage = $('[data-type="flash_message"]');
		}

		 _addEventToClose(){
			this.closeButton.addEventListener('click', function(){
				this.parentNode.classList.add('ch-message--hide');
			})
		}

		 _addTimerToClose(){
			setTimeout(() =>{
				this.contentFlashMessage.classList.add('ch-message--hide');
			}, 4000);
		}
	}


	let callCloseMessage = new handleCloseMessage();

	callCloseMessage._addEventToClose();
	callCloseMessage._addTimerToClose();
}
