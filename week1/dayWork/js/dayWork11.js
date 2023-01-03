/*
  (1)
  1-1. 請問以下的輸出結果為何？
    console.log(obj.amounts); // 123
    console.log(obj === objNew); // true

  1-2. 如果希望 console.log(obj === objNew); 的結果為 false，則可以如何修改？
    淺拷貝:
      可以將 let objNew = obj; 修改為 
      a. let objNew = {...obj}; 
      b. let objNew = Object.assign({}, obj); 

    深拷貝:
      let objNew = JSON.parse(JSON.stringify(obj)); 
*/

//  1-1
// let obj = {
//   title: '錢錢',
//   amounts: 66666,
// }
// let objNew = obj;
// objNew.amounts = 123;
// console.log(obj.amounts); // 123
// console.log(obj === objNew); // true

// 1-2
let obj = {
  title: '錢錢',
  amounts: 66666,
}
// let objNew = {...obj};  //  淺拷貝一
// let objNew = Object.assign({}, obj);  //  淺拷貝二
let objNew = JSON.parse(JSON.stringify(obj));   //  深拷貝
objNew.amounts = 123;
console.log(obj.amounts); //  66666
console.log(obj === objNew); //   false

/*
  (2)（陷阱題！，需要用深拷貝處理）
  2-1. 請問以下的輸出結果為何？
    console.log(obj2 === objNew2); // false 
    console.log(obj2.innerObj.amounts); // 2000

  2-2. 如果希望調整 objNew.innerObj 時不會影響到 obj，則可以如何修改？
*/

//  2-1
// let obj2 = {
//   title: '錢錢',
//   amounts: 66666,
//   innerObj: {
//     title: '私房錢',
//     amounts: 1000
//   }
// }
// let objNew2 = {...obj2};
// console.log(obj2 === objNew2); //   false
// objNew2.innerObj.amounts = 2000;
// console.log(obj2.innerObj.amounts); //   2000

//  2-2
let obj2 = {
  title: '錢錢',
  amounts: 66666,
  innerObj: {
    title: '私房錢',
    amounts: 1000
  }
}
let objNew2 = JSON.parse(JSON.stringify(obj2));
console.log(obj2 === objNew2); //   false
objNew2.innerObj.amounts = 2000;
console.log(obj2.innerObj.amounts); //   1000