<template>
    <div class="SellerStore">
        <img src="@/assets/ProductPic.jpg" alt="fe 7ewar">
        <h3>Cherry Nina GiftShop</h3>
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