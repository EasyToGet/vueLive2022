/* (1) 依據提示將以下程式碼用解構方式達成目標 */
// 題目一: 請使用解構，取出 name 及 age 的變數
const person = {
  name: '小明',
  age: 16
}
const { name, age } = person; // 答案
console.log(name, age); // 結果為 "小明", 16

// 題目二: 請問以下 console.log 的輸出結果為何?
let [a, b, c = 4, d = 'New', e] = [1, 2, 3];
console.log(a, b, c, d, e);   // 1 2 3 New undefined

/* (2)依據提示將以下程式碼用展開方式達成目標 */
// 題目一: 請使用展開將 arr 的內容併入 arrNew
let arr = [1, 2, 3];
let arrNew = [...arr, 4, 5, 6]; // [1, 2, 3, 4, 5, 6] (答案 ...arr)
console.log(arrNew);

// 題目二: 請使用展開將 restInfo 的內容併入 MingInfo
let restInfo = {
  sex: '男生',
  height: 178
}
let MingInfo = {
  name: '小明',
  age: 20,
  ...restInfo,  // 答案
}
console.log(MingInfo);

/* (3) 請修改以下程式碼，透過 參數預設值、其餘參數 的方式完成此範例。 */
function getMoney(money = 500) {  // 答案 money = 500
  return money;
}
let myMoney = getMoney();

// fruits 是一個陣列
function buySomething(...fruits) {  // 答案 ...fruits
  if (fruits.length > 2) {
    myMoney -= 200;
  } else {
    myMoney -= 100;
  }
  console.log(`小明剩下 ${myMoney} 元`);
}
buySomething('lemon', 'watermelon', 'kiwi'); // 結果為 "小明剩下 300 元"
buySomething('lemon', 'watermelon'); // 結果為 "小明剩下 200 元"