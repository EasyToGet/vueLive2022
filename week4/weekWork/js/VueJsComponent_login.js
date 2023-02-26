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
          window.location = 'VueJsComponent_admin.html'
        }).catch(error => {
          alert(error.response.data.message);
          // console.log(error.response.data.message);
        })
    }
  },
});

app.mount('#app');