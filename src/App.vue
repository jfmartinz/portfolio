<script>
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import AsidePage from '@/components/AsidePage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage,
    AsidePage
  },
  data() {
    return {}
  }
}
</script>

<template>
  <header-page />
  <div class="flex">
    <div class="view">
      <router-view></router-view>
    </div>
    <div class="aside">
      <aside-page />
    </div>
  </div>
  <footer-page />
</template>

<style scoped>
.flex {
  width: 100%;
  display: flex;
  align-items: flex-start;
  min-height: 400px;
  margin-top: 4rem;
}

.flex .view {
  width: 100%;
  min-height: 100%;
}

.flex .aside {
  display: none;
}
footer {
  margin-top: 2rem;
}
@media (min-width: 620px) {
  .flex .view {
    width: 80%;
  }
}
@media (min-width: 768px) {
  .flex .view {
    width: 60%;
    min-height: 100%;
  }

  .flex .aside {
    width: 40%;
    min-height: 100%;
    display: block;
  }
}
</style>
