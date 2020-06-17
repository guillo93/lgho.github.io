
function calculate() {


var myWeight= document.getElementById("answer1").value;
var planet = document.getElementById("answer2").value;


var g_earth = 9.8;
var g_moon = 1.62;
var g_mars = 3.7;
var g_jupiter = 24.8;
var g_saturn = 10.44;
var g_uranus = 8.7;
var g_neptune = 11.15;
var g_venus = 8.87;
var g_mercury = 3.7;


  myWeight = parseInt(myWeight);
  planet = planet.toLowerCase();

  var name;
  var weight_final1;


  //mars
   if(planet == "марс" )
   {
     weight_final1 = myWeight * g_mars / g_earth;
     name = "<strong>на Марсе</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";

   }


   else if(planet == "юпитер")
   {
     weight_final1 = myWeight * g_jupiter / g_earth;
     name = "<strong>на Юпитере</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";
   }

   //moon
   else if(planet == "луна")
   {
     weight_final1 = myWeight * g_moon / g_earth;
     name = " <strong>на Луне</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";
   }
   //saturn
   else if(planet == "сатурн")
   {
     weight_final1 = myWeight * g_saturn / g_earth;
     name = "<strong>в Сатурне</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";
   }
   //uranus
   else if(planet == "уран")
   {
     weight_final1 = myWeight * g_uranus / g_earth;
     name = "<strong>в Уране</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";
   }
   //neptune
   else if(planet == "нептун")
   {
     weight_final1 = myWeight * g_neptune / g_earth;
     name = "<strong>в Нептун</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";
   }
   //Venus
   else if(planet == "венера")
   {
     weight_final1 = myWeight * g_venus / g_earth;
     name = "<strong>в Венере</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";
   }
   //mercury
   else if(planet == "меркурий")
   {
     weight_final1 = myWeight * g_mercury / g_earth;
     name = "<strong>в Меркурии</strong>";
     weight_final1 = weight_final1.toFixed(2);
     resultCalculate.innerHTML = "Ваш вес "  + name + " состовляет <strong>" + weight_final1 + " Кг</strong>";
   }


   else {
          do{
              planet = alert("неверно, введите еще раз нужную информацию в поле");
              break;
            }while(isNaN(planet) || isNaN(myWeight));
        }
}
var resultCalculate = document.getElementById("result");
