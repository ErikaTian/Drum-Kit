// Lesson 137: you can also use a while loop instead of below for loop
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got clicked!");
// 	});
// }


// Lesson 140/142: you can also use a while loop instead of below for loop
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		// Use the below line to see what "this" refers!!!
		// console.log(this);

		// The below version is not good, too long, use switch clause instead
		// if (this.innerHTML == "w") { 
		// 	var audio1 = new Audio("./sounds/crash.mp3");
		// 	audio1.play();
		// }
		// if (this.innerHTML == "a") { 
		// 	var audio1 = new Audio("./sounds/kick-bass.mp3");
		// 	audio1.play();
		// }
		// if (this.innerHTML == "s") { 
		// 	var audio1 = new Audio("./sounds/snare.mp3");
		// 	audio1.play();
		// }
		// if (this.innerHTML == "d") { 
		// 	var audio1 = new Audio("./sounds/tom-1.mp3");
		// 	audio1.play();
		// }
		// if (this.innerHTML == "j") { 
		// 	var audio1 = new Audio("./sounds/tom-2.mp3");
		// 	audio1.play();
		// }
		// if (this.innerHTML == "k") { 
		// 	var audio1 = new Audio("./sounds/tom-3.mp3");
		// 	audio1.play();
		// }
		// if (this.innerHTML == "l") { 
		// 	var audio1 = new Audio("./sounds/tom-4.mp3");
		// 	audio1.play();
		// }

		var buttonInnerHTML = this.innerHTML;
		buttonAnimation(buttonInnerHTML);

	switch (buttonInnerHTML) {
		case "w":
				var crash = new Audio("./sounds/crash.mp3");
				crash.play();
			break;

			case "a":
				var kick_bass = new Audio("./sounds/kick-bass.mp3");
				kick_bass.play();
			break;
		
			case "s":
				var snare = new Audio("./sounds/snare.mp3");
				snare.play();
			break;
		
			case "d":
				var tom1 = new Audio("./sounds/tom-1.mp3");
				tom1.play();
			break;
		
			case "j":
				var tom2 = new Audio("./sounds/tom-2.mp3");
				tom2.play();
			break;
		
			case "k":
				var tom3 = new Audio("./sounds/tom-3.mp3");
				tom3.play();
			break;
		
			case "l":
				var tom4 = new Audio("./sounds/tom-4.mp3");
				tom4.play();
			break;
		
		default: console.log(buttonInnerHTML);
			break;
		}
	});
}
// var audio1 = new Audio("./sounds/tom-1.mp3");
// audio1.play();




// Lesson 145: keyEventListener
document.addEventListener("keydown", function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) { 
	
	switch (key) {
		case "w":
			var crash = new Audio("./sounds/crash.mp3");
			crash.play();
			break;

		case "a":
			var kick_bass = new Audio("./sounds/kick-bass.mp3");
			kick_bass.play();
			break;
		
		case "s":
			var snare = new Audio("./sounds/snare.mp3");
			snare.play();
			break;
		
		case "d":
			var tom1 = new Audio("./sounds/tom-1.mp3");
			tom1.play();
			break;
		
		case "j":
			var tom2 = new Audio("./sounds/tom-2.mp3");
			tom2.play();
			break;
		
		case "k":
			var tom3 = new Audio("./sounds/tom-3.mp3");
			tom3.play();
			break;
		
		case "l":
			var tom4 = new Audio("./sounds/tom-4.mp3");
			tom4.play();
			break;
		
		default: console.log(key);
			break;
	}
}



function buttonAnimation(currentKey) { 
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}
