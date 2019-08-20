
window.onload = function() {
	
	var credit = document.getElementById("credit");
	var paypal = document.getElementById("paypal");

	if (credit.checked === true) {
		updateForm(credit);
		credit.click();
	}

	else if (paypal.checked === true) {
		updateForm(paypal);
		paypal.click();
	}

};


function testLength(value, length, exactLength) {
	if (exactLength)
		return length === value.length;
	else 
		return length >= value.length;	
	}
	

function testNumber(value) {
	if(isNaN(value)) {
		return false;
	}
	return true;
}

function updateForm(control) {

	if (credit.checked === true) {
	
		document.getElementById("first_name").style.display = "";
		document.getElementById("first_name").required = true;
		document.getElementById("first_name_field").style.display = "";
                document.getElementById("first_name_field").required = true;
		document.getElementById("last_name").style.display = "";
              	document.getElementById("last_name").required = true;
		document.getElementById("last_name_field").style.display ="";
		document.getElementById("last_name_field").required = true;
		document.getElementById("address").style.display = "";
		document.getElementById("address").required = true;
                document.getElementById("address_field").style.display = "";
		document.getElementById("address_field").required = true;
		document.getElementById("city").style.display = "";
		document.getElementById("city").required = true;
                document.getElementById("city_field").style.display = "";
		document.getElementById("city_field").required = true;
		document.getElementById("zip").style.display = "";
		document.getElementById("zip").required = true;
                document.getElementById("zip_field").style.display = "";
		document.getElementById("zip_field").required = true;
		document.getElementById("email").style.display = "";
		document.getElementById("email").required = true;
                document.getElementById("email_field").style.display = "";
		document.getElementById("email_field").required = true;
		document.getElementById("name_on_card").style.display ="";
		document.getElementById("name_on_card").required = true;
		document.getElementById("name_on_card_field").style.display = "";
		document.getElementById("name_on_card_field").required = true;
		document.getElementById("card_number").style.display = "";
		document.getElementById("card_number").required = true;
		document.getElementById("card_number_field").style.display = "";
		document.getElementById("card_number_field").required = true;
		document.getElementById("cvc").style.display = "";
		document.getElementById("cvc").required = true;
		document.getElementById("cvc_field").style.display = "";
		document.getElementById("cvc_field").required = true;
		document.getElementById("state").style.display = "";
		document.getElementById("state").required = true;
		document.getElementById("state_field").style.display = "";
		document.getElementById("state_field").required = true;
		document.getElementById("expiration_date").style.display = "";
		document.getElementById("expiration_date").required = true;
		document.getElementById("expiration_date_field").style.display = "";
		document.getElementById("expiration_date_field").required = true;
		document.getElementById("paypal_email").style.display = "none";
		document.getElementById("paypal_email").required = false;
		document.getElementById("paypal_email_field").style.display = "none";
		document.getElementById("paypal_email_field").required = false;
		document.getElementById("paypal_password").style.display = "none";
		document.getElementById("paypal_password").required = false;
		document.getElementById("paypal_password_field").style.display = "none";
		document.getElementById("paypal_password_field").required = false;

		return false;
	}	

	else if (paypal.checked === true) {
               
                document.getElementById("first_name").style.display = "none";
                document.getElementById("first_name").required = false;
                document.getElementById("first_name_field").style.display = "none";
                document.getElementById("first_name_field").required = false;
                document.getElementById("last_name").style.display = "none";
                document.getElementById("last_name").required = false;
                document.getElementById("last_name_field").style.display ="none";
                document.getElementById("last_name_field").required = false;
                document.getElementById("address").style.display = "none";
                document.getElementById("address").required = false;
                document.getElementById("address_field").style.display = "none";
                document.getElementById("address_field").required = false;
                document.getElementById("city").style.display = "none";
                document.getElementById("city").required = false;
                document.getElementById("city_field").style.display = "none";
                document.getElementById("city_field").required = false;
                document.getElementById("zip").style.display = "none";
                document.getElementById("zip").required = false;
                document.getElementById("zip_field").style.display = "none";
                document.getElementById("zip_field").required = false;
                document.getElementById("email").style.display = "none";
                document.getElementById("email").required = false;
                document.getElementById("email_field").style.display = "none";
                document.getElementById("email_field").required = false;
                document.getElementById("name_on_card").style.display ="none";
                document.getElementById("name_on_card").required = false;
                document.getElementById("name_on_card_field").style.display = "none";
                document.getElementById("name_on_card_field").required = false;
                document.getElementById("card_number").style.display = "none";
                document.getElementById("card_number").required = false;
                document.getElementById("card_number_field").style.display = "none";
                document.getElementById("card_number_field").required = false;
                document.getElementById("cvc").style.display = "none";
                document.getElementById("cvc").required = false;
                document.getElementById("cvc_field").style.display = "none";
                document.getElementById("cvc_field").required = false;
                document.getElementById("state").style.display = "none";
                document.getElementById("state").required = false;
                document.getElementById("state_field").style.display = "none";
                document.getElementById("state_field").required = false;
                document.getElementById("expiration_date").style.display = "none";
                document.getElementById("expiration_date").required = false;
                document.getElementById("expiration_date_field").style.display = "none";
                document.getElementById("expiration_date_field").required = false;
                document.getElementById("paypal_email").style.display = "block";
		document.getElementById("paypal_email").required = true;
                document.getElementById("paypal_email_field").style.display = "block";
                document.getElementById("paypal_email_field").required = true;
                document.getElementById("paypal_password").style.display = "block";
                document.getElementById("paypal_password").required = true;
		document.getElementById("paypal_password_field").style.display = "block";
		document.getElementById("paypal_password_field").required = true;
	
		return false;
	}

	return false;

}

