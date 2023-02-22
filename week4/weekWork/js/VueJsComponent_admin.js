import pagination from '../components/pagination.js';
import updateProductModal from '../components/productModal.js';
import deleteProductModal from '../components/delProductModal.js';

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
      page: {},
    };
  },
  methods: {
    checkAdmin() {
      const apiUrl = `${site}v2/api/user/check`;
      axios.post(apiUrl)
        .then(res => {
          this.getProducts();
        })
        .catch(err => {
          alert("登入失敗");
          window.location = 'VueJsComponent_login.html';
        });
    },
    getProducts(page = 1) {
      const apiUrl = `${site}v2/api/${apiPath}/admin/products/?page=${page}`;
      axios.get(apiUrl)
        .then(res => {
          this.products = res.data.products;
          this.page = res.data.pagination;
        })
        .catch(err => {
          console.log(err.data.message);
        });
    },
    updateProduct() {
      let apiUrl = `${site}v2/api/${apiPath}/admin/product`;
      let method = 'post';
      //  用 isNew 判斷 API 怎麼運行
      if (!this.isNew) {
        apiUrl = `${site}v2/api/${apiPath}/admin/product/${this.tempProduct.id}`;
        method = 'put';
      };

      axios[method](apiUrl, { data: this.tempProduct })
        .then(res => {
          this.getProducts();
          productModal.hide();
          alert(res.data.message);
        })
        .catch(err => {
          console.log(err.response.data.message);
        });
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
    openModal(status, product) {
      if (status === 'new') {
        productModal.show();
        this.isNew = true;
        //  帶入初始化資料
        this.tempProduct = {
          imagesUrl: [],
        };
      } else if (status === 'edit') {
        productModal.show();
        this.isNew = false;
        //  帶入當前要編輯的資料
        this.tempProduct = { ...product };
      } else if (status === 'delete') {
        delProductModal.show();
        //  帶入當前要刪除的資料
        this.tempProduct = { ...product };
      };
    }
  },
  components: {
    pagination,
    updateProductModal,
    deleteProductModal,
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