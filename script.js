const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');

// Function to remove uppercase letters, special characters, and spaces
function normalizeString(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Function to get the normalized, reversed string
function getReversedString(str) {
  return normalizeString(str).split('').reverse().join('');
}

// Function to check if the input is a palindrome
function checkPalindrome() {
  const reversedInput = getReversedString(textInput.value);
  const normalizedInput = normalizeString(textInput.value);

  if (normalizedInput === reversedInput) {
    result.textContent = `${textInput.value} is a palindrome`;
  } else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }
}

// Check for empty input when the button is clicked
checkBtn.addEventListener('click', function () {
  if (textInput.value.trim() === '') {
    alert('Please input a value');
  } else {
    checkPalindrome();
  }
});
