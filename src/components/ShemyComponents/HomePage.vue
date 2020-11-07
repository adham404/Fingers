<template>
  <div>
    <div class="Hero">
      <h3>
        Welcome to fingers {{UserStatus}} the online marketplace for unique, special and
        creative handmade products where you can
      </h3>
      <div>
        <button @click="Buy">Buy</button>
        <button @click="Sell">Sell</button>
        <button @click="Blog">Blog</button>
        <button @click="checkauth">Check Auth</button>
      </div>
    </div>
    <Carousel :Kind="General"></Carousel>
    <!-- <div class="Slider">
      <div v-for="(n, x) in 10" v-bind:key="x">#Image</div>
    </div> -->
    <div class="OurMission">
      <h3>Our Mission</h3>
      <div>
        Our mission at fingers is to connect tasteful customers like you with
        creative independent sellers selling all sorts of products on our
        marketplace. Independent sellers lack the opportunity to make a good
        living through their high quality products due to lack of reaching
        special customers like you with a creative artistic eye. We wish to
        provide artists with the chance to be entrepreneurial with their hobbies
        and make money that will encourage them to create even more beautiful
        products just for you amongst 7 billion people on the planet no one will
        have a copy of any product you will buy here and that's the beauty of
        handmade products they last and they are priceless.
      </div>
    </div>
    <hr>
    <div class="Creative">
      <div>
        We celebrate creativity and specialness at fingers if you have a special
        unique product that you made. We would love to help
      </div>
      <button @click="Sell">Start a fingers shop</button>
    </div>
    <hr>
    <div class="ProductsDiscover">
        <div>Discover our products</div>
        <div v-for="(Product,x) in ProductDiscovery" v-bind:key="x">
            <ProductDiscovery :Kind="Product.Category"></ProductDiscovery>
            <hr>
            <div>Gifts for {{Product.Carousel}}</div>
            <Carousel :Kind="Product.Carousel"></Carousel>
            <hr>
        </div>
    </div>
    <div class="Subscription">
        <div>Subscribe to our mail list and get notified with new products</div>
        <input v-model="Email" type="text">
        <button @click="Subscribe">Subscribe</button>
        <p v-if="Validmail">Please Enter a valid E-mail</p>
        <p v-if="maildone">Email added successfully thanks for Subscription</p>
    </div>
    <router-link to="/SheemyTestingPage">
    <div>SheemyTestingPage</div>
    </router-link>
  </div>
</template>

<script>
import ProductDiscovery from "../ShemyComponents/ProductDiscovery"
import Carousel from "../ShemyComponents/Carousel"
import firebase from "firebase"
export default {
    data:function()
    {
        return{
            ProductDiscovery:[
            {
              Category:"Accessories",
              Carousel: "Him"
            },
            {
              Category:"Handbags",
              Carousel: "Her"
            },
            {
              Category:"HomeDecor",
              Carousel: "Mother"
            },
            {
              Category:"Crochet",
              Carousel: "Father"              
            },
            {
              Category:"Art&Paintings",
              Carousel: "Birthday"
            },
            {
              Category:"Gifts",
              Carousel: "Party"
            },
            {
              Category:"Collectibles",
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
      ProductDiscovery,
      Carousel
  }
};
</script>

<style>
</style>