let data = [
  { title: 'Americano', size: 50, img: 'url', cost: 30}, 
  { title: 'Cappuccino', size: 200, img: 'url', cost: 40 }, 
  { title: 'Latte', size: 250, img: 'url', cost: 45 },
  { title: 'Flat White', size: 150, img: 'url', cost: 55 },
  { title: 'Frappuccino', size: 250, img: 'url', cost: 70 }
];

const goods = document.querySelector('.goods');
console.log(goods, 'goods');
var goodsName = document.querySelector('.goodsName');
console.log(goodsName, 'goodsName');
var goodsCost = document.querySelector('.goodsCost');
console.log(goodsCost, 'goodsCost');
var button = document.querySelector('.btn');
console.log(button, 'button');

function ViewController() {};

ViewController.prototype.render = mass => {
  let items = mass.map(item => '<div' + ' class="block"' + '>' + item.title + '<p>' +  item.cost + '</p>' + '</div>');
  goods.innerHTML = items.join(' ');
}

let goodsView = new ViewController();

console.log(goodsView, 'goodsView');

goodsView.render(data);