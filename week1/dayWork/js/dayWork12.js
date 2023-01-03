/*
  1. 請修正以下程式碼錯誤，並執行 console.log
    let saySomething = '小姐一個人嗎 :D'
    (function() {
      console.log(saySomething);
    })
  2. 請嘗試說明以下程式碼錯誤的原因 
*/

//  1.
let saySomething = '小姐一個人嗎 :D';
  (function () {
    console.log(saySomething);
  })()

//  2.
/*
  a. 使用立即函式需要在結尾的部分加入一組 () 才會正確執行。
  b. 由於題目的 JS 程式碼在運行時會被視為同一行，如下: 

    let saySomething = '小姐一個人嗎 :D'(function() {console.log(saySomething);})

    如果要避免此錯誤就需要使用分號將其隔開。  
*/