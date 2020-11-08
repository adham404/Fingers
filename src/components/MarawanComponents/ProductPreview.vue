<template>
  <div class="ProductPreview">
    <div class="Gallery">
      <img src="../../assets/DiscoverCategoryAssets/test.png" alt="" />
      <img
        style="width: 200px; height: 200px"
        src="../../assets/DiscoverCategoryAssets/test.png"
        alt=""
      />
      <img
        style="width: 200px; height: 200px"
        src="../../assets/DiscoverCategoryAssets/test.png"
        alt=""
      />
    </div>
    <hr />
    <div class="PreviewSection">
      <div class="Header">
        <img
          style="width: 50px; height: 50px"
          src="../../assets/DiscoverCategoryAssets/nina.png"
          alt=""
        />
        <div>{{SellerData.ShopName}}</div>
        <div>Facebook: <a :href="ProductData.FacebookPage">Link</a></div>
        <div>Instagram: <a :href="ProductData.InstagramPage">Link</a></div>
      </div>
      <div class="Description">
          {{ProductData.Description}}
      </div>
      <hr>
      <div class="PriceLike">
          <div>EGP {{ProductData.Price}}</div>
          <button @click="Like">Like</button>
      </div>
      <hr>
      <div v-for="(custo,x) in ProductData.Customization" v-bind:key="x" class="Customization">
          <label for="options">{{custo.Customization}}: </label>
          <select  v-model="OptionSelection[x]" name="Take" id="options">
                <option v-for="(option,x) in custo.Options" v-bind:key="x" :value="option" id="">{{option.OptionValue}}</option>
          </select>
      </div>
      <hr>
      <button @click="AddToCart">Add to Cart</button>
      <button v-if="Added" @click="Proceed">Proceed to Checkout</button>
      <hr>
      <div>About the seller:</div>
      <div>{{SellerData.AboutSeller}}</div>
      <button @click="TextSeller">Text Seller</button>
      <button @click="VisitStore">Visit Store</button>
      <hr>
      <div class="Reviews">
        <div>
          Reviews and Ratings
        </div>
        <div v-for="(Review,x) in ReviewsData" v-bind:key="x">
            <div>#User's Image</div>
            <div>{{Review.UserName}}</div>
            <div>{{Review.DateOfReviews}}</div>
            <div>{{Review.StarRate}}</div>
            <div>{{Review.Review}}</div>
            <hr>
        </div>
        <!--TODO Add your Own Rating -->
        <!--TODO Shop Add Preview -->
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import {EventBus} from "../../main"
export default {
  data: function () {
    return {
      ProductData: "",
      SellerData: "",
      ReviewsData:[],
      UserID:"",
      Added:false,
      OptionSelection:[],
      UserOptionSelection:[]
    };
  },
  methods:{
      Like()
      {
        //TODO Like Counter Function
      },
      Proceed()
      {
        this.$router.push('/Cart')
      },
      async AddToCart2()
      {
        //get UserID
        const auth = firebase.auth()
        let self = this
        await auth.onAuthStateChanged((user) => {
          if(user)
          {
            self.UserID = user.uid
          }
          else
          {
            console.log("No User in here")
          }
        })
      },
      async AddToCart()
      {
        //Get Option Customization Data
        this.ComputeOptions()
        //Get User ID
        const auth = firebase.auth()
        let self = this
        await auth.onAuthStateChanged((user) => {
          if(user)
          {
             self.UserID = user.uid
          }
          else
          {
            console.log("No User in here")
          }
        })
        var db = firebase.firestore()
        var DbRef = db.collection("Users")
        var ProductObject = {
          ProductID: this.ProductData.ProductID,
          Customization: this.UserOptionSelection
        }
        //Check for repeated Products in the Cart
        var CartIDs = []
        await DbRef.doc(this.UserID).get().then((query) => {
          CartIDs = query.data().CartProductID
        })
        var NewProduct = true
        CartIDs.forEach((cart) =>{
          if(cart.ProductID == this.ProductData.ProductID)
          {
            NewProduct = false
          }
        })
        if(NewProduct)
        {
          await DbRef.doc(this.UserID).update({
            CartProductID: firebase.firestore.FieldValue.arrayUnion(ProductObject)
          });
        alert("Added to Cart")
        }
        else
        {
          alert("Product already added to cart go to Cart to freely edit your cart list")
        }
        this.Added = true
        //TODO Add a Cart side Counter
      },
      TextSeller()
      {

      },
      VisitStore()
      {
        // const auth = firebase.auth()
        // let self = this
        // await auth.onAuthStateChanged((user) => {
        //   if(user)
        //   {
        //     self.UserID = user.uid
        //   }
        //   else
        //   {
        //     console.log("No User in here")
        //   }
        // })
        var SellerID = this.ProductData.SellerID
        console.log("The ID of the Seller from the other side is: "+ SellerID)
        EventBus.$emit("VisitStore", SellerID)
        this.$router.push({path:`/SellerStore`, query:{SellerID: SellerID} })
        // this.$router.push('/SellerStore')
      },
      ComputeOptions()
      {
        var length = this.OptionSelection.length
        console.log("the length of the option array is: "+ length)
        console.log("The Value of options array is: "+ this.OptionSelection)
        for (let option = 0; option < this.OptionSelection.length; option++) {
          var val = this.OptionSelection[option].OptionValue
          var Customization = this.ProductData.Customization[option].Customization
          var OptionObject = 
          {
            Title: Customization,
            Option: val
          }
          this.UserOptionSelection.push(OptionObject)
        }
        this.UserOptionSelection.forEach((data)=>{
          console.log(data);
        })
      }
  },
  async mounted() {
    var id = this.$route.query.id;
    console.log("the Product data id is: ", id);
    //Get Product Data
    var db2 = firebase.firestore()
    var DBref2 = db2.collection("Products")
    await DBref2.doc(id).get().then((query) => {
        this.ProductData = query.data()
    })
    console.log("The Whole Product Data is: "+ this.ProductData)
    var SellerID = this.ProductData.SellerID
    var ProductID = this.ProductData.ProductID

    console.log("the ID of the Seller is: "+ SellerID)
    var length = this.ProductData.Customization.length
    // console.log(length)
    this.OptionSelection = new Array(length)
    //Get Seller Data
    if (SellerID == "null") {
      this.SellerData = {
        ShopName: "Fingers Team",
        AboutSeller:
          "This text is a small description of the seller what he does why he does his story stuff like that and of course all of this will. elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
      };
    }
    else
    {
        var db = firebase.firestore()
        var DBRef = db.collection("Users")
        await DBRef.doc(SellerID).get().then((query)=>{
            this.SellerData = query.data
        })
    }
    //Get Reviews and Rates data
    var db1 = firebase.firestore()
    var DBref = db1.collection("Reviews")
    await DBref.get().then((query)=>{
        query.forEach((doc) => {
            var id = doc.data().ProductID 
           if( id == ProductID)
            {
                this.ReviewsData.push(doc.data())
            }
        });
    })
    var length1 = this.ReviewsData.length
    console.log("Number of Reviews is: "+ length1)
    if( length1 == 0)
    {
        this.ReviewsData = [
            {
                DataOfReviews: "10/06/2020",
                Review: "This Product is Well",
                StarRate: 4,
                UserName: "Jack glafnakias",
            },
            {
                DataOfReviews: "10/06/2009",
                Review: "I find this product spectauctular",
                StarRate: 3,
                UserName: "Zack Afron",
            },
        ]
    }
    // await EventBus.$on("SendID", (id)=>{
    //     console.log("Heeeyo")
    //     this.ProductID = id
    // })
  },
};
</script>

<style>
.Gallery {
  border: 1px solid #ccc;
}
.Header{
    display: flex;
    border: 1px solid #ccc;
}
</style>