var toTest = document.getElementById("tempInput").value;

// to Celcius


function toCelsius() {
	var newTempC = (document.getElementById("tempInput").value - 32) / 1.8
		document.getElementById("displayTemp").innerHTML = "The temp is " + Math.round(newTempC) + " degrees Celsius";
		if (newTempC > 32) {
			document.getElementById("displayTemp").style.color = "red";
		} else if (newTempC < 0) {
			document.getElementById("displayTemp").style.color = "blue";
		} else {
			document.getElementById("displayTemp").style.color = "green";
		}
}
// to farenheight
function toFahrenheit() {
	var newTempF = document.getElementById("tempInput").value * 1.8 + 32;
		document.getElementById("displayTemp").innerHTML = "The temp is " + Math.round(newTempF) + " degrees Fahrenheit";
		if (newTempF > 90) {
			document.getElementById("displayTemp").style.color = "red";
		} else if (newTempF < 32) {
			document.getElementById("displayTemp").style.color = "blue";
		} else {
			document.getElementById("displayTemp").style.color = "green";
		}
}

// CLEAR ALL
var button = document.getElementById("converter");
var clearIt = document.getElementById("clear");
clearIt.addEventListener("click", clearText);
function clearText() {
	document.getElementById("tempInput").value = "";
	document.getElementById("fars").checked = false;
	document.getElementById("cels").checked = false;
	document.getElementById("displayTemp").innerHTML = "";
}

//CHECK INPUTS
function determineConverter (clickEvent) {
	var inputVal = document.getElementById("tempInput").value;
	console.log(!isNaN(inputVal));
	if (!isNaN(inputVal)) {
		console.log("event", clickEvent);
		if (document.getElementById("cels").checked) {
			toCelsius();
		} else if (document.getElementById("fars").checked) {
			toFahrenheit();
		} else {
			alert("Check one of the selections please!");
		}
	}
}
function determineKey (event) {
	console.log("event", event);
	if (event.which == 13 || event.keycode == 13) {
		determineConverter();
	}
}
// EVENT LISTENERS
button.addEventListener("click", determineConverter);
document.getElementById("field").addEventListener("keypress", determineKey);
