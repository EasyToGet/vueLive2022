const array = [
  {
    name: '小明',
    age: 18
  },
  {
    name: '小美',
    age: 15
  },
  {
    name: '杰倫',
    age: 19
  },
  {
    name: '漂亮阿姨',
    age: 22
  },
  {
    name: '老媽',
    age: 28
  }
];

let newArray = [];
newArray = array.filter(item => {
  return item.age <= 18;
});

// 也可以簡寫成
// newArray = array.filter(item => item.age <= 18);

console.log(newArray);