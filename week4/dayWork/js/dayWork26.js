const { createPinia, defineStore } = Pinia;

// defineStore
const piniaStore = defineStore('piniaStoreId', {
  state: () => {
    return {
      message: 'Pinia Pinia Pinia！',
    }
  }
});

// Vue app
const app = Vue.createApp({})


const pinia = createPinia();

app.use(pinia);
app.mount('#app');