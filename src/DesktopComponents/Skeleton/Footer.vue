<template lang="html">
  <div class="footer">
    <img src="../../assets/FooterAssets/Path 24.svg" alt="footer first element"  id="under">
    <img src="../../assets/FooterAssets/Path 25.svg" alt="" id="above">
    <div class="ContactUs">
      <h1>Contact Us</h1>
      <img src="../../assets/FooterAssets/RightArrow.svg" alt="right Arrow svg icon" >
    </div>
    <div class="link_Groups">
      <ul>
        <h2>Sell</h2>
        <li>How selling works</li>
        <li>FAQS</li>
        <li>Our core values</li>
        <li>Create a Blog</li>
      </ul>
      <ul>
        <h2>Buy</h2>
        <li>Start Shopping</li>
        <li>Categories</li>
      </ul>
      <ul>
        <h2>About</h2>
        <li>Our Story</li>
        <li>Our Vision</li>
        <li>Our Blog</li>
      </ul>
    </div>
    <div class="SocialMediaLinks">
      <img src="../../assets/FooterAssets/facebook.svg" alt="">
      <img src="../../assets/FooterAssets/instagram.svg" alt="">
      <img src="../../assets/FooterAssets/pinterest.svg" alt="">
      <img src="../../assets/FooterAssets/twitter.svg" alt="">
    </div>
  </div>
</template>


<script>
export default {
  components:{
  },

     }
</script>



<style lang="css" scoped>
  .SocialMediaLinks img{
    height: 2.5vw;
  }
  .ContactUs{
    width: 84%;
    height: 30%;
    margin-left: 8%;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    position: absolute;
    z-index: 2;
    bottom: 60%;
  }
  .footer{
    width: 100vw;
    height: 25vw;
    position: relative;
    bottom: 0px;
    margin-top: 20%;
    }
  .ContactUs img{
    height: 2.5vw;
    margin-top: 0.7%;
    margin-left: 1%;
  }
  #above{
    position: absolute;
    z-index: 1;
    height: 70%;
    width: 100%;
    bottom: 0%;
  }
  #under{
    position: absolute;
    z-index: 0;
    bottom: 0px;
    height: 100%;
    width: 100%;
  }
  .link_Groups{
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
    bottom: 18%;
    z-index: 2;
    margin-left: 2.5%;
  }
  ul{
    list-style: none;
    font-size: 1vw;
    min-width: 10vw;
  }
  h2{
    font-weight: bolder;
    color: black;
    font-size: 1.5vw;
  }
  h1{
    font-weight: bolder;
    font-size: 2.5vw;
    position: relative;
    margin-left: -4%;
    color: black;
    margin-top: 0;
    margin-bottom: 0;
    }
  .Headers{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 38.8%;
    margin-left: 5%;
  }
  .SocialMediaLinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    bottom: 4%;
    z-index: 2;
    width: 15%;
    margin-left: 76.5%;
  }

</style>
