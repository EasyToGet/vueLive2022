const app = Vue.createApp({
  // 產品資料格式
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io',
      apiPath: 'edvuelive2023',
      products: [],
      productsTemp: {},
    }
  },
  methods: {
    checkAdmin() {
      const url = `${this.apiUrl}/v2/api/user/check`;
      axios.post(url)
        .then(() => {
          this.getData();
        })
        .catch(error => {
          alert(error.data.message);
          window.location = 'RESTful_API_login.html';
        })
    },
    getData() {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/admin/products`;
      axios.get(url)
        .then(response => {
          this.products = response.data.products;
        })
        .catch(error => {
          console.log(error.data.message);
        })
    },
    openProduct(product) {
      this.productsTemp = product;
    }
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common.Authorization = token;
    
    this.checkAdmin()
  },
});

app.mount('#app');