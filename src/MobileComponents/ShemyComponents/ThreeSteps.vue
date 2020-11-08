<template>
    <div class="Horizontal scroll">
        <h1>Become a fingers seller in 3 steps</h1>
        <div class="Container Shadow">
            <h2>1 Register an account on fingers</h2>
            <Login/>
            <SignUp/>
        
        </div>
        <div class="Container Shadow">
            <h2>2 Fill out your fingers shop profile</h2>
            <SellerRegistration/>
        </div>
        <div class="Container Shadow">
            <h2>3 Start adding your products</h2>
            <p>Congratulation! You are now a shop owner on fingers you can start adding products for people so they can see your creativity.</p>
            <button>Start adding products</button>
        </div>
    </div>
</template>

<script>
import SignUp from '@/MobileComponents/ShemyComponents/SignUp'
import Login from '@/MobileComponents/ShemyComponents/Login'
import SellerRegistration from '@/MobileComponents/MarawanComponents/SellerRegistration'
    export default {
        components:{
            SignUp,
            Login,
            SellerRegistration
        }
    }
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