/*
  * 取得範例中的 input DOM 元素，並且取得其中的值 （DOM 結構上取得的都是字串）
  * 將值定義成變數命名為 value
  * 使以下判斷式驗證執行 if 的結果 (答錯魯一輩子喔 :D) <!-- 太殘酷 --> 
*/

let value = document.querySelector('#app').value;
value = parseInt(value);

if (value === 520) {
  console.log('暗戀對象喜歡我')
} else {
  console.log('暗戀對象只想和我當普通朋友')
}