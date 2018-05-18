var btnCelsiusToFahrenheit = document.getElementById('сelsiusToFahrenheit');
btnCelsiusToFahrenheit.addEventListener('click', сelsiusToFahrenheit);

var btnAdminName = document.getElementById('adminName');
btnAdminName.addEventListener('click', adminName);

var btnThreeParameters = document.getElementById('threeParameters');
btnThreeParameters.addEventListener('click', getArgsAndOperation);

var btnPow = document.getElementById('pow');
btnPow.addEventListener('click', getNumberAndPow);

var btnGetNumericalSeries = document.getElementById('getNumericalSeries');
btnGetNumericalSeries.addEventListener('click', getValue);

var mathOperation = document.getElementById('mathOperation');
mathOperation.addEventListener('click', getMathOperation);

function сelsiusToFahrenheit() {
  var tCelsius = prompt('Введите температуру в градусах цельсия.');

  if (tCelsius === null) {
    tFahrenheit = 'Температура не введена!';
  }
  else {
    tFahrenheit = (9 / 5) * tCelsius + 32;
  }

  alert(tFahrenheit);
}

function adminName() {
  var name = prompt('Введите имя админа.');

  if (name === null) {
    name = 'Имя не введено!';
  }

  var admin = name;

  alert(admin);
}

function getMathOperation() {

  // var numberX = prompt('Введите число "X".');
  // var numberY = prompt('Введите число "Y".');
  // var value;

  // if (isNaN(+numberX) || isNaN(+numberY)) {
  //   value = "Что-то пошло не так...";
  // }
  // else {
  //   numberX *= 1;
  //   numberY *= 1;

  //   if (numberX >= 0 && numberY >= 0) {
  //     value = numberX - numberY;
  //     value = "разность чисел: " + value;
  //   }
  //   else if (numberX < 0 && numberY < 0) {
  //     value = numberX * numberY;
  //     value = "произведение чисел: " + value;
  //   }
  //   else {
  //     value = numberX + numberY;
  //     value = "сумма чисел: " + value;
  //   }
  // }
  var a = 2;
var x = 1 + (a *= 2);

  alert(x);
}

function getValue() {
  var numericalSeries = getXnumbers(prompt('Введите число "A" в промежутке [0..15].'));

  alert(numericalSeries);
}

function getXnumbers(a) {
  a = a * 1;
  var numericalSeries = [];

  if (a >= 0 && a <= 15) {
    var caseValue = 1;
  }

  switch (caseValue) {

    case (1):
      while (a <= 15) {
        numericalSeries.push(a++);
      };
      break;

    default:
      numericalSeries = 'Введено не число';
  }

  return numericalSeries;
}

function division(x, y) {
  return value = (x * 1) / (y * 1);
}

function mult(x, y) {
  return value = (x * 1) * (y * 1);
}

function summ(x, y) {
  return value = x * 1 + y * 1;
}

function subtract(x, y) {
  return value = x * 1 - y * 1;
}

function getArgsAndOperation() {
  var numberX = prompt('Введите число "X".');
  var numberY = prompt('Введите число "Y".');
  var operation = prompt('Введите название математической операции.');

  alert(mathOperation(numberX, numberY, operation));
}

function mathOperation(numberX, numberY, operation) {

  var value;

  switch (operation) {
    case "деление":
      value = division(numberX, numberY);
      break;
    case "умножение":
      value = mult(numberX, numberY);
      break;
    case "сложение":
      value = summ(numberX, numberY);
      break;
    case "вычитание":
      value = subtract(numberX, numberY);
      break;
    default:
      value = 'Введено неверное название математической операции';
  }

  return value;
}

function getNumberAndPow() {
  var number = prompt('Введите число.');
  var pow = prompt('Введите степень.');

  alert(getPow(number, pow));
}

function getPow(number, pow) {
  if (pow != 1) {
    return number * getPow(number, pow - 1);
  } else {
    return number;
  }
}