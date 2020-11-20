<template lang="html">
  <!-- note to next developer size of component can be reduced by 10% -->
  <div class="Navigation">
    <div class="GeneralNavigation">
        <router-link :to="{ name: 'Homepage', params: {} }"><svg xmlns="http://www.w3.org/2000/svg" width="78.117" height="41.732" viewBox="0 0 78.117 41.732" id = "LogoNew">
        <path id="Path_37" data-name="Path 37" d="M190.867.041c-2.1.267-3.978,1.66-5.745,4.258-2.807,4.124-5.2,7.432-7.533,10.413a100.8,100.8,0,0,1-8.306,9.453,64.825,64.825,0,0,1-8.028,6.886q-1.191.84-2.365,1.578a36.192,36.192,0,0,0,14-5.962c7.193-4.943,13.424-11.962,19.057-21.455.405-.681.8-1.374,1.188-2.084s.782-1.435,1.185-2.181l.147-.284A6.1,6.1,0,0,0,190.867.041Z" transform="matrix(0.978, 0.208, -0.208, 0.978, -125.482, -31.3)" fill="#ff9d6c"/>
        <path id="Path_38" data-name="Path 38" d="M119.925,3.759c-.25.315-.5.625-.74.94l-.15.19c-1.615,2.066-3.156,4.017-4.776,5.96C107.546,18.9,101.486,24.5,95.185,28.474A32.431,32.431,0,0,1,82.87,33.442a41.276,41.276,0,0,0,8.215-6.448c3.612-3.575,7.168-7.353,10.606-11.007l.019-.019c1.837-1.953,3.736-3.961,5.618-5.929l.3-.313.186-.2A71.663,71.663,0,0,1,113.083,4.4,5.861,5.861,0,0,1,119.925,3.759Z" transform="matrix(0.978, 0.208, -0.208, 0.978, -63.409, -20.113)" fill="#aae2df"/>
        <path id="Path_39" data-name="Path 39" d="M23.253,14.443c-1.883,1.979-3.729,4.128-5.526,6.192l-.023.027c-1.351,1.565-2.749,3.183-4.159,4.731C12.334,26.716,11,28.151,9.559,29.56l-.422.413c-1.037.995-2.125,1.973-3.256,2.89A30.836,30.836,0,0,1,0,36.667a6.782,6.782,0,0,0,5.141.4,22.467,22.467,0,0,0,8.19-4.954c5.02-4.349,9.524-9.891,13.883-15.25l.014-.019c1.337-1.651,2.656-3.259,4.051-4.97l.42-.516C28.609,10.727,25.832,11.733,23.253,14.443Z" transform="matrix(0.978, 0.208, -0.208, 0.978, 7.775, -10.073)" fill="#facfd9"/>
        <path id="Path_40" data-name="Path 40" d="M344.11,89.9a17.294,17.294,0,0,0-8.135.874c-4.087,1.393-7.809,3.948-11.935,6.893a64.931,64.931,0,0,1-10.63,6.482c4.754-5.284,9.644-10.743,14.281-16.521,3-3.768,6.937-5.129,10.66-3.686a9.046,9.046,0,0,1,2.434,1.475A12.87,12.87,0,0,1,344.11,89.9Z" transform="matrix(0.978, 0.208, -0.208, 0.978, -241.137, -131.689)"/>
        <text id="fingers" transform="translate(12.226 21.874) rotate(-1)" font-size="19" font-family="TwCenMT-Regular, Tw Cen MT" letter-spacing="-0.007em"><tspan x="0" y="0">fingers</tspan></text>
        </svg></router-link>
        <div id="searchEngine">
          <!-- search engine is still going to be added -->
          <input type="search" name="" autocomplete="off" value=" " placeholder="Write a word that describes what you want">
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
          <!-- <img src="@/assets/HeaderAssets/account.svg" alt="account" id="icon"> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
            <path id="Icon_material-account-circle" data-name="Icon material-account-circle" d="M20,3A17,17,0,1,0,37,20,17.006,17.006,0,0,0,20,3Zm0,5.1a5.1,5.1,0,1,1-5.1,5.1A5.093,5.093,0,0,1,20,8.1Zm0,24.14A12.241,12.241,0,0,1,9.8,26.766c.051-3.383,6.8-5.236,10.2-5.236,3.383,0,10.149,1.853,10.2,5.236A12.241,12.241,0,0,1,20,32.24Z" transform="translate(-3 -3)"/>
          </svg>

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
  svg{
    height: 25px;
  }
  #LogoNew{
    width: 150px;
    height: 80px;
  }
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
