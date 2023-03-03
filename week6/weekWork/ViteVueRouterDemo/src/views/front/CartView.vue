<template>
  <h1>這是購物車列表頁面</h1>
  <div>
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button" @click="deleteAllCarts">清空購物車</button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cart.carts">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <button type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item)"
                :disabled="loadingStatus.loadingItem === item.id">
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus.loadingItem === item.id">
                </i>
                x
              </button>
            </td>
            <td>
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <select name="" id="" class="form-select" v-model.number="item.qty"
                    @change="updateCart(item)"
                    :disabled="loadingStatus.loadingItem === item.id">
                    <option :value="i"
                      v-for="i in 30"
                      :key="i + '123'">
                      {{ i }}
                    </option>
                  </select>
                  <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <small
                class="text-success"
                v-if="cart.final_total !== cart.total"
                >折扣價：</small>
              {{ item.final_total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="my-5 row justify-content-center">
    <VForm
      ref="form"
      class="col-md-6"
      v-slot="{ errors }"
      @submit="createOrder"
    >
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <VField
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"></VField>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <VField
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name">
        </VField>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <VField
          id="tel"
          name="電話"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|min:8|max:10"
          v-model="form.user.tel">
        </VField>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <VField
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address">
        </VField>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message">
        </textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </VForm>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      loadingStatus: {
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {}
    }
  },
  components: {
  },
  methods: {
    getCart () {
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.cart = res.data.data
          } else {
            alert(res.data.message)
          }
        })
    },
    updateCart (item) {
      this.loadingStatus.loadingItem = item.id
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http.put(url, { data })
        .then(res => {
          alert(res.data.message)
          this.loadingStatus.loadingItem = ''
          this.getCart()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    deleteAllCarts () {
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`
      this.$http.delete(url)
        .then(res => {
          alert(res.data.message)
          this.getCart()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    removeCartItem (item) {
      this.loadingStatus.loadingItem = item.id
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`
      this.$http
        .delete(url)
        .then(res => {
          alert(res.data.message)
          this.getCart()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
      this.loadingStatus.loadingItem = ''
    },
    createOrder () {
      const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then(res => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.form.message = ''
          this.getCart()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
