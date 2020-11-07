<template>
  <div @click="ShowMeShop" class="ProductCard">
      <div>
          <img src="../../assets/DiscoverCategoryAssets/test.png" alt="" srcset="">
      </div>
      <div>{{Product.ProductName}}</div>
      <div>Fingers team</div>
      <div>EGP: {{Product.Price}}</div>
      <button v-if="!Seller" @click="Like">Like</button>
      <button v-if="Seller">Edit</button>
      <button v-if="Seller">Delete</button>
      <!-- <button @click="Compare">Compare</button> -->
  </div>
</template>

<script>
import firebase from "firebase"
export default {
data:function()
{
    return{

    }
},
methods:{
    Like()
    {
        //TODO Further invistigating on it it doesn't matter now
        var db = firebase.firestore()
        var DBRef = db.collection("Products")
        var likes = this.Product.NumberOfFavs;
        likes = likes + 1
        DBRef.doc(this.Product.ProductID).update({
            NumberOfFavs: likes
        })
    },
    async ShowMeShop()
    {
            var id = this.Product.ProductID
            this.$router.push({path:`/Products/${id}`, query:{id: id} })
    },
    Compare()
    {

    }
},
props:["Product", "Seller"]
}
</script>

<style>
.ProductCard{
    border: 1px solid #ccc;
}
</style>