<template>
    <div>
        <h2>Fingers Shop/</h2>
        <div class="Container">
            <div class="Filter">
                <h3>Categories</h3>
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
            <div class="Container2">
                <div class="Shop">
                <div v-for="n in 60" :key="n" class="Grid">
                    <ProductCard/>
                    
                </div>
                </div>
                <button>Load more</button>
                <button id="Pink">Back to top</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import ProductCard from '@/DesktopComponents/ShemyComponents/ProductCard.vue'
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
.Container2{
    width: 85%;
    display: flex;
    flex-direction: column;
}
.Shop{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

}

h3{
    margin: 5px;
}
.Container{
    width: 100%;
    display: flex;
}
.Filter{
    width: 15%;
    background-color: #AAE2DF;
    height: 1000px;
    padding-left: 10px;
}
h2{
    border-bottom: 4px solid #FACFD9;
    margin: 5px;
    margin-bottom: 30px;
}

</style>