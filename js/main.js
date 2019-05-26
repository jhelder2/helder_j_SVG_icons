(() => {
	console.log('js. link successful');

	let
		objectButton = document.querySelector("button"),
		iconBackground = document.querySelectorAll("#background");

	function logMyId() {
		console.log(this.id);
	}

	function removeBack(){
		iconBackground.textContent = "hidden"
		iconBackground.classList.toggle(".hidden");
	}

	objectButton.addEventListener("click", logMyId, removeBack);

})();