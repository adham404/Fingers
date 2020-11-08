<template>
    <div>
        <label for="">About the seller:</label>
        <br>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br>
        <label for="">Address <h5>(It is better if you fill this one in arabic to make it easier for the delivery service to find you)</h5></label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br>
        <label for="">Mobile Number</label>
        <br>
        <input type="text">
        <br>
        <label for="AddFile">Add Product Pic</label>
        <button id="AddPicture" class="Shadow">Add Picture</button>
        <br>
        <label for="">Shop Name</label>
        <br>
        <input type="text">
        
        <button>Save</button>
    </div>
</template>

<script>
    export default {
        
    }
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