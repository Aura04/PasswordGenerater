// Array of special charaters to be included in password
var specialCharaters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

//Array of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

//Array of uppercase character to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'F',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password option
function getPasswordOptions() {
    //Variable to store length of password from user input
    var length = parseInt( 
        prompt('How many characters would you like your password to contain?')
    );

    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if(isNaN(length) === true) {
        alert('Password length must be at least 8 characters');
        return;
    }

    // Conditional statement to check if check if password length is at keast 8 characters long. Prompts emd of this evaluates false
    if(length < 8) {
        alert('Password length must be at least 8 characters');
        return;
    }

    // Condtionial statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if(length > 128){
        alert ('Password length must less than 129 characters');
        return;
    }

    //Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
    );

    //Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
        'Click OK to confirm including numeric character.'
    );

    //Variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCaseCharacters = confirm(
        'Click OK to confirm including lowercase characters.'
    );

    // Varaiable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
        'Click OK to confirm including uppercase characters.'
    );

    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if(
        hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCaseCharacters === false &&
        hasUpperCasedCharacters === false
    ) {
        alert('Must select at least one character type');
        return
    }

    // Object to store user input 
    var PasswordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCaseCharacters: hasLowerCaseCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters
    };

    return PasswordOptions;
    }

    //Function for getting a random element from an array
    function getRandom(arr) {
        var randIndex = Math.floor(Math.random() * arr.length);
        var randElement = arr[randIndex];

        return randElement;
    }

    //Function to generate password with user input
     function generatePassword(){
         var options = getPasswordOptions();
             //Variable to store password with user input
             var result = [];

             //Array to store types of characters to include in password
             var possibleCharaters = [];

             // Array to contain one of each type of chosen character to ensure each will be used
             var guaranteedCharaters = [];

             //Conditional statement that adds array of special characters into array of possible characters based on user input 
             //Push new random special character to guaranteedCharacters
             if(options.hasSpecialCharacters) {
                 possibleCharaters = possibleCharaters.concat(specialCharaters);
                 guaranteedCharaters.push(getRandom(numericCharacters));
             }

             //Conditional statement that adds array of numeric characters into array of possoble characters based on user input
             //Push new random special character to guaranteedCharacters
             if (options.hasNumericCharacters) {
                 possibleCharaters = possibleCharaters.concat(numericCharacters);
                 guaranteedCharaters.push(getRandom(numericCharacters));
             }

             //Conditional statement that adds array of lowercase characters into array of possible characters based on user input 
             // Push new random lower-cased characters to guaranteedCharaters
             if (options.hasLowerCaseCharacters){
                 possibleCharaters = possibleCharaters.concat(lowerCasedCharacters);
                 guaranteedCharaters.push(getRandom(lowerCasedCharacters));
             }

             //Conditional statement that adds array of uppercase characters into array of possoble characters based on user input
             //Push new random upper-cased character to guaranteedCharacters
             if(options.hasUpperCasedCharacters){
                 possibleCharaters = possibleCharaters.concat(upperCasedCharacters);
                 guaranteedCharaters.push(getRandom(upperCasedCharacters));
             }

             //For loop to iterate over the password length from the options object, selecting random indices from the array of possible and concatenating those characters into the result variable
             for (var i = 0; i < options.length; i++) {
                 var possibleCharaters = getRandom(possibleCharaters);

                 result.push(possibleCharaters);
             }

             // Mix in at least one of each guaranteed character in the result
             for(var i = 0; i < guaranteedCharaters.length; i++) {
                 result[i] = guaranteedCharaters[i];
             }

             //Transform the result into a string and pass into writePassword
             return result.join('');
            }

            //Get references to the #generate element
            var generateBtn = document.querySelector('#generate');

            //Write password to the #password input
            function writePassword() {
                var password = generatePassword();
                var passwordText = document.querySelector('#password');

                passwordText.value = password;
            }

            // Add event listener to generate button
            generateBtn.addEventListener('click', writePassword);