<template>
    <div class="SellerStore">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.243" height="29.492" viewBox="0 0 31.243 29.492">
  <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M26.207,3.938h-.075A8.585,8.585,0,0,0,19,7.771a8.585,8.585,0,0,0-7.135-3.834h-.075a8.413,8.413,0,0,0-8.412,8.331,17.739,17.739,0,0,0,3.59,9.784C11.486,28.121,19,33.429,19,33.429s7.51-5.308,12.032-11.376a17.739,17.739,0,0,0,3.59-9.784A8.413,8.413,0,0,0,26.207,3.938Z" transform="translate(-3.375 -3.938)"/>
</svg>

        <h3>Favourite Items</h3>
        <div class="Shop">
            <ProductCard v-for="n in 20" :key = "n"/>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/MobileComponents/ShemyComponents/ProductCard.vue"

    export default {
        components:{
            ProductCard
        }
        
    }
</script>

<style scoped>
svg{
    fill: pink;
}
.Shop{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
    align-self: center;
}

.SellerStore{
    display: flex;
    flex-direction: column;
    align-items: center;
}
img{
    height: 80px;
    width: 80px;
    border-radius: 50px;
}

</style>