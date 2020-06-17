function playPuzzle() {
  //объект ответов
  var res = {l: "по лестнице", y:"язык жестов" , c:"секунда", p: "петух", s:"спать по ночам", z:"золушка" };

// объект  вопросов
  var userAnswer = {a: "угадай следующюу загадку:\n По чему ходят часто, а ездят редко? ",
                    b:"угадай следующюу загадку:\n На каком языке говорят молча?  ",
                    c:"угадай следующюу загадку:\n Больше часа, меньше минуты. ",
                    d:"угадай следующюу загадку:\n Не ездок, а со шпорами, Не будильник, а всех будит. ",
                    e:"угадай следующюу загадку:\n Как человеку не спать 8 дней?  ",
                    f:"угадай следующюу загадку:\n Она красива и мила, А имя ей от слова --> Зола <--. " };


  //массив картинок
  var imagenes = [];
  imagenes[0] = "img/lestnisa.jpg";
  imagenes[1] = "img/yazik.jpg";
  imagenes[2] = "img/second.jpg";
  imagenes[3] = "img/gallo.png";
  imagenes[4] = "img/sleeping.jpg";
  imagenes[5] = "img/princesa.jpg";

  var s = 0;

           function loadPuzzle(question, answer, photo)
           {
                   var user = prompt(question);
                   user = user.toLowerCase();
                   var imagenes = new Image();

                   if(user == answer)
                    {
                        document.write("<img src=" + photo + ">")

                        document.write("<br>"+ question + "<br>ответ: <br>"+ answer + "<br>"  +  " <br><strong>Всё верно</strong>!<br><hr>");
                      
                        s++;
                      }
                     else
                     {
                       alert("Вопрос: " + question + "\n не правильно :(");
                     }


           }



           loadPuzzle(userAnswer.a, res.l, imagenes[0]);
           loadPuzzle(userAnswer.b, res.y, imagenes[1]);
           loadPuzzle(userAnswer.c, res.c, imagenes[2]);
           loadPuzzle(userAnswer.d, res.p, imagenes[3]);
           loadPuzzle(userAnswer.e, res.s, imagenes[4]);
           loadPuzzle(userAnswer.f, res.z, imagenes[5]);


           alert("количество правильных ответов: " + s);


}
