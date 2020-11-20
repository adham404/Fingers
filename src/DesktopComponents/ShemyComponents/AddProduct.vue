<template>
    <div class="Container2">
        <div class="ProductPreview">
            <h2 id="Header">This is how customer will view your product</h2>
            <ProductPreview/>
        </div>
        <div class="AddProduct">
            <h2  class="Pink">Add your products here</h2>
            <div class="ProductForm">
                <label for="ProductDescription">Product Description</label>
                <br>
                <textarea name="ProductDescription" id="ProductDescription" cols="30" rows="10" class="Shadow"></textarea>
                <br>
                <label for="ProductName">Product Name</label>
                <br>
                <input type="text" name="ProductName" id="ProductName" class="Shadow">
                <br>
                <br>
                <div class="Middle">
                    <label for="Price">Price</label>
                    <input type="text" name="Price" id="Price" class="Shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="3" viewBox="0 0 63 3" id="RightOfPrice">
                    <line id="Line_20" data-name="Line 20" x2="63" transform="translate(0 1.5)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                    <button id="AddPhoto" class="Shadow">Add Photo</button>
                </div>
                <br>
                <div id="AddCustomisation" class="Shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.941" height="27.941" viewBox="0 0 27.941 27.941">
                    <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M25.945,13.227H16.964V4.246a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v8.981H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h8.981v8.981a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19.214h8.981a2,2,0,0,0,2-2v-2A2,2,0,0,0,25.945,13.227Z" transform="translate(0 -2.25)"/>
                    </svg>
                    Add a product customisation
                </div>
                <div id="Option" class="Shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.953" height="20.953" viewBox="0 0 20.953 20.953">
                        <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z" transform="translate(-7.523 -7.523)"/>
                    </svg>
                    Color
                </div>
                <div class="AddingCustomisation Shadow">
                    <p>Title of customisation</p>
                    <input type="text" placeholder="Add title of your customisation">
                    <div class="AddingOptions">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.953" height="20.953" viewBox="0 0 20.953 20.953">
                            <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z" transform="translate(-7.523 -7.523)"/>
                            </svg>
                            <input type="text">
                        </div>
                        
                        <div id="AddCustomisation" class="Shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27.941" height="27.941" viewBox="0 0 27.941 27.941">
                            <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M25.945,13.227H16.964V4.246a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v8.981H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h8.981v8.981a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19.214h8.981a2,2,0,0,0,2-2v-2A2,2,0,0,0,25.945,13.227Z" transform="translate(0 -2.25)"/>
                            </svg>
                            Add a product customisation
                        </div>
                    </div>
                    <div class="Buttons">
                        <button id="PaleOrange">Cancel</button>
                        <button>Save</button>
                    </div>
                    
                </div>

                <div class="Buttons">
                    <button id="PaleOrange">
                        Done
                    </button>
                    <button>
                        My Product List
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductPreview from "@/DesktopComponents/MarawanComponents/ProductPreview.vue"
    export default {
        components: {
            ProductPreview
        }
    }
</script>

<style scoped>
#ProductName{
    border: none;
    outline: #AAE2DF;
    width: 100%;
    height: 25px;
    border-radius: 5px;
    resize: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 10px 0 0 10px;
}
#Option{
    display:flex;
    align-items: center;
    background-color:white;
    border:none;
    width: 80%;
    align-self: center;
    border-radius: 5px;
    height: 35px;
    font-size: 1.2rem;
    font-weight: bold;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: 10px;
}
#Option svg{
    margin: 0 10px 0 10px;
    height: 18px;
}
label{
    font-size: 1.2rem;
}
.AddingOptions{
    width: 80%;
    margin-left: auto;
    margin-top: 10px;
}
p{
    font-size: 1.2rem;
}
.AddingCustomisation{
    height: 300px;
    padding-left: 20px;
    border-radius: 10px;
    align-self: center;
    width: 85%;
    display: flex;
    flex-direction: column;
}
.AddingCustomisation svg{
    height: 18px;
}
.AddingCustomisation input{
    border: none;
    border-bottom: 2px solid grey;
    outline: grey;
    width: 80%;
    font-size: 1.1rem;
}
.Middle{
    align-self: center;
}
#PaleOrange{
    background-color: #FF9D7A;
}
.Buttons{
    align-self: center;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    width: 80%;
}
.Buttons button{
    display:flex;
    align-items: center;
    background-color:#AAE2DF;
    border:none;
    width: 150px;
    align-self: center;
    border-radius: 20px;
    height: 35px;
    font-size: 1.1rem;
    font-weight: bold;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
#AddCustomisation{
    display:flex;
    align-items: center;
    background-color:white;
    border:none;
    width: 80%;
    align-self: center;
    border-radius: 5px;
    height: 35px;
    font-size: 1rem;
    justify-content: center;
    margin-top: 15px;
}
#AddCustomisation svg{
    height: 25px;
    font-size: 1rem;
}
#AddPhoto{
    border: none;
    background-color: White;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1rem;
    margin-left: 10px;
}
#RightOfPrice{
    height: 5px;
    margin-left: 10px;
}
#Price{
    width: 100px;
    height: 25px;
    border: none;
    margin-left: 10px;
    border-radius: 5px;
}
textarea{
    border: none;
    outline: #AAE2DF;
    width: 100%;
    height: 120px;
    border-radius: 10px;
    resize: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 10px 0 0 10px;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
}
.ProductForm{
    width: 85%;
    height: 800px;
    display: flex;
    flex-direction:column;

    
}
#Header{
    width: 100%;
    background-color: #AAE2DF;
    text-align: center;
    height: 40px;
}
.Pink{
    background-color: #FACFD9;
    text-align: center;
    height: 40px;
    width: 100%;}
.Container2{
    width: 100%;
    display: flex;
}
.ProductPreview{
    width: 65%;
}
.AddProduct{
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>