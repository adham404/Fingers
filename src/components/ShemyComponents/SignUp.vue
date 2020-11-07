<template>
  <div class="Signup">
      <label for="UserName">UserName</label>
      <input v-model="UserName" type="text" name="" id="UserName" placeholder="Mo123">
      <label for="Email">Email</label>
      <input v-model="Email" type="text" name="" id="Email" placeholder="Mo123@gmail.com">
      <label for="Pass">Password</label>
      <input v-model="Pass" type="password" name="" id="Pass">
      <label for="Confirm">Confirm Password</label>
      <input v-model="ConfirmPass" type="password" name="" id="Confirm">
      <div>Already have and account <router-link to="/Login">Login</router-link></div>
      <button @click="SignUp">Signup</button>
  </div>
</template>

<script>
import firebase from "firebase"
import {EventBus} from "../../main"
export default {
  data:function()
  {
    return{
      Email:"",
      UserName:"",
      Pass:"",
      ConfirmPass:"",
      UserID:""
    }
  },
  props:['SellerRegistration'],
  methods:{
    async SignUp()
    {
      if(this.Email == "" || this.UserName == "" || this.Pass == "" || this.ConfirmPass == "")
      {
        alert("Please Fill in the Missing Contents")
      }
      else
      {
        if(this.Pass != this.ConfirmPass)
        {
          alert("Confirmation Password doesn't match with the Password")
        }
        else
        {
          const Auth = firebase.auth()
          await Auth.createUserWithEmailAndPassword(this.Email,this.Pass).catch((error) => {
            alert(error.message)
          })
          let self = this
          await Auth.onAuthStateChanged((user) => {
            if(user)
            {
              self.UserID = user.uid
            }
            else
            {
              console.log("User is out")
            }
          })
          //Create a User Doc
          var db = firebase.firestore()
          var DbRef = db.collection("Users")
          await DbRef.doc(this.UserID).set({
            AboutSeller:"",
            Address:"",
            CartProductID:[],
            CompareProductID:[],
            Email: this.Email,
            FaceBookLink:"",
            ShopName:"",
            Seller: false,
            FavProductID:[],
            UserName: this.UserName,
            InstagramLink:"",
            MobileNumber:"",
            password: this.Pass
          })
          alert("Sign up Successfull")
          if(this.SellerRegistration)
          { 
            EventBus.$emit("SignUpDone");
          }
          else
          {
            this.$router.push('/');
          }
        }
      }
    }
  }
}
</script>

<style>
.Signup{
  display: flex;
  flex-direction: column;

}
</style>