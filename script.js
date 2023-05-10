function generateNumber() {
    var min = 1; // Valor mínimo
    var max = 100; // Valor máximo

    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('number').textContent = randomNumber;
  }