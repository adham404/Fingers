<template>
  <div class="SellerStore">
      <div class="ShopDetails">
          <img src="../../assets/DiscoverCategoryAssets/test.png" alt="">
          <div>Shop Name: </div>
          <div>{{SellerData.ShopName}}</div>
          <div>About Seller: </div>
          <div>{{SellerData.AboutSeller}}</div>
          <div>Address: </div>
          <div>{{SellerData.Address}}</div>
          <div>Facebook page link: </div>
          <div>{{SellerData.FaceBookLink}}</div>
          <div>Instagram account link</div>
          <div>{{SellerData.InstagramLink}}</div>
          <div>Mobile Number</div>
          <div>{{SellerData.MobileNumber}}</div>
      </div>
      <hr>
      <div class="SellerProducts">
          <ProductCard v-for="(Product,x) in ProductData" v-bind:key="x" :Product="Product"></ProductCard>
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

<style>

</style>