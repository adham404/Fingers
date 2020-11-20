<template>
    <div class="Horizontal scroll">
        <h1>Become a fingers seller in 3 steps</h1>
        <div v-if="!UserIn" class="Container Shadow">
            <h2>1 Register an account on fingers</h2>
            <Login/>
            <SignUp/>
        
        </div>
        <div v-if="Step1&&!Step2Dn" class="Container Shadow">
            <h2>2 Fill out your fingers shop profile</h2>
            <SellerRegistration/>
        </div>
        <div v-else>
            <div v-if="!Step2Dn">
            Waiting for First Step
        </div>
        </div>        
        <div v-if="Step1&&Step2" class="Container Shadow">
            <h2>3 Start adding your products</h2>
            <p>Congratulation! You are now a shop owner on fingers you can start adding products for people so they can see your creativity.</p>
            <button @click="AddProduct">Start adding products</button>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import {EventBus} from "../../main"
import SignUp from "../ShemyComponents/SignUp";
import Login from "../ShemyComponents/Login"
import SellerRegistration from "../MarawanComponents/SellerRegistration"
export default {
  data: function () {
    return {
      UserIn: false,
      AboutSeller: "",
      Address: "",
      Step2Dn: false,
      MNumber: "",
      Step1: false,
      Step2: false,
      UserID:"",
      ShopName:"",
      InstagramPage:"",
      FacebookPage:""
    };
  },
  methods: {
    AddFile() {
      //TODO Upload Media to Backblaze
    },
    AddProduct()
    {
      this.$router.push('/AddProduct')
    },
    CreateShop()
    {
      //Check for Shop details
      if(this.AboutSeller == "" || this.Address == "" || this.MNumber == "" || this.ShopName == "")
      {
        alert("Please fill in the Shop details")
      }
      else{
        //Check for Validation for Shop details like phone number like location give me location
        var db = firebase.firestore()
        var DBref = db.collection("Users")
        DBref.doc(this.UserID).update({
            AboutSeller: this.AboutSeller,
            Address: this.Address,
            MobileNumber: this.MNumber,
            FaceBookLink: this.FacebookPage,
            InstagramLink: this.InstagramPage,
            ShopName: this.ShopName,
            Seller: true
        })
        alert("You Have Created a Fingers Shop successfully");
        this.Step2 = true;
        this.Step2Dn = true;
      }

    }
  },
  components: {
    SignUp,
    Login,
    SellerRegistration
  },
  async mounted() {
    const auth = firebase.auth();
    let self = this
    await auth.onAuthStateChanged((user) => {
      if (user) {
        self.UserID = user.uid
        this.UserIn = true;
        this.Step1 = true;
      } else {
        this.UserIn = false;
      }
    });
    //Check for Step 1 and 2 
    EventBus.$on("SignUpDone", ()=>{
      this.Step1 = true;
    })
  },
};
</script>

<style  scoped>
button{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 10px;
}
#StatusText{
    text-align: center;
}
.OrderStatus{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
button{
    width: 150px;
    background-color: #AAE2DF;
    height: 30px;
    margin-top: 30px;
}
select{
    height: 20px;
}
textarea{
    width: 80%;
    height: 200px;
}
input{
    width: 80%;
    height: 25px;
}
label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.Confirmation{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-left: 2.5%;
}
.PlaceOrder{
    display: flex;
    width: 100%;
    justify-content: center;
}
button{
    border: none;
    background-color: #AAE2DF;
    width: 200px;
    height: 30px;
    border-radius: 20px;
}
.Item{
    display: flex;
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;
}
.Block{
    display: flex;
    border-top: 3px solid black ;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
}
.BlockV{
    display: flex;
    flex-direction: column;
}
img{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    margin-left: 10px;
}

.Header p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 10px;
}
.Header{
    display: flex;
    align-items: center;
    border-bottom: 3px solid black ;
}
.Container{
    width: 90%;
    margin-left: 5%;
    border-radius: 15px;
    background-color: white;
    height: 600px;
    margin-bottom: 20px;
    overflow-y: scroll;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
</style>