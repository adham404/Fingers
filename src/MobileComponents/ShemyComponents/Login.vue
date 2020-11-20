<template>
    <div class="Container">
        <div class="Form">
            <h1>Login</h1>
            <h4>Don't have and account? <p>Sign Up.</p> </h4>
            <label for="Email">Email</label>
            <br>
            <input v-model="Email" type="text" name="" id="Email">
            <br>
            <label for="password">Password</label>
            <br>
            <input v-model="pass" type="password" name="password" id="password">
            <br>
            <button @click="Login">Login</button>
        </div>
        

    </div>
</template>

<script>
import firebase from "firebase"
export default {
  data:function()
  {
    return{
      Email:"",
      pass:""
    }
  },
  methods:{
    async Login()
    {
      const auth = firebase.auth()
      await auth.signInWithEmailAndPassword(this.Email,this.pass).catch((error) => {
        console.log(error.message);
      })
      alert("Login Successfully")
      this.$router.push('/')
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