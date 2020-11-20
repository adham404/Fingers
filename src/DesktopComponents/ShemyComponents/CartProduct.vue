<template>
    <div class="Container1">
        <img src="@/assets/ProductPic.jpg" alt="fe 7ewar" class="shadow">
        <h4 class="ProductName">Unique Handmade product</h4>
        <h4 class="SellerName">fingersteam</h4>
        <div class="Price">
            <h4>Egp 25.00</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewBox="0 0 21 27">
            <path id="Icon_material-delete" data-name="Icon material-delete" d="M9,28.5a3.009,3.009,0,0,0,3,3H24a3.009,3.009,0,0,0,3-3v-18H9ZM28.5,6H23.25l-1.5-1.5h-7.5L12.75,6H7.5V9h21Z" transform="translate(-7.5 -4.5)"/>
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
    margin-bottom: 20px;
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