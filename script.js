//use dom manipulation and grab all elements by ID
passwordResult=document.getElementById('result');
lengthValue=document.getElementById('length');
uppercaseValue=document.getElementById('uppercase');
lowercaseValue=document.getElementById('lowercase');
numbersValue=document.getElementById('numbers');
symbolsValue=document.getElementById('symbols');
generatePass=document.getElementById('generate');

generatePass.addEventListener('click', function() {
	const length = +lengthValue.value;
	const trueLower = lowercaseValue.checked;
	const trueUpper = uppercaseValue.checked;
	const trueNumber = numbersValue.checked;
	const trueSymbol = symbolsValue.checked;
	
	passwordResult.innerText = generatePassword(trueLower, trueUpper, trueNumber, trueSymbol, length);
});
//object that contains variables with values that will be randomly chosen
const getRandom ={
	lower:"abcdefghijklmnopqrstuvwxyz",
	upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	number:"0123456789",
	symbol:"!@#$%^&*(){}[]=<>/,."
};
//function that generates random password
function generatePassword(lower,upper,number,symbol,length){
	let randomPassword;
	let password=[];
	let lower1;
	let upper2;
	let number2;
	let symbol1;
	let generatedPassword='';
		// if nothing is selected, nothing will show up up in result box
		//if upper is false & number is false & lower is false and symbol is false 
		if(upper || lower || number || symbol) {
			

			//if else statements that controls what should be included based on criteria selected
			if(lower){
				//stores the values from property lower in a variable
				lower1 = Object.values(getRandom.lower);
				password=password.concat(lower1);	
			}

			if(upper){
				//stores the values from property upper in a variable
				upper2 = Object.values(getRandom.upper);
				password=password.concat(upper2);	
			}

			if(number){
				//stores the values from property number in a variable
				number2 = Object.values(getRandom.number);
				password=password.concat(number2);	
			}

			if(symbol){
				//stores the values from property symbol in a variable
				symbol1 = Object.values(getRandom.symbol);
				password=password.concat(symbol1);
			}

			//uses for loop to run the loop according to length selected and randomly choose values from password variable
			for(let i=0; i<length; i++){
				randomPassword= password[Math.floor(Math.random()*password.length)];
				generatedPassword+=randomPassword;
				
			}
			//console.log("value: ", generatedPassword);

		return generatedPassword;
	}else{
		return generatedPassword= '';
	}

}




//put all of the random output into one function that runs until length is checked
//send that information to show on result
//use onclick function to run everything when button is clicked