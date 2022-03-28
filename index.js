const generateRandomNumber = () => {
    return Math.round(Math.random() * 100); 
  };
  
  const isEven = (num) => {
    return num % 2 === 0; 
  };
  
  const startRound = () => {
    const number = generateRandomNumber(); 
    const answer = prompt(`Является ли число ${number} четным? Ответьте "да" или "нет".`); 
    const correctAnswer = isEven(number) ? "да" : "нет";
    if (answer === correctAnswer) { 
      alert("Ответ правильный.");
      return true;
    } else {
      alert(`Ответ неправильный. Правильный ответ: ${correctAnswer}.`);
      return false;
    }
  }
  
  const startGame = () => { 
    for (let i = 0; i < 3; i += 1) { 
      const isCorrect = startRound();
      if (!isCorrect) { 
        alert("Игра окончена!");
        return;
      }
    }
    alert("Поздравляем с победой!");
  }

  const startRound1 = () => {
    const firsNumber = generateRandomNumber();
    const secondNumber = generateRandomNumber();
    const sum = firsNumber + secondNumber;
    const isCorrect1 = sum;
    const answer1 = prompt (`Найдите сумму ${firstNumber} и ${secondNumber}`);
    if (answer1 = isCorrect1) {
      alert("Ответ верный!")
      return true;
    } else {
      alert (`Ответ неверный, правильный ответ: ${isCorrect1}`)
      return false;
    }
  }

  const sumGame1 = () => {
    for (let i = 0; i < 3; i += 1) {
      const isCorrect1 = startRound1();
      if (!isCorrect1) {
        alert("Игра окончена!")
        return;
      }
    }
    alert("Поздравляем с победой!");
  }

const сhooseGame = () => {
  const game1 = startGame()
  const game2 = sumGame1()
  const choose = prompt (`Выберите игру: ${game1} или ${game2}`);
  if (choose === game1) {
    return startGame();
  } else {
    return game2;
  }
}