let name = '小明';
const age = 16;
let person = {
  name: '小明',
}
const wallet = {
  money: 1000
}
const dessert = ['cake', 'ice-cream'];

/* 請問以下程式碼哪些會報錯？ */
name = '小美';
age = 17;
person.name = '大明';
wallet.money = 1100;
wallet = {};
dessert.push('fruit');
dessert = ['chocolate'];

/*
解答:
age = 17;
wallet = {};
dessert = ['chocolate'];
*/