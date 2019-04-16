Chameleon.Components.Message = function() {

	class Message {

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
			setTimeout(() => {
				this.contentFlashMessage.classList.add('ch-message--hide');
			}, 4000);
		}

		_handleCloseMessage() {
			if(this.contentFlashMessage !== null) {
				this._addEventToClose();
				this._addTimerToClose();
			}
		}
	}

	let flashMessage = new Message();

	flashMessage._handleCloseMessage();

}
