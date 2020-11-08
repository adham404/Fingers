<template>
    <div class="Container">
        <img src="@/assets/ProductPic.jpg" alt="fe 7ewar" class="shadow">
        <h4 class="ProductName">Unique Handmade product</h4>
        <h4 class="SellerName">fingersteam</h4>
        <div class="Price">
            <svg xmlns="http://www.w3.org/2000/svg" width="27.004" height="27.004" viewBox="0 0 27.004 27.004">
            <path id="Icon_material-edit" data-name="Icon material-edit" d="M4.5,25.875V31.5h5.625l16.59-16.59L21.09,9.285ZM31.065,10.56a1.494,1.494,0,0,0,0-2.115l-3.51-3.51a1.494,1.494,0,0,0-2.115,0L22.695,7.68l5.625,5.625,2.745-2.745Z" transform="translate(-4.5 -4.496)"/>
            </svg>
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
    height: 20px;
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
    margin-top: 5px;
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
.Container{
    display: flex;
    flex-direction: column;
    width: 160px;
    margin-right: 20px;
    margin-bottom: 10px;
}
img{
    border-radius: 5px;
    height: 150px;
    width: 100%;
}
.shadow{
    -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
}

</style>