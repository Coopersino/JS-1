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

var btnSimpleNumbers = document.getElementById('simpleNumbers');
btnSimpleNumbers.addEventListener('click', getSimpleNumbers);

var btnNumericalSeriesFrom1To10 = document.getElementById('numericalSeriesFrom1To10');
btnNumericalSeriesFrom1To10.addEventListener('click', getNumericalSeriesFrom1To10);

var btnForNoBody = document.getElementById('forNoBody');
btnForNoBody.addEventListener('click', getNumericalSeriesFrom1To9);

var btnPyramid = document.getElementById('pyramid');
btnPyramid.addEventListener('click', getPyramid);

var btnNumberToObject = document.getElementById('numberToObject');
btnNumberToObject.addEventListener('click', numberToObject);

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

  var numberX = prompt('Введите число "X".');
  var numberY = prompt('Введите число "Y".');
  var value;

  if (isNaN(+numberX) || isNaN(+numberY)) {
    value = "Что-то пошло не так...";
  }
  else {
    numberX *= 1;
    numberY *= 1;

    if (numberX >= 0 && numberY >= 0) {
      value = numberX - numberY;
      value = "разность чисел: " + value;
    }
    else if (numberX < 0 && numberY < 0) {
      value = numberX * numberY;
      value = "произведение чисел: " + value;
    }
    else {
      value = numberX + numberY;
      value = "сумма чисел: " + value;
    }
  }

  alert(value);
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

  var value = doMathOperation(numberX, numberY, operation);

  alert(value);
}

function doMathOperation(numberX, numberY, operation) {

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

function getSimpleNumbers() {
  var simpleNumbersArr = [2];
  var number = 2;

  while (number <= 100) {
    var isSimple = true;
    var i = 0;

    while (i < simpleNumbersArr.length) {
      if (number % simpleNumbersArr[i] == 0) {
        isSimple = false;
      }
      i++;
    }

    if (isSimple == true) {
      simpleNumbersArr.push(number);
    }
    
    number++;
  }

  alert(simpleNumbersArr);
}

function getNumericalSeriesFrom1To10() {
  var i = 0;
  var number;
  var numericalSeries = [];

  do {
    if (i == 0) {
      number = " " + i + " - это ноль";
    }
    else if (i % 2 == 0) {
      number = " " + i + " - чётное число";
    }
    else {
      number = " " + i + " - нёчетное число";
    }
    numericalSeries.push(number);
    i++;
  } while (i <= 10);
  alert(numericalSeries);
}

function getNumericalSeriesFrom1To9() {
  for (var i = 0; i < 10; alert(i++));
}

function getPyramid() {
  var pin = "";

  for (var i = 0; i < 20; i++) {
    pin += "x";
    console.log(pin);
  }
}

function numberToObject() {

  var number = prompt("Введите трехзначное число, от 0 до 999");
  var numberObject = {};
  
  if (number.length > 3 || number.length < 1){
    console.log("Введено не корректное число!");
  }
  else {
    numberObject.units = number[2];
    numberObject.decades = number[1];
    numberObject.hundreds = number[0];
  }

  console.log(numberObject);
}