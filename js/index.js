// Получаем элемент с id "myText"
var textElement = document.getElementById("testy");

// Добавляем обработчик события "click"
textElement.addEventListener("click", function() {
  // Генерируем случайный цвет
  var randomColor = getRandomColor();

  // Изменяем цвет текста на сгенерированный
  textElement.style.color = randomColor;
});

// Функция для генерации случайного цвета
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  
  // Генерируем шестизначный код цвета
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}
