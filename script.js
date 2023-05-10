function generateNumber() {
    const min = 1; // Valor mínimo
    const max = 100; // Valor máximo

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('number').textContent = randomNumber;
  }