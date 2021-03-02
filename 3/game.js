let game = {
    
    run(){
        let score = 0;
        let outputStr = "";
        for(let i = 0; i < questionsAndAnswers.questions.length; i++){
            let userAnswer = prompt(questionsAndAnswers.questions[i]);
            if (userAnswer == questionsAndAnswers.answers[i]){
                score++;
            }
            if (userAnswer === null){
                break;
            }
        }  
            switch(score){
                case 1:
                    outputStr = "вопрос";
                    break;
                case 2:
                case 3:
                case 4:    
                    outputStr = "вопроса";
                    break;
                case 0:
                case 5:    
                    outputStr = "вопросов";
                    break;
            }
            if (score == 5) {
                alert("Поздравляем! Вы выиграли 1 000 000!");
            }
            console.log(`Игра окончена. Вы верно ответили на ${score} ${outputStr}!`);
            game.playAgain();

    },
    
    init(){
        console.log("Добро пожаловать на игру 'Кто хочет стать миллионером?'");
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    },
    
    playAgain(){
        console.log("Если хотите еще поиграть, наберите game.run() и нажмите Enter.");
    }
};
game.init();
