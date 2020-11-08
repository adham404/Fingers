<template>
    <div>
        <div class="Intro">
            <h3>Welcome to fingers. A place where you can</h3>
            <div class="Buttons">
                <button @click="Buy">Buy</button>
                <button @click="Sell">Sell</button>
            </div>
            <h3>any creative product you can think of.</h3>
        </div>
        <img src="@/assets/ProductPic.jpg" alt="" class="Shadow">
        <h2>Gifts for him</h2>
        <div class="Container">
            <div v-for="n in 60" :key = "n">
                <ProductCard :Demo="true" />
            </div>
        </div>
        <div class="Intro">
            <h3>If you have something creative to show people, don't hesitate and sign-up we celebrate creativity</h3>
            <div class="Buttons">
                <button id="StartShop">start a fingers shop</button>
            </div>
        </div>
        <div v-for="(Product,x) in ProductDiscovery" v-bind:key="x">
        <h2>{{Product.Category}} ></h2>
        <img :src="getImgUrl(Product.Url)" alt="" class="Shadow">
        <h2>Gifts for {{Product.Carousel}}</h2>
        <div class="Container">
            <div v-for="n in 60" :key = "n">
                <ProductCard :Product="Product.Product" />
            </div>
        </div>
        </div>     
        <hr>   
        <!-- <div class="Container">
            <div v-for="n in 60" :key = "n">
                <ProductCard :Demo="true" />
            </div>
        </div> -->
        <div class="MailList">
            <p id="MailList">Subscribe to our mail list to get notified with your personalized products</p>
            <input type="text" class="Shadow">
            <button>Submit</button>
        </div>
    </div>
</template> 

<script>
import ProductCard from '@/MobileComponents/ShemyComponents/ProductCard.vue'
import firebase from "firebase"
// import teez from "../../assets/ProductPhotographs/BlueNecklace.jpg"
export default {
    data:function()
    {
        return{
            test:'Crcohet.jpg',
            ProductDiscovery:[
            {
              Category:"Accessories",
              Url: 'BlueNecklace.jpg',
              Carousel: "Him",
              Product:{
                    ProductName: "Choco Glass",
                    Price: 25,
                    url2:'Chocolarglass.jpg'
              },
            },
            {
              Category:"Handbags",
              Url:'HandBag.jpg',
              Carousel: "Her",
              Product:{
                  ProductName:"Chocolate Bouquet",
                  Price: 30,
                  url2:'ChocolateBouquet.jpg'
              },
            },
            {
              Category:"HomeDecor",
              Url:'Dana.jpg',
              Product:{
                  ProductName:"Home Vase",
                  Price: 35,
                  url2:'HomeVase.jpg'
              },
              Carousel: "Mother",
            },
            {
              Category:"Crochet",
              Url:'Crcohet.jpg',
              Product:{
                  ProductName:"Islamic Lantern",
                  Price: 55,
                  url2:'Fanos.jpg',              
              },
              Carousel: "Father"              
            },
            {
              Category:"Art&Paintings",
              Url:'Tray.jpg',
              Product:{
                  ProductName:"Birthday Box",
                  Price: 65,
                  url2:'Birthday.jpg'
              },
              Carousel: "Birthday",
            },
            {
              Category:"Gifts",
              Url:'Gift.jpg',
              Product:{
                  ProductName:"Memory Album",
                  Price: 40,
                  url2:'MemoryAlbum.jpg',
              },
              Carousel: "Party"
            },
            {
              Category:"Collectibles",
              Url:'Collect.jpg',
              Product:{
                  ProductName:"XMas Box",
                  Price: 60,
                  url2:'Xmasbox.jpg',
              },
              Carousel: "Xmas"
            }
            ],
            Email:"",
            Validmail:false,
            maildone:false,
            UserStatus:"",
            UserID:"",
            UserData:""
        }
    },
    async mounted()
    {
      //Check for authentication
      const auth = firebase.auth()
      let self = this
      await auth.onAuthStateChanged((user) => {
        if(user)
        {
          self.UserID = user.uid
        }
        else{
          console.log("No User in herer")
        } 
      })
      //Get User Data
      var db = firebase.firestore()
      var DbRef = db.collection("Users")
      if(this.UserID != "")
      {
        await DbRef.doc(this.UserID).get().then((query)=>{
          this.UserData = query.data()
        })
        this.UserStatus = this.UserData.UserName
      }
      else{
        this.UserStatus = "NO USER"
      }
    },
  methods: {
    Buy() {
      this.$router.push("/Shop");
    },
    getImgUrl(pic)
    {
        return require('../../assets/ProductPhotographs/'+pic)
    },
    async checkauth()
    {
      const auth = firebase.auth()
      await auth.onAuthStateChanged((user) => {
        if(user)
        {
          this.UserID = user.uid
        }
        else{
          console.log("No User in here")
        }
      })
      alert("the id is: "+ this.UserID)      
    },
    async Sell() {
      const auth = firebase.auth()
      await auth.onAuthStateChanged((user) => {
        if(user)
        {
          this.UserID = user.uid
        }
        else{
          console.log("No User in here")
        }
      })
      if(this.UserData.Seller)
      {
        this.$router.push("/SellerDashboard");
      }
      else{        
        this.$router.push("/SellerRegistration");
      }
    },
    Blog() {
      console.log("Blog isn't available now");
    },
    Subscribe()
    {
        if(this.Email == "")
        {
            this.Validmail = true;         
        }
        else
        {
            firebase.database().ref('Emails').push({
                Email: this.Email
            })
            this.Email = ""
            this.maildone = true;
            this.Validmail = false;
        }
    }
  },
  components:{
    //   ProductDiscovery,
    //   Carousel,
      ProductCard  
      }
};
</script>

<style scoped>
#MailList{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    text-align: center;
}
input{
    width: 90%;
    border-radius: 20px;
    border: none;
    height: 35px;
    outline: none;
    padding-left: 1rem;
    margin-bottom: 20px;
}
.MailList{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}
#StartShop{
    width: 200px;
    height: 40px;
}
.Buttons{
    display: flex;
    flex-direction: row;
    width: 60%;
    justify-content: space-around;
}
button{
    width: 100px;
    height: 25px;
    border-radius: 20px;
    background-color: #AAE2DF;
    border: none;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
}
.Intro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: pink;
    height: 200px;
    margin-bottom: 40px;
    margin-top: 20px;
}
h3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    text-align: center;
}
h2{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
}
.Container{
    display: flex;
    overflow-x: scroll;
}
img{
    width: 80%;
    margin-left: 10%;
    height: 300px;
    margin-bottom: 60px;
    border-radius: 10px;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}

</style>