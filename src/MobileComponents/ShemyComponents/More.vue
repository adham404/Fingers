<template>
    <div>
        <h1>Welcome, Username</h1>
        <h2 @click="ToChat">Chat List</h2>
        <h2 @click="Order">Orders</h2>
        <h2 v-if="UserIn" @click="Dashboard">Seller Dashboard</h2>
        <h2 v-if="!UserIn" @click="SignUp">Sign UP</h2>
        <h2 v-if="!UserIn" @click="Login">Login</h2>
        <button v-if="UserIn" @click="SignOut">Sign Out</button>
    </div>
</template>

<script>
import firebase from "firebase"
    export default {
    data:function()
    {
        return{
            UserID:"",
            UserIn: false
        }
    },
    async mounted()
    {
        const auth = firebase.auth()
        let self = this
        await auth.onAuthStateChanged((user) => {
            if(user)
            {
                self.UserID = user.uid
                self.UserIn = true
            }
            else
            {
                console.log("No User Racism")
            }
        })
    },
    methods:{
        ToChat()
        {
            this.$router.push('/ChatList')
        },
        Order()
        {
            this.$router.push('/ShopOrders')
        },
        Dashboard()
        {
            this.$router.push('/SellerDashboard')
        },
        SignUp()
        {
            this.$router.push('/SignUp')   
        },
        Login()
        {
            this.$router.push('/Login')
        },
        SignOut()
        {
        const auth = firebase.auth()
        auth.signOut();
        alert("Signed out!")
        this.UserIn = false
        }
    }
        
    }
</script>

<style scoped>
h1{
    border-bottom: 2px solid black;
}
h2{
    margin: 8px;
    background-color: #AAE2DF;
}
button{
    border: none;
    background-color:#FACFD9;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: auto ;
}

</style>