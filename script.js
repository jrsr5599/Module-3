// Assignment code here

var enter;
var confirmedNumber;
var confirmedCharacter;
var confirmedUppercase;
var confirmedLowercase;

characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var Uppercase = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(Uppercase);

var get = document.querySelector("#generate");

// Start the function to generate the password
function generatePassword() {
    // Asking the user for input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        
        // User answewrs the first question
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // User is prompted to answer more questions
        confirmedNumber = confirm("Will this contain numbers?");
        confirmedCharacter = confirm("Will this contain special characters?");
        confirmedUppercase = confirm("Will this contain Uppercase letters?");
        confirmedLowercase = confirm("Will this contain Lowercase letters?");
    };

    
    if (!confirmedCharacter && !confirmedNumber && !confirmedUppercase && !confirmedLowercase) {
        choices = alert("You must choose a criteria!");

    }
    
    else if (confirmedCharacter && confirmedNumber && confirmedUppercase && confirmedLowercase) {

        choices = characters.concat(numbers, alpha, alpha2);
    }
    
    else if (confirmedCharacter && confirmedNumber && confirmedUppercase) {
        choices = characters.concat(numbers, alpha2);
    }
    else if (confirmedCharacter && confirmedNumber && confirmedLowercase) {
        choices = characters.concat(numbers, alpha);
    }
    else if (confirmedCharacter && confirmedLowercase && confirmedUppercase) {
        choices = characters.concat(alpha, alpha2);
    }
    else if (confirmedNumber && confirmedLowercase && confirmedUppercase) {
        choices = numbers.concat(alpha, alpha2);
    }
    
    else if (confirmedCharacter && confirmedNumber) {
        choices = characters.concat(numbers);

    } else if (confirmedCharacter && confirmedLowercase) {
        choices = characters.concat(alpha);

    } else if (confirmedCharacter && confirmedUppercase) {
        choices = characters.concat(alpha2);
    }
    else if (confirmedLowercase && confirmedNumber) {
        choices = alpha.concat(numbers);

    } else if (confirmedLowercase && confirmedUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmedNumber && confirmedUppercase) {
        choices = numbers.concat(alpha2);
    }
    
    else if (confirmedCharacter) {
        choices = characters;
    }
    else if (confirmedNumber) {
        choices = numbers;
    }
    else if (confirmedLowercase) {
        choices = alpha;
    }
    
    else if (confirmedUppercase) {
        choices = space.concat(alpha2);
    };

    
    var password = [];

    // Computer uses the variables to pick a password
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