function submitForm() {
	var form = document.getElementsByName("payment_form")[0];
	form.submit();
	alert("Payment submitted!");
	form.reset();
	return false;
}


function validateControl(control, name, length) {

        if (credit.checked === true) {
		var zip = document.getElementById("zip_field").value;
		var cvc = document.getElementById("cvc_field").value;
		var isCorrectZipLength = testLength(zip, 5, true);
		var isCorrectCvcLength = testLength(cvc, 3, true);

	        if (isCorrectZipLength == true && isCorrectCvcLength == true) { 
	                return true;
	        }
	
		else if (!isCorrectZipLength) {
			alert("Please enter a zip code of five (5) digits.");
			return false;
		}
		else if (!isCorrectCvcLength) {
			alert("Please enter a CVV2/CVC code of three (3) digits.");
			return false;
		}
	}
}


function validateCreditCard(value) {
	
	card_number = value.replace(/\s/g, "");
	
	isNumber = testNumber(card_number);
	
	if (!isNumber) {
		alert("Error! " + card_number + " cannot have characters that are not numbers!");
		return false;
	}

	if (card_number.charAt(0) === "3") {
		if ( testLength(card_number, 15, true) )	
			return true;
		else  {
			alert("Error: the American Express card entered is not fifteen (15) characters in length!");	
			return false
		}
	}

	else if (card_number.charAt(0) === "6") {
		if ( testLength(card_number, 16, true) )	
			return true;
		else {
			alert("Error: the Discover card entered is not sixteen (16) characters in length!");	
			return false;
		}
	}

	else if (card_number.charAt(0) === "5") {
		if ( testLength(card_number, 16, true) )	
			return true;
		else {
			alert("Error: the MasterCard entered is not sixteen (16) characters in length!");	
			return false;
		}
	}

	else if (card_number.charAt(0) === "4") {
		if ( testLength(card_number, 16, true) )
			return true;
		else {
			alert("Error: the Visa card entered is not sixteen (16) characters in length!");	
			return false;
		}
	}

	alert("Error: Please enter a valid American Express, Discover, MasterCard, or Visa credit card.");
	return false;
}

function validateDate(date) {
	
	var entered_year = date.slice(0,4);
	var entered_month = date.slice(5,7);

	var theDate = new Date();
	
	var current_day = String(theDate.getDate()).padStart(2, '0');
	var current_month = String(theDate.getMonth() + 1).padStart(2, '0');
	var current_year = theDate.getFullYear();

	if (current_year >= entered_year ) {
		if (current_month + 1 < entered_month) {	
			return true;
		}
	}

	alert("Please enter a credit card that is not expired.");
	return false;

}

function validateEmail(email) {

	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;	

	if (re.test(email))
		return true;
	
	else {
		alert("Please enter a valid email address.");
		return false;
	}
}

function validateForm() {
        	
	var cvc = document.getElementById("cvc");
	var zip = document.getElementById("zip");
	var card_number = document.getElementById("card_number_field").value;
	var email = document.getElementById("email_field").value;
	var paypal_email = document.getElementById("paypal_email_field").value;
	var paypal_password = document.getElementById("paypal_password_field").value;
	var min_length = 8;
	var date = document.getElementById("expiration_date_field").value;
	console.log(date);

	if (credit.checked == true) {	

		//validateState() && validateControl(credit, zip, 5) && validateEmail(email) && validateCreditCard(card_number) && validateControl(credit, cvc, 3) && validateDate(date);
			
		if (validateState() && validateControl(credit, zip, 5) && validateEmail(email) && validateCreditCard(card_number) && validateControl(credit, cvc, 3) && validateDate(date)) {
			submitForm();
			return false;
		}
	}

	if (paypal.checked == true) {

		//validateEmail(paypal_email) && validatePassword(paypal_password, 8);
		
		if (validateEmail(paypal_email) && validatePassword(paypal_password, 8)) {
			submitForm();
			return false;	
		}	
	}

	//alert("Error: Failed to submit form.");
	return false;
}

function validatePassword(paypal_password, min_length) {

	console.log(paypal_password);
	length = paypal_password.length;

	if (length >= min_length)
		return true;
	else {
		alert("Please enter a password that is eight (8) or more characters long.");
		return false;
	}
}

function validateState() {

	var state = document.getElementById("state_field").value;
	console.log(state);

	if (state !== "Select State")
		return true;
	
	alert("Please select a state from the 'State:' dropdown box.");
	return false;
}


