<template>
  <div class="SellerDashboard">
      <div v-if="!Edit" class="ShopDetails">
          <img src="../../assets/DiscoverCategoryAssets/test.png" alt="">
          <div>Shop Name: </div>
          <div>{{UserData.ShopName}}</div>
          <div>About Seller: </div>
          <div>{{UserData.AboutSeller}}</div>
          <div>Address: </div>
          <div>{{UserData.Address}}</div>
          <div>Facebook page link: </div>
          <div>{{UserData.FaceBookLink}}</div>
          <div>Instagram account link</div>
          <div>{{UserData.InstagramLink}}</div>
          <div>Mobile Number</div>
          <div>{{UserData.MobileNumber}}</div>
      </div>
      <div v-if="Edit" class="EditDetails">
        <img src="../../assets/DiscoverCategoryAssets/test.png" alt="">
        <button @click="EditPhoto">Edit Photo</button>
        <label for="ShopName">Shop Name</label>
        <input v-model="ShopName" type="text" name="" id="">
        <label for="AboutSeller">AboutSeller</label>
        <input v-model="AboutSeller" type="text" name="" id="AboutSeller">
        <label for="Address">Address</label>
        <input v-model="Address" type="text" name="" id="Address">
        <label for="face">Facebook page link</label>
        <input v-model="FaceBookLink" type="text" name="" id="face">
        <label for="Instagram">Instagram page link</label>
        <input v-model="InstagramLink" type="text" name="" id="Instagram">
        <label for="MobileNumber">Mobile Number</label>
        <input v-model="MobileNumber" type="text" name="" id="MobileNumber">
        <button @click="Done">Done</button>
      </div>
      <button v-if="!Edit" @click="EditDetails">Edit Shop Details</button>
      <hr>
      <button @click="AddProduct">Add a Product</button>
      <div class="MyProducts">
          <ProductCard v-for="(Product,x) in SellerProductData" v-bind:key="x" :Product="Product" :Seller="true"></ProductCard>
      </div> 
  </div>
</template>

<script>
import ProductCard from "../ShemyComponents/ProductCard"
import firebase from "firebase"
export default {
data:function()
{
    return{
      UserID:"",
      UserData:"",
      ShopName:"",
      AboutSeller:"",
      Address:"",
      SellerProductData:[],
      FaceBookLink:"",
      InstagramLink:"",
      MobileNumber:"",
      Edit: false
    }
},
components:{
  ProductCard
},
methods:{
  EditDetails()
  {
    this.Edit = true
  },
  AddProduct()
  {
    // console.log("The Data is: "+ this.UserData)
    this.$router.push('/AddProduct')
  },
  EditPhoto()
  {
    //TODO Upload another image using Backblaze Cloud Function
  },
  async Done()
  {
    if(this.AboutSeller == "" || this.Address == "" || this.MobileNumber == "" || this.ShopName == "")
    {
      alert("Please fill in the Shop details")
    }
    else{
      var db = firebase.firestore()
      var DbRef = db.collection("Users")
      await DbRef.doc(this.UserID).update({
        AboutSeller: this.AboutSeller,
        Address: this.Address,
        MobileNumber: this.MobileNumber,
        ShopName: this.ShopName
    })
      await DbRef.doc(this.UserID).get().then((query) => {
      this.UserData = query.data()
     })
      this.Edit = false
    }
  }
},
async mounted()
{
  //Get Seller Data
  const auth = firebase.auth()
  let self = this
  await auth.onAuthStateChanged((user) => {
    if(user)
    {
      self.UserID = user.uid
    }
    else 
    {
      console.log("No User in here")
    }
  })
  //TODO Refresh Synchronus error
  var db = firebase.firestore()
  var DbRef = db.collection("Users")
  await DbRef.doc(this.UserID).get().then((query) => {
    this.UserData = query.data()
  })
  //Assign actual values to edit values
  this.ShopName = this.UserData.ShopName
  this.AboutSeller = this.UserData.AboutSeller
  this.Address = this.UserData.Address
  this.FaceBookLink = this.UserData.FaceBookLink
  this.InstagramLink = this.UserData.InstagramLink
  this.MobileNumber = this.UserData.MobileNumber
  //Get Seller Products
  var DbRef2 = db.collection("Products")
  await DbRef2.get().then((query) => {
    query.forEach((doc) => {
      if(doc.data().SellerID == this.UserID)
      {
        this.SellerProductData.push(doc.data())
      }
    })
  })
}
}
</script>

<style>
.EditDetails{
  display: flex;
  flex-direction: column;
}
.ShopDetails div{
  border: 1px solid #ccc;
}
</style>