<template>
    <div class="SellerStore">
        <div class="ShopDetails">
            <h3>Shop Details:</h3>
        <label for="">Shop Name:</label>
        <input type="text" v-model="ShopName">
        <label for="">Phone Number:</label>
        <input type="text" v-model="MobileNumber">
        <label for="">Address:</label>
        <textarea v-model="Address" name="" id="" cols="30" rows="10" ></textarea>
        <label for="">About Seller:</label>
        <textarea v-model="AboutSeller" name="" id="" cols="30" rows="10"></textarea>        
        <button @click="Done">Save Changes</button>
        </div>
        <br>
        <button @click="AddProduct">Add Product</button>
        <img src="@/assets/ProductPic.jpg" alt="fe 7ewar">
        <h3>{{ShopName}}</h3>
        <div class="Shop">
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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