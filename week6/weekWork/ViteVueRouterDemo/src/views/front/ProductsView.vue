<template>
  <div>
    <h1>這是產品列表頁面</h1>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="width: 200px">
            <div
              style="height: 100px;
              background-size: cover;
              background-position: cent;"
              :style="{ backgroundImage: `url(${product.imageUrl})` }">
            </div>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
            <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
            <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="getProduct(product.id)"
                :disabled="loadingStatus.loadingItem === product.id">
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus.loadingItem === product.id">
                </i>
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addToCart(product.id, qty)"
                :disabled="loadingStatus.loadingItem === product.id">
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus.loadingItem === product.id">
                </i>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <UserProductModal
      ref="userProductModal"
      :product="product"
      @add-to-cart="addToCart">
    </UserProductModal>
  </div>
</template>

<script>
import UserProductModal from '@/components/UserProductModal.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      loadingStatus: {
        loadingItem: ''
      },
      products: [],
      product: {}
    }
  },
  components: {
    UserProductModal
  },
  methods: {
    getProducts () {
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    getProduct (id) {
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`
      this.loadingStatus.loadingItem = id
      this.$http.get(url)
        .then(res => {
          this.loadingStatus.loadingItem = ''
          this.product = res.data.product
          console.log(res.data.product)
          this.$refs.userProductModal.openModal()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    addToCart (id, qty = 1) {
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`
      this.loadingStatus.loadingItem = id.id
      const data = {
        product_id: id,
        qty
      }
      this.$refs.userProductModal.hideModal()
      this.$http.post(url, { data })
        .then(res => {
          alert(res.data.message)
          this.loadingStatus.loadingItem = ''
          this.$refs.userProductModal.qty = 1
          this.$refs.userProductModal.hideModal()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
