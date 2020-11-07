<template>
  <div>
     {{Kind}} >
     <div class="Discovery">
         <div v-for="(n,x) in 4" v-bind:key="x">#Image</div>
     </div>
  </div>
</template>

<script>
export default {
    props:["Kind"]
}
</script>

<style>
.Discovery{
    border: 1px solid #ccc;
}

</style>