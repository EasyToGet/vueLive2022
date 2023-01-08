const app = {
  data() {
    return {
      personalInfo: {
        name: '',
        gender: '',
        favoritePet: '貓派',
        loveDessert: [],
        single: true,
      },
      genders: ['男', '女', '不限制'],
      petGenre: ['貓派', '狗派'],
      desserts: ['冰淇淋', '巧克力', '鬆餅']
    }
  }
}
Vue.createApp(app).mount('#app')