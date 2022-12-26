// 問題一（判斷何者為表達式）：
if (2 === 2) {
  console.log("Ans 是表達式");
}
/*
  0. Ans
  1. 2 === 2    // true
  2. "string"   // true
  3. var a      // false
  4. if(true){let a = 2;}    // false
  5. [25, 30] // 純陣列   // true
  6. {name: "hexSchool"}  // 純物件   // true
*/

// 問題二（表達式的應用）:
function hexIsGood() {
  return true;
}
// EX1: 可以帶入三元運算子
console.log(hexIsGood() ? '很棒' : '不棒');

// Ex2: 可以代入樣板字面值
let str = `六角學院很讚: ${ hexIsGood() }`;
console.log(str);