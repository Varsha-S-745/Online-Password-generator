function showOptions() {
      let length = document.getElementById('length').value;
      if (length < 8 || length > 50) {
        alert("Please enter a valid password length between 8 and 50.");
        return;
      }
      document.getElementById('lengthSection').classList.add('hidden');
      document.getElementById('options').classList.remove('hidden');
    }

    function generatePassword() {
      let length = document.getElementById('length').value;
      let includeUpper = document.getElementById('uppercase').checked;
      let includeLower = document.getElementById('lowercase').checked;
      let includeNumbers = document.getElementById('numbers').checked;
      let includeSymbols = document.getElementById('symbols').checked;

      let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
      let numbers = "0123456789";
      let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

      let validChars = "";
      if (includeUpper) validChars += upperCaseLetters;
      if (includeLower) validChars += lowerCaseLetters;
      if (includeNumbers) validChars += numbers;
      if (includeSymbols) validChars += symbols;
     document.getElementById('options').classList.add('hidden');
      let passwordDisplay = document.getElementById('password');

      if (validChars === "") {
        alert("Please select atleast one character type")
        return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }
 
      passwordDisplay.textContent = "PASSWORD: " + password;
      passwordDisplay.classList.remove('hidden');
    }