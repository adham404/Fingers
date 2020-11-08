<template>
    <div class="SellerStore">
        <div class="ShopDetails">
            <h3>Shop Details:</h3>
            <label for="">Phone Number:</label>
        <input type="text" value="010000000">
        <label for="">Address:</label>
        <textarea name="" id="" cols="30" rows="10" v-model="Address"></textarea>
        <label for="">Shop Name:</label>
        <input type="text" value="Batee5">
        <button>Save Changes</button>
        </div>
        
        <img src="@/assets/ProductPic.jpg" alt="fe 7ewar">
        <h3>Cherry Nina GiftShop</h3>
        <div class="Shop">
            <SellerProduct v-for="n in 20" :key = "n"/>

        </div>
    </div>
</template>

<script>
import SellerProduct from "@/MobileComponents/ShemyComponents/SellerProduct.vue"

    export default {
        components:{
            SellerProduct
        },
        data(){
            return{
                Address:  "el2ota elmeshemeshakdfhfjlsjf;ljfa;lkfjjsflkajsdfl;kasj"
            }
        }
        
    }
</script>

<style scoped>
button{
    border: none;
    background-color:#FACFD9;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
}
input{
    margin: 2px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    border: none;
    font-size: 1rem;
    width: 300px;
}
label{
    ont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
}
textarea{
     margin: 2px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    border: 3px solid black;
    font-size: 1rem;
    width: 300px;
    height: 100px;
}
.ShopDetails{
    display: flex;
    flex-direction: column;
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