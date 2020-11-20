<template>
    <div class="SuperContainer">
        <div class="Container">
        <div class="Login">
            <h1>Login</h1>
        <h4>Don't have an account.SignUp</h4>
        <label for="">Email</label>
        <br>
        <input type="text" name="" id="">
        <br>
        <label for="password">Password</label>
        <br>
        <input type="password">
        <br>
        <button>Login</button>
        </div>
        

    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.SuperContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
button{
    width: 150px;
    height: 30px;
    border-radius: 20px;
    background-color: #AAE2DF;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.Login{
    width: 80%;
}
.Container{
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: pink;
   width: 500px;
   border-radius: 5px;
   padding-bottom: 20px;
}
label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
}
input{
    width: 250px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid black
}
</style>