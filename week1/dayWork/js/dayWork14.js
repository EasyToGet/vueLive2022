// 題目一
// function sum(a, b) {
//   let c = a + b;
//   return c;
// }
// console.log(sum(5, 6));

// 解答一
const sum = (a, b) => {
  let c = a + b;
  return c;
};
console.log(sum(5, 6));

// 題目二
// function square(num) {
//   return num * num;
// }
// console.log(square(5));

// 解答二
const square = num => num * num;
console.log(square(5));

// 題目三
// setTimeout(function () {
//   console.log('延遲 1 秒');
// }, 1000);

// 解答三
setTimeout(() => console.log('延遲 1 秒'), 1000);

// 題目四
// let arr = [1, 2, 3];
// let arrNew = arr.map(function (item, i) {
//   return item * i;
// });
// console.log(arrNew);

// 解答四
let arr = [1, 2, 3];
let arrNew = arr.map((item, i) => item * i);
console.log(arrNew);

// 題目五
// let obj = {
//   fn: function fn2(a) {
//     return a * a;
//   }
// }
// console.log(obj.fn(10));

// 解答五
let obj = {
  fn: a => a * a
}
console.log(obj.fn(10));