// JavaScript Document
function formValidator(){
	// Make quick references to our fields
	var FName = document.getElementById('FName');
	var LName = document.getElementById('LName');
	var City = document.getElementById('City');
	var Phone = document.getElementById('Phone');
	var Email = document.getElementById('Email');
	
	// Check each input in the order that it appears in the form!
	if(isAlphabet(FName, "Please enter First Name")){
		if(isAlphabet(LName, "Numbers enter Last Name")){
			if(isAlphabet(City, "Please enter a City")){
				if(isNumeric(Phone, "Please enter your Phone Number")){
						if(emailValidator(Email, "Please enter a valid email address")){
							return true;
						}
					}
				}
			}
		}
	
	
	
	return false;
	
}

function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isAlphanumeric(elem, helperMsg){
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function lengthRestriction(elem, min, max){
	var uInput = elem.value;
	if(uInput.length >= min && uInput.length <= max){
		return true;
	}else{
		alert("Please enter between " +min+ " and " +max+ " characters");
		elem.focus();
		return false;
	}
}

function madeSelection(elem, helperMsg){
	if(elem.value == "Please Choose"){
		alert(helperMsg);
		elem.focus();
		return false;
	}else{
		return true;
	}
}

function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}
function popup() {
alert("This is a simple pop up box")
}
var now = new Date();
var hours = now.getHours();

//Keep in code - Written by Computerhope.com
//Place this script in your HTML heading section

document.bgColor="#CC9900";

//18-19 night
if (hours > 17 && hours < 20){
document.write ('<body style="background-color: #EDABEC">');
}
//20-21 night
else if (hours > 19 && hours < 22){
document.write ('<body style="background-color: #99C">');
}
//22-4 night
else if (hours > 21 || hours < 5){
document.write ('<body style="background-color: #CCF;">');
}
//9-17 day
else if (hours > 8 && hours < 18){
document.write ('<body style="background-color: #9CC">');
}
//7-8 day
else if (hours > 6 && hours < 9){
document.write ('<body style="background-color: #FFC">');}
//5-6 day
else if (hours > 4 && hours < 7){
document.write ('<body style="background-color: #C99">');
}
else {
document.write ('<body style="background-color: #FCC">');
}