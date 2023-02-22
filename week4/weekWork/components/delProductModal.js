export default {
  props: ['tempProduct'],
  template: `<div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
      aria-labelledby="delProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>`, 
  data() {
    return {
      site: 'https://vue3-course-api.hexschool.io/',
      apiPath: 'edvuelive2023',
      delProductModal: '',
    };
    
  },
  methods: {
    delProduct() {
      const apiUrl = `${this.site}v2/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
      axios.delete(apiUrl)
        .then((res) => {
          this.hideModal();
          this.$emit('delProduct');
          alert(res.data.message);
        })
        .catch(err => {
          console.log(err.response.data.message);
        });
    }, 
    openModal() {
      this.delProductModal.show();
    },
    hideModal() {
      this.delProductModal.hide();
    },
  },
  mounted() {
    this.delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
      keyboard: false,
      backdrop: 'static',
    });
    console.log(this.delProductModal);
  },
};

