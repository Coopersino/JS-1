var imgArr = ['img_big/01_L.png', 'img_big/02_L.png', 'img_big/03-0_L.png'];
var bigImg = document.getElementsByClassName("gallery__item");
var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var inCardBtns = document.getElementsByClassName("inCard");
var goodsNames = document.getElementById("goodsNames");
var goodsQuantity = document.getElementById("goodsQuantity");
var goodsCost = document.getElementById("goodsCost");
var arrayCart = [];

var cost = 0;
var quantity = 0;
var goodsArr = [""];

leftBtn.addEventListener("click", changeImg);
rightBtn.addEventListener("click", changeImg);

for (var i = 0; i< inCardBtns.length; i++) {
  inCardBtns[i].addEventListener("click", addInCard);
}

function calculatePrice() {
  var price = 0;
  var qty = 0;
  arrayCart.forEach(function(item, i) {
    price += (item.price * 1);
    qty += 1;
  });
  goodsCost.textContent = "стоимость: "+price;
  goodsQuantity.textContent = "общее кол-во: "+qty;
}

function addInCard(event) {
  event.preventDefault();
  var price = event.currentTarget.previousSibling.previousElementSibling.attributes["data-price"].nodeValue;
  var goodName = event.currentTarget.parentElement.childNodes[1].attributes["0"].nodeValue;

  cost = cost + (price * 1);
  quantity = quantity + 1;

  var itemObj = {
    title: goodName,
    price: price,
  };

  arrayCart.push(itemObj);
    calculatePrice();

  for (var i = 0; i < goodsArr.length; i++) {
    goodsNames.innerText = goodsArr[i];
  }

  goodsQuantity.innerText = "общее кол-во: " + quantity;
  goodsCost.innerText = "стоимость: " + cost;
}

function changeImg(event) {
  var img = document.getElementById("big_img");
  var path = img.attributes[1].nodeValue;
  var direction = event.currentTarget.attributes[1].value;

  if (direction === "left" || direction === "right") {
    img.src = findImgPath(path, direction);
  }
  else {
    img.src = 'img_big/' + event.currentTarget.attributes[1].value + '_L.png';
  }

  img.onerror = function () {
    alert('картинка не найдена');
  }
}

function findImgPath(path, direction) {
  for (var i = 0; i < imgArr.length; i++) {
    if (imgArr[i] === path) {
      if (direction === "left") {
        if (i === 0) {
          return imgArr[imgArr.length - 1];
        }
        else {
          return imgArr[i - 1];
        }
      }
      if (direction === "right") {
        if (i === (imgArr.length - 1)) {
          return imgArr[0];
        }
        else {
          return imgArr[i + 1];
        }
      }
    }
  }
  return imgArr[0];
}

var galleryItems = document.getElementsByClassName("gallery__item--small");
var item = 0;

for (var i = 0; i < galleryItems.length; i++) {
  item = i + 1;
  galleryItems[i].style.backgroundImage = 'url(img_small/0' + item + '_s.png)';
  galleryItems[i].addEventListener("click", changeImg);
}
