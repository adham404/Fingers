<template>
    <div>
        <label for="">About the seller:</label>
        <br>
        <textarea v-model="AboutSeller" name="" id="" cols="30" rows="10"></textarea>
        <br>
        <label for="">Address <h5>(It is better if you fill this one in arabic to make it easier for the delivery service to find you)</h5></label>
        <textarea v-model="Address" name="" id="" cols="30" rows="10"></textarea>
        <br>
        <label for="">Mobile Number</label>
        <br>
        <input v-model="MNumber" type="text">
        <br>
        <label for="AddFile">Add Product Pic</label>
        <button @click="AddFile" id="AddPicture" class="Shadow">Add Picture</button>
        <br>
        <label for="">Shop Name</label>
        <br>
        <input v-model="ShopName" type="text">
        
        <button @click="CreateShop">Save</button>
    </div>
</template>

<script>
import firebase from "firebase";
import {EventBus} from "../../main"
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

<style scoped>
textarea{
    height: 200px;
}
h5{
    margin: 0px;
}
label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
}
input{
    height: 25px;
    border-radius: 5px;
    width: 200px;
}
button{
    background-color: #AAE2DF;
    width: 150px;
    height: 35px;
    border: none;
    border-radius: 20px;
    margin-top: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 20px;
}
.Container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>