function computeNum() {
	// Input - get input and validate if correct length and if a number
	var textInput = get("aNum").value;
	if (textInput.length < 3 || isNaN(textInput)) return; // Validation return nothing
	
	// Processing - multiply by the a random number taken to the 3rd power
	var theNumber = parseInt(textInput); // OK - parse string to number
    var time = t;
    var windchill = f;
    var windspeed = s;
    f = 35.74 + (0.6215 * t) - (35.75 *(Math.pow(s, 0.16))) + (0.4275 * t * Math.pow(s, 0.16));  
	 
	
	// Output - output to the div and round the number value to two decimal places
	get("output").innerHTML = "The value is <strong>" + f.toFixed(2) + "</strong>!";
}

function get(e) { return document.getElementById(e); }