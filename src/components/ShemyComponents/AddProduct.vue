<template>
  <div class="AddProduct">
    Please add Your Product
    <div>
      <label for="ProductTitle">Product Title</label>
      <input v-model="ProductTitle" id="ProductTitle" type="text">
      <hr>
      <label for="Product">Product Description</label>
      <input label="Product" v-model="ProductDescription" type="text" />
      <hr>
      <label for="price">Price</label>
      <input v-model="ProductPrice" id="price" type="text" />
      <hr />
      <label for="photo">Add Photo</label>
      <button @click="AddPhoto">Add File</button>
      <hr />
      <div class="ProductCategory">
          <label for="Category">Please Select your product Category</label>
          <select v-model="CategoryValue" name="" id="Category">
            <option value="Accessories">Accessories</option>
            <option value="Hanbags">Handbags</option>
            <option value="HomeDecor">Home Decor</option>
            <option value="Crochet">Crochet</option>
            <option value="Art">Art&Paintings</option>
            <option value="Gifts">Gifts</option>
            <option value="Collectibles">Collectibles</option>
          </select>
      </div>
      <div v-if="!FCustomization">
      <button v-for="(ProductData,x) in AllProductData" v-bind:key="x" @click="EditCust(x)">{{ProductData.Customization}}</button>
      <button @click="AddProduct">Add a product customization</button>
      <p>
        (You could add different options for your product from here like color,
        size or even something completely creative! Have fun!)
      </p>
      </div>
      <div v-if="FCustomization">
          <div>Title of Customization</div>
          <input v-model="Title" type="text" name="" id="" placeholder="Color">
          <div>
          <input v-for="(Option,x) in ProductOption" v-bind:key="x" v-model="Option.OptionValue" type="text">
          <button @click="AddOption">Add an Option</button>
          </div>
          <button @click="DoneCustomization">Done</button>
      </div>
      <hr>
      <button @click="Done">Done</button>
      <button @click="MyProducts">My Products list</button>
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
          SellerID: SellerID
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

<style>
</style>