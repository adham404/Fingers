<template>
    <div class="Container">
        <div class="CoverPhoto">
        </div>
        <div class="LowerContainer">
            <div class="StoreProfile">
                <img src="@/assets/ProductPic.jpg" alt="">
                <h3>CherryNina Giftshop</h3>
                <div class="Filter">
                    <h4>About The Peaky Blinders: </h4>
                    <p>This shop was established in 1994 by tommy shelby and the peaky blinders
                        but they started to sell drugs and stuff in it so they went online so they can sell 
                        these illegal stuff without getting caught that is the story of this shopname
                    </p>
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
import ProductCard from "@/DesktopComponents/ShemyComponents/ProductCard.vue"
    export default {
        components:{
            ProductCard
        }
        
    }
</script>

<style scoped>
.Filter{
    width: 85%;
    background-color: #AAE2DF;
    height: 1000px;
    padding-left: 10px;
}
img{
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 150px;
}
.StoreProfile{
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}
.LowerContainer{
    display: flex;
    flex-direction: row;

}
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
.CoverPhoto{
    width: 100%;
    height: 300px;
    background-image: url("../../../src/assets/ProductPic.jpg");
    background-position: center;
    margin-bottom: 50px;
}
</style>