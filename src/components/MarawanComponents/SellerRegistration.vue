<template>
  <div>
    <div v-if="!UserIn" class="Step1">
      <SignUp :SellerRegistration="true"></SignUp>
    </div>
    <hr />
    <div v-if="Step1&&!Step2Dn" class="Step2">
      <div>Shop Name: </div>
      <input v-model="ShopName" type="text" name="" id="">
      <div>About the Seller:</div>
      <input v-model="AboutSeller" type="text" name="" id="" />
      <div>
        Address(It's better you fill this one in Arabic to make it easier for
        the delivery service to find you)
      </div>
      <input v-model="Address" type="text" name="" id="" />
      <div>Mobile Number</div>
      <input v-model="MNumber" type="text" name="" id="" />
      <div>Add Logo</div>
      <button @click="AddFile">Add File</button>
      <label for="FB">Facebook Link page (optional)</label>
      <input v-model="FacebookPage" id="FB" type="text">
      <label for="In">Instagram Link page (optional)</label>
      <input v-model="InstagramPage" id="IN" type="text">
      <p>Don't worry you can change any of these data at anytime.</p>
      <button @click="CreateShop">Create a Fingers shop</button>
    </div>
    <div v-else>
      <div v-if="!Step2Dn">
      Waiting for First Step
      </div>
    </div>
    <hr />
    <div v-if="Step1&&Step2" class="Step3">
      <div>
        Congratulations! You now officially own a store on Fingers the go to
        Marketplace for handmade products. The next is going to be really easy.
        You just need to start adding your products and be on your way to
        selling and making money!
      </div>
      <button @click="AddProduct">Start adding Products!</button>
      <div>
        At Fingers we really celebrate creative hands and do our best to provide
        assistance. So please if you face any complications please do not
        hesitate to call this number 010000000 and a representative will walk
        you through the whole process and we will take care of everything.
      </div>
    </div>
    <div v-else>
        Waiting for Step1 & Step2
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import {EventBus} from "../../main"
import SignUp from "../ShemyComponents/SignUp";
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
    SignUp
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

<style>
</style>