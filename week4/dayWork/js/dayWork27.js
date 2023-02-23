// 取用方法
const { createPinia, defineStore, mapState } = Pinia;

// CourseList store
const coursesStore = defineStore('coursesStore', {
  state: () => ({
    courses: ['國文', '英文', '數學']
  }),
  getters: {
    coursesNum: ({ courses }) => {
      return courses.length;
    }
}
})

// Vue app
const app = Vue.createApp({})

// CourseList 元件
app.component('CoursesNum', {
  template: `<p>總科目數：{{ coursesNum }}</p>`,
  computed: {
    ...mapState(coursesStore, ['coursesNum'])
  }
})

const pinia = createPinia();
app.use(pinia);
app.mount('#app');




// 1. mapState() 搭配 getters  
// 取用方法
// const { createPinia, defineStore, mapState } = Pinia

// 我們定義ㄉ store
// const exampleStore = defineStore('exampleStoreId', {
//   state: () => {
//     return {
//       message: 'Pinia Pinia Pinia！'
//     }
//   },
//   getters: {
    // 將 state 內資料使用解構方式帶入
//     printMessage: ({ message }) => {
      // 可以對資料進行操作
//       return 'msg: ' + message
//     }
//   }
// })

// Vue app
// const app = Vue.createApp({})

// 元件
// app.component('WelcomeMessage', {
//   template: `<p>{{ printMessage }}</p>`,
//   computed: {
    // 這邊第二個參數是要使用 getters 內的函式名稱
//     ...mapState(exampleStore, ['printMessage'])
//   }
// })

// const pinia = createPinia();
// app.use(pinia);
// app.mount('#app');


// 2. mapState()
// 取用方法
// const { createPinia, defineStore, mapState } = Pinia;
// 我們定義ㄉ store
// const exampleStore = defineStore('exampleStoreId', {
//   state: () => {
//     return {
//       message: 'Pinia Pinia Pinia！'
//     }
//   }
// })

// Vue app
// const app = Vue.createApp({})

// 元件
// app.component('WelcomeMessage', {
//   template: `<p>{{ message }}</p>`,
//   computed: {
    // 使用 ... 展開的方式
    // mapState() 第一個參數是我們要取用的 store，第二個參數是我們要取用的資料
//     ...mapState(exampleStore, ['message'])
//   }
// })

// const pinia = createPinia();
// app.use(pinia);
// app.mount('#app');