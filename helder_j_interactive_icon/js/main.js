(() => {

//link test

	console.log('js link sucessful');

//var

	let
	//full visibility
		backCircle = document.getElementById("BackgoundCircle"),
		backHead =  document.getElementById("PurpHead"),
		frontHead =  document.getElementById("GreenHead"),

	//back face
		backHeadFace = document.getElementById("HeadPurp"),
		backHeadStreak =  document.getElementById("StreakPurp"),
		backHeadEyeL =  document.getElementById("EyeLeftPurp"),
		backHeadEyeR =  document.getElementById("EyeRightPurp"),
	//front face
		frontHeadFace = document.getElementById("HeadGreen"),
		frontHeadStreak =  document.getElementById("StreakGreen"),
		frontHeadEyeL =  document.getElementById("EyeLeftGreen"),
		frontHeadEyeR =  document.getElementById("EyeRightGreen"),

	//visibility buttons
		circleButton = document.querySelector(".circle"),
		backButton = document.querySelector(".back"),
		frontButton = document.querySelector(".front"),

	//invert colour buttons
		circleColourButton = document.querySelector(".circleColour"),
		backColourButton = document.querySelector(".backColour"),
		frontColourButton = document.querySelector(".frontColour");

//functions 

	//Button Link Test
	function logMyId() {
		console.log(this.id);
	}

	//Background Visibility
	function removeCircle() {
		backCircle.classList.remove()
		backCircle.classList.toggle("selected")
	}

	//Purple Head Visibility
	function removeBack() {
		backHead.classList.remove()
		backHead.classList.toggle("selected")
	}	

	//Green Head Visibility
	function removeFront() {
		frontHead.classList.remove()
		frontHead.classList.toggle("selected")
	}

	//Background Invert Colours
	function circleColour() {
		backCircle.classList.remove()
		backCircle.classList.toggle("cls-7")
	}

	//Purple Head Invert Colours
	function backColour() {
		backHeadFace.classList.remove()
		backHeadFace.classList.toggle("cls-6")
		backHeadStreak.classList.remove()
		backHeadStreak.classList.toggle("cls-7")
		backHeadEyeL.classList.remove()
		backHeadEyeL.classList.toggle("cls-8")
		backHeadEyeR.classList.remove()
		backHeadEyeR.classList.toggle("cls-8")
	}

	//Green Head Invert Colours
	function frontColour() {
		frontHeadFace.classList.remove()
		frontHeadFace.classList.toggle("invertGH") // ("cls-2") !Will add "cls-2" but crosses out "cls-6"! //
		frontHeadStreak.classList.remove()
		frontHeadStreak.classList.toggle("invertLG") // ("cls-3") !Will add "cls-3" but crosses out "cls-7"! //
		frontHeadEyeL.classList.remove()
		frontHeadEyeL.classList.toggle("invertEyes") // ("cls-5") !Will add "cls-5" but crosses out "cls-8"! //
		frontHeadEyeR.classList.remove()
		frontHeadEyeR.classList.toggle("invertEyes") // ("cls-5") !Will add "cls-5" but crosses out "cls-8"! //
	}
//events 

	//Background visibility 
	circleButton.addEventListener("click", logMyId)
	circleButton.addEventListener("click", removeCircle)

	//Purple Head visibility
	backButton.addEventListener("click", logMyId)
	backButton.addEventListener("click", removeBack)

	//Green Head visibility
	frontButton.addEventListener("click", logMyId)
	frontButton.addEventListener("click", removeFront)

	//Background invert
	circleColourButton.addEventListener("click", logMyId)
	circleColourButton.addEventListener("click", circleColour)

	//Purple Head invert
	backColourButton.addEventListener("click", logMyId)
	backColourButton.addEventListener("click", backColour)

	//Green Head invert
	frontColourButton.addEventListener("click", logMyId)
	frontColourButton.addEventListener("click", frontColour)



})();
