let obj = {
  a: 'a',
  1: 'b',
  '這是中文字': 'c',
  'b': 'd',
  '--some data': 'e'
}

let objKeys = Object.keys(obj);
//  補充: 可以用 sort() 針對陣列內容進行排序
let objValues = Object.values(obj).sort();

console.log(objKeys);
console.log(objValues);

objKeys.forEach(item => {
  console.log(item);
});

for (let i = 0; i < objValues.length; i++) {
  console.log(objValues[i]);
}