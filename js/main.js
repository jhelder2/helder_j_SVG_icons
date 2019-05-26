(() => {
	console.log('js. link successful');

	let
		objectButton = document.querySelector("button");
		iconBackground = document.querySelector("")

	function logMyId() {
		console.log(this.id);
		this.style.opacity = 0.5;
	}

	objectButton.addEventListener("click", logMyId);

})();