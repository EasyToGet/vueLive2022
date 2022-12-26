let town = {
  name: '真心鎮',
  resident: []
}
let townData = {};
let Ming = { name: '小明', age: 16 };
let Rick = { name: '瑞克', age: 21 };

/* 程式碼修改處（可以更改 function 規則） */

// 解法一
// function addResident(obj, res1, res2) {
//   townData = { ...obj };
//   townData.resident.push(res1);
//   townData.resident.push(res2);
//   console.log(townData);
// }

// 解法二
// function addResident(obj, res1, res2) {
//   townData = Object.assign({}, obj)
//   townData.resident.push(res1, res2);
//   console.log(townData);
// }

// 解法三
function addResident(obj, ...res) {
  townData = Object.assign({}, obj)
  townData.resident.push(...res);
  console.log(townData);
}

/* 程式碼修改處 */

addResident(town, Ming, Rick);
console.log(townData === town); // 結果須為 false