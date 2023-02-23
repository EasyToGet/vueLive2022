const { createPinia, defineStore, mapState, mapActions } = Pinia;

// add store
const addStore = defineStore('addStore', {
  state: () => ({
    currentNum: 0
  }),
  actions: {
    plusNum() {
      // 在此取用 state 內的資料可以使用 this
      this.currentNum += 1;
      // console.log(this.currentNum);
    },
    minusNum() {
      this.currentNum -= 2;
    }
  }
})

// Vue app
const app = Vue.createApp({})

// PlusNum 元件
app.component('PlusNum', {
  template: `<p>{{ currentNum }}</p>
    <button class="mr-1" @click="plusNum()">+1</button>
    <button @click="minusNum()">-2</button>
  `,
  methods: {
    ...mapActions(addStore, ['plusNum', 'minusNum'])
    
  },
  computed: {
    ...mapState(addStore, ['currentNum'])
  }
})


const pinia = createPinia();
app.use(pinia);
app.mount('#app');

//  1.actions
// 定義 store
// const addStore = defineStore('addStore', {
//   state: () => ({
    // 要呈現出的數字資料
//     currentNum: 0
//   }),
//   actions: {
    // 定義方法    
//     plusNum() {
      // 在此取用 state 內的資料可以使用 this
//       this.currentNum += 1;
      // console.log(this.currentNum);
//     }
//   }
// })

// 元件
// app.component('PlusNum', {
//   template: `<p>{{ currentNum }}</p>
//     <button>+1</button>
//   `,
//   computed: {
    // 取出資料 currentNum
//     ...mapState(addStore, ['currentNum'])
//   }
// })

//  2. mapActions() 取用 store 內方法
// const addStore = defineStore('addStore', {
//   state: () => ({
//     currentNum: 0
//   }),
//   actions: {
//     // 定義方法    
//     plusNum() {
//       // 在此取用 state 內的資料可以使用 this
//       this.currentNum += 1;
//       // console.log(this.currentNum);
//     }
//   }
// })

// 元件
// PlusNum 元件
// app.component('PlusNum', {
//   template: `<p>{{ currentNum }}</p>
//     <button @click="plusNum()">+1</button>
//   `, // 使用 v-on click 點擊事件觸發 plusNum() 方法
//   computed: {
//     // 取出資料 currentNum
//     ...mapState(addStore, ['currentNum'])
//   },
//   // 要使用方法要運用 methods
//   methods: {
//     // 運用 Pinia mapActions()
//     // 第一個參數為定義的 store 變數
//     // 第二個參數為在 actions 定義的方法名稱
//     ...mapActions(addStore, ['plusNum'])
//   }
// })