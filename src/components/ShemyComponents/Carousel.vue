<template>
  <div>
    <div class="Slider">
      <div v-for="(n, x) in 10" v-bind:key="x">#Image for {{Kind}}</div>
    </div>

  </div>
</template>

<script>
export default {
props:["Kind"]

}
</script>

<style>
.Slider {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
}

</style>