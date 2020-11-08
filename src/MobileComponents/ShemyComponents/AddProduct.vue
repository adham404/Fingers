<template>
    <div class="Container">
        <div class="Form">
        <label for="">Product Name</label>
        <br>
        <input v-model="ProductTitle" type="text">
            <label for="ProductDescription">Product Description</label>
        <textarea v-model="ProductDescription" name="ProducDescription" id="ProductDescription" cols="30" rows="10"></textarea>
        <br>
        <br>
        <label for="">Product Category</label>
        <br>
        <select v-model="CategoryValue" class="Shadow" name="ProductCategory" id="ProductCategory">
        <option value="Accessories">Accessories</option>
        <option value="Handbags">Handbags</option>
        <option value="Home Decor">Home Decor</option>
        <option value="4:00 pm">Clothes</option>
        <option value="5:00 pm">Art&paintings</option>
        <option value="6:00 pm">Gifts</option>
        <option value="7:00 pm">Collectibles</option>
        </select>
        <br>
        <br>
        <label for="Price">Price</label>
        <br>
        <input v-model="ProductPrice" type="text" name="Price" id="Price">
        <br>
        <br>
        <label for="AddFile">Add Product Pic</label>
        <button @click="AddPhoto" id="AddPicture" class="Shadow">Add Picture</button>
        <br>
        <br>
        <div v-if="!FCustomization">
        <button v-for="(ProductData,x) in AllProductData" v-bind:key="x" @click="EditCust(x)" :click = "OpenWindow" id="AddCustomisation" class="Shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="27.941" height="27.941" viewBox="0 0 27.941 27.941">
            <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M25.945,13.227H16.964V4.246a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v8.981H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h8.981v8.981a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19.214h8.981a2,2,0,0,0,2-2v-2A2,2,0,0,0,25.945,13.227Z" transform="translate(0 -2.25)"/>
            </svg>
            {{ProductData.Customization}}
        </button>
        <button @click="AddProduct"  id="AddCustomisation" class="Shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="27.941" height="27.941" viewBox="0 0 27.941 27.941">
            <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M25.945,13.227H16.964V4.246a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v8.981H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h8.981v8.981a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19.214h8.981a2,2,0,0,0,2-2v-2A2,2,0,0,0,25.945,13.227Z" transform="translate(0 -2.25)"/>
            </svg>
            Add Product customisation
        </button>
        <p>
        (You could add different options for your product from here like color,
        size or even something completely creative! Have fun!)  
        </p>
        </div>
        <div v-if="FCustomization" class="CustomisationForm Shadow">
            <label for="">Add title of customisation</label>
            <input v-model="Title" type="text" placeholder="Customisation title">
            <input v-for="(Option,x) in ProductOption" v-bind:key="x" v-model="Option.OptionValue" type="text" name="" id="heb">
            <button @click="AddOption"  id="AddCustomisation" class="Shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="27.941" height="27.941" viewBox="0 0 27.941 27.941">
            <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M25.945,13.227H16.964V4.246a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v8.981H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h8.981v8.981a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19.214h8.981a2,2,0,0,0,2-2v-2A2,2,0,0,0,25.945,13.227Z" transform="translate(0 -2.25)"/>
            </svg>
                Add Option
            </button>
            <button @click="DoneCustomization">Done</button>
        </div>
        <br>
        <br>
        <button @click="Done">Done</button>
        <button @click="MyProducts">My Products list</button>
        <br>
        </div>
    </div>
</template>

<script>
import firebase from "firebase"
export default {
  data: function () {
    return {
      ProductDescription: "",
      FCustomization:false,
      OptionValue:"",
      CategoryValue:"",
      Title:"",
      UserID:"",
      ProductPrice:0,
      EditCounter:-1,
      ProductOption:[],
      ProductTitle:"",
      AllProductData:[]
    };
  },
  methods:{
      AddOption()
      {
        var object = {
            OptionValue:""
        }
        this.ProductOption.push(object);
      },
      DoneCustomization()
       {
        var object = {
            Customization: this.Title,
            Options: this.ProductOption
        }
        if(this.EditCounter != -1)
        {
            this.AllProductData[this.EditCounter] = object     
            this.FCustomization = false
        }
        else
        {
            this.AllProductData.push(object)
            this.FCustomization = false
        }
        this.ProductOption = [];
        this.EditCounter = -1
        this.Title = ""
       },
      EditCust(counter)
      {
          console.log("The Counter is: "+ counter);
          this.EditCounter = counter
          this.FCustomization = true
          this.ProductOption = this.AllProductData[counter].Options
          this.Title = this.AllProductData[counter].Customization   
      },
      AddProduct()
      {
          this.FCustomization = true
          this.ProductOption = []
      },
      AddPhoto()
      {
        //TODO Backblaze upload shit cloud function
      },
      async Done()
      {
        //TODO Validation Requirde for Add Product Data
        var db = firebase.firestore();
        var DBref = await db.collection("Products");
        var Demo = {}
        var DBref2 =  await db.collection("Products").add(Demo)
        var ProductID = DBref2.id
        // var ProductID = "Product123"
        //Get SellerID
        let self = this;
        const auth = firebase.auth()
        await auth.onAuthStateChanged((user) => {
          if(user)
          {
            self.UserID = user.uid
          }
          else{
            console.log("Imposiiible")
          }
        })
        var SellerID = this.UserID
        var ProductObject = {
          Category: this.CategoryValue,
          Customization: this.AllProductData,
          Description: this.ProductDescription,
          ProductName: this.ProductTitle,
          NumberOfCompares:0,
          NumberOfFavs:0,
          Price: this.ProductPrice,
          ProductID: ProductID,
          SellerID: SellerID,
          url2: 'BlueBracelet.jpg'
        }
        DBref.doc(ProductID).set(ProductObject);
        console.log(ProductObject);
        //TODO Clear Data after finishing
        this.$router.push('/SellerDashboard')
      },
      MyProducts()
      {
        this.$router.push('/SellerDashboard')
      }
  }
};
</script>

<style scoped>
#heb{
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