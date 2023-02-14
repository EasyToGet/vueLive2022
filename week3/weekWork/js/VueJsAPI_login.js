const site = 'https://vue3-course-api.hexschool.io/';

const app = Vue.createApp({
  // 產品資料格式
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      const apiUrl = `${site}v2/admin/signin`;
      axios.post(apiUrl, this.user)
        .then(response => {
          const { token, expired } = response.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
          window.location = 'VueJsAPI_admin.html'
        }).catch(error => {
          console.log(error.data.message);
        })
    }
  },
});

app.mount('#app');