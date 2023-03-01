import userProductModal from '../components/userProductModal.js';

const { defineRule, Form, Field, ErrorMessage, configure } = VeeValidate;
const { required, email, min, max } = VeeValidateRules;
const { localize, loadLocaleFromURL } = VeeValidateI18n;

loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json');

configure({
  generateMessage: localize('zh_TW'),
});

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

const apiUrl = 'https://vue3-course-api.hexschool.io';
const apiPath = 'edvuelive2023';

const app = Vue.createApp({
  data() {
    return {
      loadingStatus: {
        loadingItem: '',
      },
      products: [],
      product: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
    };
  },
  components: {
    userProductModal,
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  methods: {
    getProducts() {
      const url = `${apiUrl}/v2/api/${apiPath}/products`;
      axios.get(url)
        .then(res => {
          this.products = res.data.products;
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    getProduct(product_id) {
      const url = `${apiUrl}/v2/api/${apiPath}/product/${product_id}`;
      this.loadingStatus.loadingItem = product_id.id;
      axios.get(url)
        .then(res => {
          this.loadingStatus.loadingItem = '';
          this.product = res.data.product;
          this.$refs.userProductModal.openModal();
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    addToCart(product_id, qty = 1) {
      const url = `${apiUrl}/v2/api/${apiPath}/cart`;
      this.loadingStatus.loadingItem = product_id.id;
      const data = {
        product_id,
        qty,
      };
      this.$refs.userProductModal.hideModal();
      axios.post(url, { data })
        .then(res => {
          alert(res.data.message);
          this.loadingStatus.loadingItem = '';
          this.getCart();
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    getCart() {
      const url = `${apiUrl}/v2/api/${apiPath}/cart`;
      axios.get(url)
        .then(res => {
          this.cart = res.data.data;
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    updateCart(item) {
      this.loadingStatus.loadingItem = item.id;
      const url = `${apiUrl}/v2/api/${apiPath}/cart/${item.id}`;
      const data = {
        product_id: item.product.id,
        qty: item.qty,
      };
      axios.put(url, { data })
        .then(res => {
          alert(res.data.message);
          this.loadingStatus.loadingItem = '';
          this.getCart();
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    deleteAllCarts() {
      const url = `${apiUrl}/v2/api/${apiPath}/carts`;
      axios.delete(url)
        .then(res => {
          alert(res.data.message);
          this.getCart();
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    removeCartItem(item) {
      this.loadingStatus.loadingItem = item.id;
      const url = `${apiUrl}/v2/api/${apiPath}/cart/${item.id}`;
      axios.delete(url)
        .then(res => {
          alert(res.data.message);
          this.loadingStatus.loadingItem = '';
          this.getCart();
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    createOrder() {
      const url = `${apiUrl}/v2/api/${apiPath}/order`;
      const order = this.form;
      axios.post(url, { data: order })
        .then(res => {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.form.message = '';
          this.getCart();
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    },
    // getOrders() {
    //   const url = `${apiUrl}/v2/api/${apiPath}/orders`;
    //   axios.get(url)
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       alert(err.response.data.message);
    //     });
    // },
  },
  mounted() {
    this.getProducts();
    this.getCart();
    // this.getOrders();
  },
});

app.mount('#app');