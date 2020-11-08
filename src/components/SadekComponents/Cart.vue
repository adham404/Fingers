<template>
  <div class="Checkout">
      <div class="Products">
        <ProductCard v-for="(Product, x) in ProductData" v-bind:key="x" :Product="Product"></ProductCard>
      </div>
      <hr>
      <div class="Reciept"> 
          <div v-for="(Product, x) in ProductData" v-bind:key="x">
                {{Product.ProductName}}   Price {{Product.Price}} 
          </div>
          <hr>
          <div>Cost {{TotalCost}}</div>
          <div>Delivery 20</div>
          <hr>
          <div>Total Cost: {{TotalCost + 20}}</div>
      </div>
      <button @click="PlaceOrder">Place order</button>
  </div>
</template>

<script>
import firebase from "firebase"
import ProductCard from "../ShemyComponents/ProductCard"
export default {
data:function()
{
  return{
    UserID:"",
    UserData:"",
    ProductID:[],
    ProductData:[],
    TotalCost: 0
  }
},
components:{
  ProductCard
},
methods:{
  PlaceOrder()
  {

  }
},
async mounted()
{
  //TODO Solve Frequent Data loss refresh error
  //TODO Add Remove/Product feature in Cart
  //Get Seller Credentials
  const Auth = firebase.auth()
  let self = this
  await Auth.onAuthStateChanged((user) => {
    if(user)
    {
      self.UserID = user.uid
    }
    else
    {
      console.log("No User in here")
    }
  })
  //Get Cart array from the Seller doc
  var db = firebase.firestore()
  var DBRef = db.collection("Users")
  await DBRef.doc(this.UserID).get().then((query) => {
    this.UserData = query.data()
  })
  this.UserData.CartProductID.forEach((cart) => {
    this.ProductID.push(cart.ProductID)
  })
  var Dbref = db.collection("Products")
  var cost = 0;
  this.ProductID.forEach(async (id) => {
     await Dbref.doc(id).get().then((query) => {
      this.ProductData.push(query.data())
      cost = cost + query.data().Price
      this.TotalCost = cost
    })
  })
  
  //Calculate the Product Cost
  // this.ProductData.forEach((product) => {
  //   console.log("Price: "+product.Price)
  //   this.TotalCost = this.TotalCost + product.Price
  // })

  }
}
</script>

<style>

</style>