<template>
    <div>
        <div class="Intro">
            <h3>Welcome to fingers. A place where you can</h3>
            <div class="Buttons">
                <button>Buy</button>
                <button>Sell</button>
            </div>
            <h3>any creative product you can think of.</h3>
        </div>
        <img src="@/assets/ProductPic.jpg" alt="" class="Shadow">
        <h2>Gifts for him</h2>
        <div class="Container">
            <div v-for="n in 60" :key = "n">
                <ProductCard />
            </div>
        </div>
        <div class="Intro">
            <h3>If you have something creative to show people, don't hesitate and sign-up we celebrate creativity</h3>
            <div class="Buttons">
                <button id="StartShop">start a fingers shop</button>
            </div>
        </div>
        <div class="Container">
            <div v-for="n in 60" :key = "n">
                <ProductCard />
            </div>
        </div>
        <div class="MailList">
            <p id="MailList">Subscribe to our mail list to get notified with your personalized products</p>
            <input type="text" class="Shadow">
            <button>Submit</button>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/MobileComponents/ShemyComponents/ProductCard.vue'
    export default {
        components:{
            ProductCard
        }
        
    }
</script>

<style scoped>
#MailList{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    text-align: center;
}
input{
    width: 90%;
    border-radius: 20px;
    border: none;
    height: 35px;
    outline: none;
    padding-left: 1rem;
    margin-bottom: 20px;
}
.MailList{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}
#StartShop{
    width: 200px;
    height: 40px;
}
.Buttons{
    display: flex;
    flex-direction: row;
    width: 60%;
    justify-content: space-around;
}
button{
    width: 100px;
    height: 25px;
    border-radius: 20px;
    background-color: #AAE2DF;
    border: none;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
}
.Intro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: pink;
    height: 200px;
    margin-bottom: 40px;
    margin-top: 20px;
}
h3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    text-align: center;
}
h2{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
}
.Container{
    display: flex;
    overflow-x: scroll;
}
img{
    width: 80%;
    margin-left: 10%;
    height: 300px;
    margin-bottom: 60px;
    border-radius: 10px;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}

</style>