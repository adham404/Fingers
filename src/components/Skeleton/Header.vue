<template lang="html">
  <!-- note to next developer size of component can be reduced by 10% -->
  <div class="Navigation">
    <div class="GeneralNavigation">
        <router-link :to="{ name: 'Homepage', params: {} }"><img src="@/assets/HeaderAssets/Asset 1.svg" alt="Logo" id="Logo"></router-link>
        <div id="searchEngine">
          <!-- search engine is still going to be added -->
          <input type="text" name="" value="" placeholder="">
          <img src="@/assets/HeaderAssets/search.svg" alt="" id="icon" style="margin-left:5px">
          <div class="Registration">
            <h4>Login</h4>
            <h4 style="border-left: solid 0.2vw grey">SignUp</h4>
          </div>
        </div>
        <div class="icons">
          <!-- each icon when clicked is going to redirect the use to the page related with this icon -->
          <img src="@/assets/HeaderAssets/cart.svg" alt="cart" id="icon">
          <img src="@/assets/HeaderAssets/heart.svg" alt="heart" id="icon">
          <img src="@/assets/HeaderAssets/compare.svg" alt="compare" id="icon">
          <!-- <img src="@/assets/HeaderAssets/account.svg" alt="account" id="icon"> -->

        </div>
    </div>
    <div class="CategoriesNavigation">
      <!-- when each of these headers are clicked the user is redirected to the General Store which will show product related to the Keyword he clicked on -->
      <h3>Accessories</h3>
      <h3>Handbags</h3>
      <h3>Home Decor</h3>
      <h3>Crochet</h3>
      <h3>Art&Paintings</h3>
      <h3>Gifts</h3>
      <h3>Collectibles</h3>
    </div>
  </div>
</template>



<script>
export default {
  components:{
  }
}
</script>



<style lang="css" scoped>
  .Registration{
    display: flex;
    flex-direction: row;
    margin-left: 5%;
  }
  .Navigation{
    margin-left: -3%;
  }
  h4{
    font-size: 1.1vw;
    font-weight: 700;
    padding-left: 5px;
    padding-right: 5px;
    color: black;
  }
   h3{
     font-size: 1vw;
     font-weight: 400;
     color: black;
   }
  .CategoriesNavigation{
    display: flex;
    justify-content: space-between;
    font-size: 1px;
    width: 80%;
    margin-left: 11%;
  }
  .GeneralNavigation{
    width: 90%;
    position: relative;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;

  }
  .icons{
    display: flex;
    width: 12%;
    align-self: center;
    justify-content: space-between;
  }
  #Logo{
    width: 7vw;
    height: 4vw;
    align-self: center;
    margin-left: 25%;
    margin-top: 4%;
  }
  input{
    border-radius: 60px;
    border: 10px;
    /* background-color: green; */
    box-shadow: 0 1px 4px 0.3px rgba(180,177,177,0.8);
    padding-left: 15px;

    height: 1.7vw;
    width: 60%;

    align-self: center;
    outline: none;
  }
  #searchEngine{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  #icon{
    height: 1.5vw;
  }
</style>
