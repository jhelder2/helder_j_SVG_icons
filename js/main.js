(() => {
	console.log('js. link successful');

	let
		objectButton = document.querySelector("button"),
		iconBackground = document.querySelector("#background");

	function logMyId() {
		console.log(this.id);
		this.style.opacity = 0.5;
	}

	function removeBack(){
		iconBackground.classList.toggle("hidden");
	}

	objectButton.addEventListener("click", logMyId, removeBack);

})();