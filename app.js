//----converter--------
//custom function

function convertLength() {
	var from = document.getElementById("from").value;
	var unit = document.getElementById("unit").value;
	//quick validation
	if(from === "") {
		window.alert("Please input a number to convert it..");
		document.getElementById("from").style.border = "1px solid red";
		return;
	}
	else {
		document.getElementById("from").style = "";
	}
	if(unit == 0) {
		window.alert("Please select unit .....");
		document.getElementById("unit").style.border = "1px solid red";
		return;
	}else {
		document.getElementById("unit").style = "";
	}
	
	//do some maths
	if(unit === "cm") {
		var convert = from / 100;
		convert = convert.toFixed(2);
		document.getElementById("finalUnit").style = "";
		document.getElementById("converted").innerHTML = convert;
		return;
	}else {
		convert = from * (1 / 39.37);
		convert = convert.toFixed(2);
		document.getElementById("finalUnit").style = "";
		document.getElementById("converted").innerHTML = convert;
		
	}
}


document.getElementById("finalUnit").style.display = "none";
document.getElementById("convert").onclick = function() { convertLength();};

// author Santosh Jha ............