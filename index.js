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