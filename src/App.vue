<template>
  <div id="app">
    <div class="Desktop">
      <HeaderDesktop/>
      <router-view name="Desktop"/>
      <FooterDesktop/>
    </div>
    <div class="Mobile">
      <HeaderMobile/>
      <router-view name="Mobile"/>
      <FooterMobile/>
    </div>
    
  </div>
</template>
<script>
import FooterDesktop from '@/DesktopComponents/Skeleton/Footer.vue'
import HeaderDesktop from '@/DesktopComponents/Skeleton/Header.vue'
import FooterMobile from '@/MobileComponents/Skeleton/Footer.vue'
import HeaderMobile from '@/MobileComponents/Skeleton/Header.vue'
export default {
  components: {
    FooterDesktop,
    HeaderDesktop,
    FooterMobile,
    HeaderMobile
  }
}
</script>

<style>
#app{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@media only screen and (max-width: 930px) {
  .Desktop{
    display: none;
  }
  .Mobile{
    display: block;
  }
}
@media only screen and (min-width: 920px) {
  .Desktop{
    display: block;
  }
  .Mobile{
    display: none;
  }
}

</style>
