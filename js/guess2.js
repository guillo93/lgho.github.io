
       function playGuess2() {
       var answer =  parseInt(Math.random() * 100);
       var playerNum = 1;
       var attemptsCount = 15;

              while (true) {
                        for(var attempt = 1; attempt <= attemptsCount; attempt++){
                                var userAnswer = prompt("Игрок " + playerNum + ": Введите число от 0 до 100, для выхода нажмите s.\n попытка № " +  attempt);
                                if (userAnswer == "s") {
                                   break;
                                }
                                userAnswer = parseInt(userAnswer);
                                if (userAnswer > answer) {
                                  alert("Ваш ответ слышком большой");
                                  //document.getElementById("result").innerHTML = "Ваш ответ слышком большой";

                                }else if (userAnswer < answer) {
                                 alert("Ваш ответ слышком маленкий");
                                 //document.getElementById("result").innerHTML = "Ваш ответ слышком маленкий";

                                }else if (userAnswer == answer) {
                                alert("Вы угадали! Выиграл игрок " + playerNum);
                                //document.getElementById("result").innerHTML = "Вы угадали! Выиграл игрок " + playerNum;
                                  break;
                                }else {
                                  alert("Неправильно, введите заново число!");
                                  //document.getElementById("result").innerHTML = "Неправильно, введите заново число!";
                                }

                             if (playerNum == 1) {
                                playerNum = 2;

                             } else {
                               playerNum = 1;

                             }

                             if(attempt > attemptsCount){
                              break;
                            }
                         }

                  if (userAnswer == "s" || userAnswer == answer) {
                        break;
                  }
                  if(attempt > attemptsCount){
                      break;
                  }
              }

            if (attempt > attemptsCount) {
               //alert("К сожалению никто не угадал. было загадано число: " + answer);
               document.getElementById("result").innerHTML = "<hr><strong>К сожалению никто не угадал. было загадано число: " + answer + "</strong><hr>";
            }else if(userAnswer == answer){
               document.getElementById("result").innerHTML = "<h2><strong>Победа!! выиграл игрок " + "№ " + playerNum + "</strong></h2><hr>";
            }else {
                 document.getElementById("result").innerHTML = "<h2>" + "Вы вышли из игры." + "  Нажимайте на кнопку, чтобы играть заново" + "</strong></h2><hr>";
            }

        }
