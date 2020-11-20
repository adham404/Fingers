<template>
    <div class="SuperContainer">
        <div class="Container">
                <div class="Login">
                <h1>Seller Registration</h1>
                <h4>Already registered as a seller? Go to dashboard.</h4>
                <label for="">About the seller:</label>
                <br>
                <textarea name="" id="" cols="30" rows="10" class="Shadow"></textarea>
                <br>
                <label for="">Address <h5>(It is better if you fill this one in arabic to make it easier for the delivery courier to find you)</h5></label>
                <textarea name="" id="" cols="30" rows="10" class="Shadow"></textarea>
                <br>
                <label for="">Mobile Number</label>
                <br>
                <input type="text">
                <br>
                <label for="AddFile">Add Logo</label>
                <button id="AddPicture" class="Shadow">Add Picture</button>
                <br>
                <label for="">Shop Name</label>
                <br>
                <input type="text">                
                <button>Save</button>
                </div>
        </div>
    </div>    
</template>




<script>
    export default {   
    }
</script>



<style scoped>
#AddPicture{
    margin-left: 15px;
}
/* h1{
    background-color: #AAE2DF;
    height: 80px;
    margin-top: 0px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    padding-top: 20px;
} */
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
    outline: none;
}
.Login{
    width: 80%;
    /* padding-left: 50px; */
    /* padding-bottom: 50px; */
    
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
textarea{
    height: 150px;
    width: 400px;
    border: none;
    border-radius: 20px;
    outline: none;
    padding-left: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    padding-top: 10px;
}
h5{
    margin: 0px;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
</style>
