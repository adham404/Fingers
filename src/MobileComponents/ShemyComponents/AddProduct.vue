<template>
    <div class="Container">
        <div class="Form">
            <label for="ProductDescription">Product Description</label>
        <textarea name="ProducDescription" id="ProductDescription" cols="30" rows="10"></textarea>
        <br>
        <br>
        <label for="Price">Price</label>
        <br>
        <input type="text" name="Price" id="Price">
        <br>
        <br>
        <label for="AddFile">Add Product Pic</label>
        <button id="AddPicture" class="Shadow">Add Picture</button>
        <br>
        <br>
        <button :click = "OpenWindow" id="AddCustomisation" class="Shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="27.941" height="27.941" viewBox="0 0 27.941 27.941">
            <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M25.945,13.227H16.964V4.246a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v8.981H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h8.981v8.981a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19.214h8.981a2,2,0,0,0,2-2v-2A2,2,0,0,0,25.945,13.227Z" transform="translate(0 -2.25)"/>
            </svg>
            Add Product customisation
        </button>
        <div class="CustomisationForm Shadow">
            <label for="">Add title of customisation</label>
            <input type="text" placeholder="Customisation title">
            <h4>Blue</h4>
            <button :click = "OpenWindow" id="AddCustomisation" class="Shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="27.941" height="27.941" viewBox="0 0 27.941 27.941">
            <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M25.945,13.227H16.964V4.246a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v8.981H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h8.981v8.981a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19.214h8.981a2,2,0,0,0,2-2v-2A2,2,0,0,0,25.945,13.227Z" transform="translate(0 -2.25)"/>
            </svg>
            Add Product customisation
            </button>

        </div>
        <br>
        <br>
        <label for="">Product Name</label>
        <br>
        <input type="text">
        <br>
        <br>
        <label for="">Product Category</label>
        <br>
        <select class="Shadow" name="ProductCategory" id="ProductCategory">
        <option value="Accessories">Accessories</option>
        <option value="Handbags">Handbags</option>
        <option value="Home Decor">Home Decor</option>
        <option value="4:00 pm">Clothes</option>
        <option value="5:00 pm">Art&paintings</option>
        <option value="6:00 pm">Gifts</option>
        <option value="7:00 pm">Collectibles</option>
        </select>
        </div>
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h4{
    margin: 8px;
}
.CustomisationForm{
    height: 200px;
    margin-top: 15px;
    padding-left: 10px;
    overflow-y: scroll;
}
.CustomisationForm input{
    border: none;
    border-bottom: 2px solid black;
    border-radius: 0px;
}
.Form{
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
}
select{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    width: 250px;
    height: 35px;
    border: none;

}
#AddCustomisation{
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 250px;
    height: 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
#AddPicture{
    background-color: white;
    width: 100px;
    height: 30px;
    margin-left: 15px;
    border-radius: 202px;
    border: none;
}
textarea{
    height: 200px;
    width: 250px;
}
label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
}
input{
    height: 25px;
    border-radius: 5px;
    width: 250px;
}

</style>