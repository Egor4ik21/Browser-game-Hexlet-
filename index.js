const generateRandomNumber = () => {
  return Math.round(Math.random() * 100); 
};

const isEven = (num) => {
  return num % 2 === 0; 
};

const startRound1 = () => {
  const number = generateRandomNumber(); 
  const answer = prompt(`Является ли число ${number} четным? Ответьте "да" или "нет".`); 
  const correctAnswer = isEven(number) ? "да" : "нет";
  if (answer.toUpperCase() === correctAnswer.toUpperCase()) { 
    alert("Ответ правильный.");
    return true;
  } else {
    alert(`Ответ неправильный. Правильный ответ: ${correctAnswer}.`);
    return false;
  }
}

const startGame1 = () => { 
  for (let i = 0; i < 3; i += 1) { 
    const isCorrect = startRound1();
    if (!isCorrect) { 
      alert("Игра окончена!");
      return;
    }
  }
  alert("Поздравляем с победой!");
}

const startRound2 = () => {
  const number1 = generateRandomNumber(); 
  const number2 = generateRandomNumber();
  const sum = number1 + number2
  const answer = prompt(`Назовите сумму чисел ${number1} и ${number2}?`); 
  if (answer == sum) { 
    alert("Ответ правильный.");
    return true;
  } else {
    alert(`Ответ неправильный. Правильный ответ: ${sum}.`);
    return false;
  }
}

const startGame2 = () => { 
  for (let i = 0; i < 3; i += 1) { 
    const isCorrect = startRound2();
    if (!isCorrect) { 
      alert("Игра окончена!");
      return;
    }
  }
  alert("Поздравляем с победой!");
}


const selectionGame = () =>{
const game = prompt ("Выберите игру:\n1. Четное - нечетное\n2. Сумма двух чисел", '1 или 2') 
if (game == 1 || game == 'Четное - нечетное'){
  return startGame1()
}
else if (game == 2 || game == 'Сумма двух чисел'){
  return startGame2()
}
else{
  alert("Нет такой игры")
}
}
