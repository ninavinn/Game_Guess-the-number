// ჩაფიქრებული რიცხვი 1-დან 100-მდე
var secretNumber = Math.floor(Math.random() * 100) + 1;

// შეყვანის შემოწმების ფუნქცია
function checkGuess() {
  // ვიღებთ შეყვანილ რიცხვს
  var userGuess = parseInt(document.getElementById("guess").value);
  var message = document.getElementById("message");

  // შეყვანილი ნომრის შემოწმება
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "შეიყვანეთ რიცხვი 1 - 100.";
  } else if (userGuess < secretNumber) {
    message.textContent = "შეიყვანეთ უფრო დიდი რიცხვი.";
  } else if (userGuess > secretNumber) {
    message.textContent = "შეიყვანეთ უფრო პატარა რიცხვი.";
  } else {
    message.textContent = "გილოცავთ! თქვენ გამოიცანით რიცხვი!";
  }
}
