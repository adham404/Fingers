<template>
    <div class="Container">
        
        <div class="Form">
            <h1>Sign Up</h1>
            <h4>Don't have and account? <p>Login.</p> </h4>
            <label for="Username">Username</label>
            <br>
            <input v-model="UserName" type="text" name="Username" id="Username">
            <br>
            <label for="Email">Email</label>
            <br>
            <input v-model="Email"  type="email" name="email" id="email">
            <br>
            <label for="password">Password</label>
            <br>
            <input v-model="Pass" type="password" name="password" id="password">
            <br>
            <label for="password">Confirm Password</label>
            <br>
            <input v-model="ConfirmPass" type="password" name="password" id="password">
            <br>
            <p>Already have and account <router-link to="/Login">Login</router-link></p>
            <button @click="SignUp">Sign Up</button>
        </div>
        

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

<style scoped>
h4{
    margin: 2px;
    
}
p{
    margin: 2px;
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
}
.Container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>