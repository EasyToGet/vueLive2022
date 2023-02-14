const site = 'https://vue3-course-api.hexschool.io/';
const apiPath = 'edvuelive2023';

let productModal = {};
let delProductModal = {};

const app = Vue.createApp({
  // 產品資料格式
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false, // 確認是新增或編輯所使用
    }
  },
  methods: {
    checkAdmin() {
      const apiUrl = `${site}v2/api/user/check`;
      axios.post(apiUrl)
        .then(() => {
          this.getProducts();
        })
        .catch(err => {
          alert(err.data.message);
          window.location = 'VueJsAPI_login.html';
        })
    },
    getProducts() {
      const apiUrl = `${site}v2/api/${apiPath}/admin/products/all`;
      axios.get(apiUrl)
        .then(res => {
          console.log(res);
          this.products = res.data.products;
        })
        .catch(err => {
          console.log(err.data.message);
        })
    },
    openModal(status, product) {
      if (status === 'new') {
        productModal.show();
        this.isNew = true;
        //  帶入初始化資料
        this.tempProduct = {
          imagesUrl: [],
        }
      } else if (status === 'edit') {
        productModal.show();
        this.isNew = false;
        //  帶入當前要編輯的資料
        this.tempProduct = { ...product };
      } else if (status === 'delete') {
        delProductModal.show();
        //  帶入當前要刪除的資料
        this.tempProduct = { ...product };
      }

    },
    updateProduct() {
      let apiUrl = `${site}v2/api/${apiPath}/admin/product`;
      let method = 'post';
      //  用 isNew 判斷 API 怎麼運行
      if (!this.isNew) {
        apiUrl = `${site}v2/api/${apiPath}/admin/product/${this.tempProduct.id}`;
        method = 'put';
      }

      axios[method](apiUrl, { data: this.tempProduct })
        .then(res => {
          this.getProducts();
          productModal.hide();
        })
        .catch(err => {
          console.log(err.data.message);
        })
    },
    delProduct() {
      const apiUrl = `${site}v2/api/${apiPath}/admin/product/${this.tempProduct.id}`;
      axios.delete(apiUrl)
        .then((res) => {
          this.getProducts();
          delProductModal.hide();
        })
        .catch(err => {
          console.log(err.data.message);
        })
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    }
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common.Authorization = token;
    // check 管理者帳號
    this.checkAdmin();

    // bootstrap 方法
    productModal = new bootstrap.Modal('#productModal');
    delProductModal = new bootstrap.Modal('#delProductModal');
  },
});

app.mount('#app');