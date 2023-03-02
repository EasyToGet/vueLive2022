<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ product.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="product.imageUrl" alt="" />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">
                {{ product.category }}
              </span>
              <p>商品描述：{{ product.description }}</p>
              <p>商品內容：{{ product.content }}</p>
              <div class="h5" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <div v-else>
                <del class="h6" >
                  原價 {{ product.origin_price }} 元
                </del>
                <div class="h5" >
                  現在只要 {{ product.price }} 元
                </div>
              </div>
              <div>
                <div class="input-group">
                  <select
                    name=""
                    id=""
                    class="form-select"
                    v-model.number="qty">
                    <option
                      :value="i"
                      v-for="(i, key) in 20"
                      :key="key"
                    >
                      {{ i }}
                    </option>
                  </select>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="$emit('add-to-cart', product.id, qty)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      status: {},
      modal: '',
      qty: 1
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
