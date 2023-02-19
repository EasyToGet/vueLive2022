//  用 $emit 撰寫方式
export default {
  props: ['pages'],
  template: `<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"
        :class="{ disabled: !pages.has_pre }">
        <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="$emit('change-page', pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
        :class="{ active: page === pages.current_page }"
        v-for="(page, key) in pages.total_pages" :key="key">
        <a class="page-link" href="#"
        @click.prevent="$emit('change-page', page)">{{ page }}</a></li>
      <li class="page-item"
        :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next"
          @click.prevent="$emit('change-page', pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>`
};

// 用 methods 撰寫方式
// props: ['pages'],
// template: `<nav aria-label="Page navigation example">
//   <ul class="pagination">
//     <li class="page-item"
//       :class="{ disabled: !pages.has_pre }">
//       <a class="page-link" href="#" aria-label="Previous"
//         @click.prevent="changePages(pages.current_page - 1)">  1.
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//     <li class="page-item"
//       :class="{ active: page === pages.current_page }"
//       v-for="(page, key) in pages.total_pages" :key="key">
//       <a class="page-link" href="#"
//       @click.prevent="changePages(page)">{{ page }}</a></li>  2.
//     <li class="page-item"
//       :class="{ disabled: !pages.has_next }">
//       <a class="page-link" href="#" aria-label="Next"
//         @click.prevent="changePages(pages.current_page + 1)"> 3.
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>
// </nav>`,
// methods: {
//   changePages(page) {
//     this.$emit('change-page', page);
//   }
// }



// 用 props 撰寫方式
// props: ['pages', 'getProducts'],
// template: `<nav aria-label="Page navigation example">
//   <ul class="pagination">
//     <li class="page-item"
//       :class="{ disabled: !pages.has_pre }">
//       <a class="page-link" href="#" aria-label="Previous"
//         @click.prevent="getProducts(pages.current_page - 1)">
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//     <li class="page-item"
//       :class="{ active: page === pages.current_page }"
//       v-for="(page, key) in pages.total_pages" :key="key">
//       <a class="page-link" href="#"
//       @click.prevent="getProducts(page)">{{ page }}</a></li>
//     <li class="page-item"
//       :class="{ disabled: !pages.has_next }">
//       <a class="page-link" href="#" aria-label="Next"
//         @click.prevent="getProducts(pages.current_page + 1)">
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>
// </nav>`