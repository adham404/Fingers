<template>
    <div class="Container">
       
        <div class="ShopHeader">
            
            <img src="@/assets/ProductPic.jpg" alt="">
            <h3>{{SellerData.ShopName}}</h3>
        </div>
         <h2>Wooden Wedding book</h2>
        <div class="ProductPreview">
            <img :src="getImgUrl(ProductData.url2)" alt="" class="Product Shadow">
        </div>
        <div class="Product Description">
            <h4>Product description</h4>
            <p>
                {{ProductData.Description}}
            </p>

        </div>
        <div class="Price">
            <h4>Egp 25.00</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.827" height="18.734" viewBox="0 0 19.827 18.734">
            <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M15.671,3.938h-.04a4.661,4.661,0,0,0-3.843,2,4.661,4.661,0,0,0-3.843-2h-.04a4.467,4.467,0,0,0-4.53,4.355,9.1,9.1,0,0,0,1.933,5.114,33.291,33.291,0,0,0,6.48,5.946,33.291,33.291,0,0,0,6.48-5.946A9.1,9.1,0,0,0,20.2,8.292,4.467,4.467,0,0,0,15.671,3.938Z" transform="translate(-1.875 -2.438)" fill="#fff" stroke="#000" stroke-width="3"/>
            </svg>
        </div>
        <br>
      <div v-for="(custo,x) in ProductData.Customization" v-bind:key="x">
          <label for="options">{{custo.Customization}}: </label>
          <select class="Shadow"  v-model="OptionSelection[x]" name="Take" id="options">
                <option v-for="(option,x) in custo.Options" v-bind:key="x" :value="option" id="">{{option.OptionValue}}</option>
          </select>
      </div>        
        <!-- <label for="">..Title of Cust..:</label>
        <select name="timing" id="timing" class="Shadow">
        <option value="1:00 pm">1:00 pm</option>
        <option value="2:00 pm">2:00 pm</option>
        <option value="3:00 pm">3:00 pm</option>
        <option value="4:00 pm">4:00 pm</option>
        <option value="5:00 pm">5:00 pm</option>
        <option value="6:00 pm">6:00 pm</option>
        <option value="7:00 pm">7:00 pm</option>
        <option value="8:00 pm">8:00 pm</option>
        <option value="9:00 pm">9:00 pm</option>
        </select> -->
        <button @click="AddToCart" id="Add">Add to cart</button>
        <button @click="TextSeller" id="Message">Message Seller</button>
        <button @click="VisitStore" id="Visit">Visit Store</button>
    </div>
</template>

<script>
import firebase from "firebase"
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
    getImgUrl(pic)
    {
        return require('../../assets/ProductPhotographs/'+pic)
    },      
      Proceed()
      {
        this.$router.push('/Cart')
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
        // EventBus.$emit("VisitStore", SellerID)
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
    //   var flag =this.$route.query.Real
        var id = this.$route.query.id;
    //   console.log("I got in there because it's: "+ flag)
    if(id != "123")
    {
        
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
                this.SellerData = query.data()
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
    }
    else
    {
        this.ProductData = this.$route.query.ProductData2
        this.SellerData = this.$route.query.SellerData2
        console.log("Both of Data are: Product: "+ this.ProductData + " Seller: "+ this.SellerData)
    }
    // await EventBus.$on("SendID", (id)=>{
    //     console.log("Heeeyo")
    //     this.ProductID = id
    // })
  },
};
</script>

<style scoped>
.Price{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.Price h4{
    border: none;
}
h2{
    margin: 5px;
}
label{
    align-self: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
}
button{
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: none;
    align-self: center;
    margin-bottom: 15px;
    background-color: #AAE2DF;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
}
#Message{
    background-color: #FACFD9;
}
#Visit{
    background-color: #FF9D6C;
}
.Container{
    display: flex;
    flex-direction: column;
}
select{
    background-color: white;
    border: none;
    height: 30px;
    width: 300px;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    align-self: center;
    margin-bottom: 15px;
}
p{
    margin: 0;
    margin-left: 10px;
}
h4{
    border-bottom: 3px solid black;
    font-size: 1.2rem;
    margin: 0;
    margin-left: 10px;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
.ProductPreview{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
}
.Product{
    width: 350px;
    border-radius: 8px
}
.ShopHeader{
    display: flex;
    border-bottom:3px solid black
}
.ShopHeader img{
    height: 60px;
    width: 60px;
    border-radius: 60px;
}

</style>