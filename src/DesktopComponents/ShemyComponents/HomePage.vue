<template>
    <div>
        <div class="Hero">
            <h3>Welcome to fingers the online marketplace for unique, special and creative handmade products</h3>
            <h3>Where you can</h3>
            <div class="Buttons">
                <button>Buy</button>
                <button>Sell</button>
            </div>
            <h3>Everything creative that crosses your mind</h3>
        </div>
        <div class="MissionStatement">
            <div class="Left">
                <p class="Shadow">
                    Our mission at fingers is to connect tasteful customers like you with creative independent
                    sellers selling all sorts of products on our marketplace. Independent sellers 
                    lack the opportunity to make a good living through their high quality products 
                    due to lack of reaching special customers like you with a creative artistic eye.
                    We wish to provide artists with the chance to be entrepreneurial with their hobbies
                    and generate a steady income that will encourage them to create even more beautiful products and
                    remember that amongst 7 billion people on the planet you will be the only owner of whatever you buy
                    here and that's the beauty of creative products, they last forever and you can't put a price tag on them.
                    Except for the actual price tag we have on the products here 😂. I mean eventually you are going to need
                    to sell your products and we want to help you do that.
                </p>
            </div>
            <div class="Right">
                <div class="SellerCallToAction Shadow">
                    <h2>
                        At fingers we celebrate creativity so
                        if you have an idea for something creative,
                        please don't hesitate to
                    </h2>
                    <button id="SellerCallToAction">Start a shop on fingers</button>
                </div>
            </div>
        </div>
        <div class="DiscoverCategory Shadow">
            <div class="PhotoGrid">
                <div class="GridLeft">
                    <div class="GridLeftUpper">
                        <div class="GridLeftUpperLeft">
                            <img src="@/assets/ProductPic.jpg" alt="">
                        </div>
                        <div class="GridLeftUpperRight">
                            <img src="@/assets/ProductPic.jpg" alt="">
                        </div>
                    </div>
                    <div class="GridLeftLower">
                        <img src="@/assets/ProductPic.jpg" alt="">
                    </div>
                </div>
                <div class="GridRight">
                    <img src="@/assets/ProductPic.jpg" alt="">
                </div>
            </div>
            <button id="GridButton">Accessories</button>

        </div>
        <h2>Gifts For Him</h2>
        <div class="ProductRecommendation">
            <div v-for="n in 6" :key="n" class="Grid">
                        <ProductCard/>
            </div>
        </div>
        
    </div>
</template>

<script>
import ProductCard from '@/DesktopComponents/ShemyComponents/ProductCard'
    export default {
        components:{
            ProductCard
        }
        
    }
</script>

<style scoped>
.ProductRecommendation{
    display: flex;
    overflow: hidden;
    justify-content: space-around;
    width: 100%;
}
#GridButton{
    border: none;
    background-color:#FACFD9;
    width: 150px;
    height: 35px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 30px;
    font-size: 1.2rem;
    align-self: center;


}
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    
}
.PhotoGrid{
    width: 95%;
    margin-left: 2.5%;
    display: flex;
    justify-content: space-between;
    /* background-color: blue; */
    height: 450px;
}
.GridLeft{
    width: 59.5%;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.GridLeftUpper{
    display: flex;
    height: 52.5%;
    /* background-color: brown; */
    justify-content: space-between;
}
.GridLeftUpperLeft{
    width: 60%;
    /* background-color: green; */
}
.GridLeftUpperRight{
    width: 39.5%;
    /* background-color: blue; */
}
.GridLeftLower{
    height: 46.5%;
    /* background-color:coral; */
}
.GridRight{
    width: 40%;
    /* background-color: pink; */
}
.DiscoverCategory{
    width: 95%;
    background-color: #AAE2DF;
    border-radius: 10px;
    height: 600px;
    margin-left: 2.5%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
}
.SellerCallToAction{
    width: 40%;
    text-align: center;
    align-self: center;
    background-color:#FACFD9;
    height: 90%;
    padding: 10px;
    border-radius: 0 0 10px 10px;

}
.Shadow{
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
}
.MissionStatement{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;

}
.Left{
    width: 60%;
    /* background-color: #AAE2DF; */
    display: flex;
    justify-content: center;
}
.Left p{
    background-color: white;
    width: 50%;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
}
.Right{
    width: 40%;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
}
.Hero{
    background-color: #AAE2DF;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    justify-content: center;
}
.Buttons{
    width: 60%;
    display: flex;
    justify-content: space-around;
}
h3{
    margin: 10px 0 0 0;
}
button{
    border: none;
    background-color: white;
    width: 120px;
    height: 30px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.1rem;
}
#SellerCallToAction{
  border: none;
    background-color: white;
    width: 220px;
    height: 30px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.1rem;  
}

</style>