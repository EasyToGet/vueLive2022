const app = {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    callName() {
      alert(this.name);
    }
  }
}
Vue.createApp(app).mount('#app')