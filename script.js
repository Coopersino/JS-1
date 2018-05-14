var btnCelsiusToFahrenheit = document.getElementById('сelsiusToFahrenheit');
btnCelsiusToFahrenheit.addEventListener('click', сelsiusToFahrenheit);

var btnAdminName = document.getElementById('adminName');
btnAdminName.addEventListener('click', adminName);

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
