<template>
    <div class="Container">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.243" height="29.492" viewBox="0 0 31.243 29.492">
        <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M26.207,3.938h-.075A8.585,8.585,0,0,0,19,7.771a8.585,8.585,0,0,0-7.135-3.834h-.075a8.413,8.413,0,0,0-8.412,8.331,17.739,17.739,0,0,0,3.59,9.784C11.486,28.121,19,33.429,19,33.429s7.51-5.308,12.032-11.376a17.739,17.739,0,0,0,3.59-9.784A8.413,8.413,0,0,0,26.207,3.938Z" transform="translate(-3.375 -3.938)"/>
        </svg>
        <h2>Favourites</h2>
        <div class="Shop">
            <div v-for="n in 60" :key="n" class="Grid">
                <ProductCard/>
            </div>
        </div>
        <button>Load more</button>
        <button id="Pink">Back to top</button>
    </div>
</template>

<script>
import ProductCard from "@/DesktopComponents/ShemyComponents/ProductCard.vue"
    export default {
        components:{
            ProductCard
        }
    }
</script>

<style scoped>
#Pink{
    background-color: #FACFD9;
}
button{
    border: none;
    background-color: #AAE2DF;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.1rem;
}
svg{
    height: 100px;
    width: 100px;
    fill:#AAE2DF;
    margin-bottom: 30px;
}
.Container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Shop{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

}
</style>