// 小明的銀行帳戶資訊
let mingAccount = {
  name: '小明',
  age: 22,
  deposit: 10000,
  depositRecord: [
    {
      title: '開戶',
      amounts: 10000
    }
  ]
};
// 小明的存款資訊
let mingTransfer = [
  {
    title: '一月存款',
    amounts: 777
  },
  {
    title: '二月存款',
    amounts: 7000
  },
  {
    title: '三月存款',
    amounts: 70000
  }
]

//  解法一
mingTransfer.forEach(item => {
  mingAccount.depositRecord.push(item);
  mingAccount.deposit += item.amounts
});

//  解法二
// mingTransfer.forEach(item => {
//   mingAccount.depositRecord.push(item);
// });

// mingAccount.deposit = mingAccount.depositRecord.reduce((prev, curr) => {
//   return prev + curr.amounts;
// }, 0);

console.log(mingAccount);