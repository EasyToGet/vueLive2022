const app = {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('送出表單');
    },
    executeOnce() {
      console.log('點擊按鈕');
    },
    onEnter() {
      console.log(this.text);
    }
  }
}
Vue.createApp(app).mount('#app')