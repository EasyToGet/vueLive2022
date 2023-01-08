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
      const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios.post(api, this.user)
        .then(response => {
          const { token, expired } = response.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
          window.location = 'RESTful_API_admin.html'
        }).catch(error => {
          console.log(error.data.message);
        })
    }
  },
});

app.mount('#app');