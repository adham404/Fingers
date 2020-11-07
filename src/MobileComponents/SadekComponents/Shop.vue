<template>
    <div >
        
        <div class="Filter">
            <div>
                <input type="checkbox">
                <label for="">Accessories</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Handbags</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Home decor</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Clothes</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Art and paintings</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Gifts</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Collections</label>
            </div>
        </div>
        <div class="BreadCrumbs">
            <h3>Fingers/</h3>
        </div>
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
}
h3{
    border-bottom: 3px solid black;
}
.Filter{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>