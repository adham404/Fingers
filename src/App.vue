<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    
  </div>
</template>
<script>
import Footer from '@/components/Skeleton/Footer.vue'
import Header from '@/components/Skeleton/Header.vue'
export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

</style>
