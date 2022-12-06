<template>
  <div id="app" class="has-text-centered is-family-secondary">
    <NavBar />
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: { NavBar, Footer },
  mounted() {
    this.$store.dispatch('GET_FILMS')
    this.$router.push('showFilms')
  }
}
</script>
<style>
.border {
  background-color: black;
}


</style>
