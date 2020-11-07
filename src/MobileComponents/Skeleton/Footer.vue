<template>
  <div class="Container">
    <div class="Link">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25.5" viewBox="0 0 30 25.5">
        <path id="Icon_material-home" data-name="Icon material-home" d="M15,30V21h6v9h7.5V18H33L18,4.5,3,18H7.5V30Z" transform="translate(-3 -4.5)"/>
      </svg>
      <h4>
        Home
      </h4>
    </div>
    <div class="Link">
      <svg xmlns="http://www.w3.org/2000/svg" width="26.5" height="30.286" viewBox="0 0 26.5 30.286">
        <path id="Icon_awesome-shopping-bag" data-name="Icon awesome-shopping-bag" d="M20.821,9.464V7.571a7.571,7.571,0,0,0-15.143,0V9.464H0V25.554a4.732,4.732,0,0,0,4.732,4.732H21.768A4.732,4.732,0,0,0,26.5,25.554V9.464ZM9.464,7.571a3.786,3.786,0,1,1,7.571,0V9.464H9.464Zm9.464,7.1a1.42,1.42,0,1,1,1.42-1.42A1.42,1.42,0,0,1,18.929,14.67Zm-11.357,0a1.42,1.42,0,1,1,1.42-1.42A1.42,1.42,0,0,1,7.571,14.67Z"/>
      </svg>
      <h4>
        Shop
      </h4>
    </div>
    <div class="Link">
      <svg xmlns="http://www.w3.org/2000/svg" width="29.83" height="27.898" viewBox="0 0 29.83 27.898">
        <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M22.982,3.938h-.064a7.432,7.432,0,0,0-6.127,3.2,7.432,7.432,0,0,0-6.127-3.2H10.6a7.122,7.122,0,0,0-7.223,6.943,14.513,14.513,0,0,0,3.083,8.154c3.883,5.057,10.332,9.481,10.332,9.481s6.45-4.424,10.332-9.481a14.513,14.513,0,0,0,3.083-8.154A7.122,7.122,0,0,0,22.982,3.938Z" transform="translate(-1.875 -2.438)" stroke="#000" stroke-width="3"/>
      </svg>
      <h4>
        Heart
      </h4>
    </div>
    <div class="Link">
      <svg xmlns="http://www.w3.org/2000/svg" width="31.961" height="28.41" viewBox="0 0 31.961 28.41">
        <path id="Icon_awesome-shopping-cart" data-name="Icon awesome-shopping-cart" d="M29.3,16.72,31.928,5.178a1.332,1.332,0,0,0-1.3-1.627H8.834L8.326,1.065A1.332,1.332,0,0,0,7.021,0H1.332A1.332,1.332,0,0,0,0,1.332V2.22A1.332,1.332,0,0,0,1.332,3.551H5.209l3.9,19.057a3.108,3.108,0,1,0,3.72.475H24.461a3.107,3.107,0,1,0,3.529-.577l.306-1.347A1.332,1.332,0,0,0,27,19.532H12.1l-.363-1.776H28.006A1.332,1.332,0,0,0,29.3,16.72Z"/>
      </svg>
      <h4>
        Cart
      </h4>
    </div>
    <div class="Link">
      <svg xmlns="http://www.w3.org/2000/svg" width="34.137" height="6" viewBox="0 0 34.137 6">
        <g id="Icon_feather-more-horizontal" data-name="Icon feather-more-horizontal" transform="translate(-4.5 -15)">
          <path id="Path_41" data-name="Path 41" d="M19.5,18A1.5,1.5,0,1,1,18,16.5,1.5,1.5,0,0,1,19.5,18Z" transform="translate(3.568)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_42" data-name="Path 42" d="M30,18a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,30,18Z" transform="translate(7.137)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_43" data-name="Path 43" d="M9,18a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,9,18Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        </g>
      </svg>
      <h4>
        More
      </h4>
    </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
svg{
  height: 30px;
}
h4{
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}
.Link{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Container{
  display: flex;
  height: 60px;
  background-color: #FFBB9A;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}

</style>