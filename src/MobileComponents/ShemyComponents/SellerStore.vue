<template>
    <div class="SellerStore">
        <img src="@/assets/ProductPic.jpg" alt="fe 7ewar">
        <h3>{{SellerData.ShopName}}</h3>
        <h3>About Seller: </h3>
        <h3>{{SellerData.AboutSeller}}</h3>
        <h3>Address: </h3>
        <h3>{{SellerData.Address}}</h3>
        <h3>Mobile Number: </h3>
        <h3>{{SellerData.MobileNumber}}</h3>
        <br>
        <h3>All Products: </h3>
        <div class="Shop">
            <ProductCard v-for="(Product,x) in ProductData" v-bind:key="x" :Product="Product" />

        </div>
    </div>
</template>

<script>
import ProductCard from "../ShemyComponents/ProductCard"
// import {EventBus} from "../../main"
import firebase from "firebase"
export default {
data:function()
{
    return{
        SellerID:"",
        SellerData:"",
        ProductData:[]
    }
},
components:{
    ProductCard
},
async mounted()
{
    this.SellerID = this.$route.query.SellerID
    // await EventBus.$on("VisitStore", (id) => {
    //     this.SellerID = id
    //     console.log("The ID of the Seller baby is: "+ this.SellerID)
    // })
    //Get Seller Data
    var db = firebase.firestore()
    var DBRef = db.collection("Users")
    await DBRef.doc(this.SellerID).get().then((query) => {
        this.SellerData = query.data()
    })
    //Get the Seller Products Data
    var DBRef2 = db.collection("Products")
    await DBRef2.get().then((query) => {
        query.forEach((doc) => {
            if(doc.data().SellerID == this.SellerID)
            {
                this.ProductData.push(doc.data())
            }
        })
    })
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