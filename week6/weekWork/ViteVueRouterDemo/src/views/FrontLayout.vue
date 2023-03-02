<template>
  <div style="text-align: center;">
    <h1>這是前台頁面</h1>
    <router-link to="/">首頁</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/cart">購物車列表</router-link>
    <hr>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  }
}
</script>
