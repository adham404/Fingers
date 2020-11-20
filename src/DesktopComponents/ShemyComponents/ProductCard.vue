<template>
    <div class="Container1">
        <img src="@/assets/ProductPic.jpg" alt="fe 7ewar" class="shadow">
        <h4 class="ProductName">Unique Handmade product</h4>
        <h4 class="SellerName">fingersteam</h4>
        <div class="Price">
            <h4>Egp 25.00</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.827" height="18.734" viewBox="0 0 19.827 18.734">
            <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M15.671,3.938h-.04a4.661,4.661,0,0,0-3.843,2,4.661,4.661,0,0,0-3.843-2h-.04a4.467,4.467,0,0,0-4.53,4.355,9.1,9.1,0,0,0,1.933,5.114,33.291,33.291,0,0,0,6.48,5.946,33.291,33.291,0,0,0,6.48-5.946A9.1,9.1,0,0,0,20.2,8.292,4.467,4.467,0,0,0,15.671,3.938Z" transform="translate(-1.875 -2.438)" fill="#fff" stroke="#000" stroke-width="3"/>
            </svg>
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
.Price h4{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.Price{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.SellerName{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    font-weight: normal;
}
.ProductName{
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bolder;
}
.Container1{
    display: flex;
    flex-direction: column;
    width: 220px;
    margin-right: 20px;
}
img{
    border-radius: 5px;
    height: 200px;
    width: 220px;
}
.shadow{
    -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
}

</style>