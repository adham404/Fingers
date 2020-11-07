<template>
  <div class="Login">
      <label for="Email">Email: </label>
      <input v-model="Email" type="text" name="" id="Email">
      <label for="Email">Password: </label>
      <input v-model="pass" type="password">
      <button @click="Login">Login</button>
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

<style>

</style>