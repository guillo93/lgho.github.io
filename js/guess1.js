
           function playGuess1() {
             var answer =  parseInt(Math.random() * 100);
             var attemptsCount = 13;
             var person = prompt("Введите ваше имя!").toUpperCase();

              while (true) {
                        for(var attempt = 1; attempt <= attemptsCount; attempt++){

                                var userAnswer = prompt("Здравствуйте, " + person + "!  Введите число от 0 до 100.\n --> для выхода нажмите 'S'.\n  ↨♫ попытка № " +  attempt);
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
                                alert("Вы угадали! так держать!");
                              //  document.getElementById("result").innerHTML = "Вы угадали! Выиграл игрок " + playerNum;
                                  break;
                                }else {
                                  alert("Неправильно, введите заново число!");
                                //  document.getElementById("result").innerHTML = "Неправильно, введите заново число!";
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
                 document.getElementById("result").innerHTML = "<hr><strong>Вы не угадали :(     было загадано число: " + answer + "</strong><hr>";
              }else if(userAnswer == answer){
                 document.getElementById("result").innerHTML = "<h2><strong>Победа!! выиграл " + person + "</strong></h2><hr>";
              }else {
                   document.getElementById("result").innerHTML = "<h2>" + "Вы вышли из игры." + "  Нажимайте на кнопку, чтобы играть заново" + "</strong></h2><hr>";
              }

           }
