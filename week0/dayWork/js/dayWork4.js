let crowdAge = [
  {
    name: 'Rick',
    age: 17
  },
  {
    name: 'Jane',
    age: 25
  },
  {
    name: 'Jordan',
    age: 19
  },
  {
    name: 'Jack',
    age: 7
  },
  {
    name: 'Reol',
    age: 27
  }
];

// callback 函式
function ageFilterCB(cb, arr) {
  return cb(arr);
}

//  解法一
// function ageFilter(arr) {
//   let target = arr.filter(item => item.age > 18);
//   return target;
// }

//  解法二
function ageFilter(arr) {
  let target = [];
  arr.forEach(item => {
    if(item.age > 18) {
      target.push(item)
    }
  });
  return target;
}

let filterResult = [];
filterResult = ageFilterCB(ageFilter, crowdAge);
console.log(filterResult); /* 為陣列，內容包含屬性 age > 18 的 crowdAge 元素 */