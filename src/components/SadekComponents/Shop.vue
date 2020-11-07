<template>
  <div>
      <div class="BreadCrumbs">Fingers Shop > {{ShopSection}}</div>
      <hr>
      <div class="Categories">
          <div>Categories</div>
          <label for="Accessories">Accessories</label>
          <input @input="Filter" type="checkbox" name="" id="Accessories" value="Accessories" v-model="FilterValue1">
          <label for="Handbags">Handbags</label>
          <input @input="Filter" type="checkbox" name="" id="Handbags" value="Handbags" v-model="FilterValue1">
          <label for="HomeDecor">Home decor</label>
          <input @input="Filter" type="checkbox" name="" id="HomeDecor" value="HomeDecor" v-model="FilterValue1">
          <label for="Clothes">Clothes</label>
          <input @input="Filter" type="checkbox" name="" id="Clothes" value="Clothes" v-model="FilterValue1">
          <label for="Paint">Art&Paintings</label>
          <input @input="Filter" type="checkbox" name="" id="Paint" value="Paint" v-model="FilterValue1">
          <label for="Gifts">Gifts</label>
          <input @input="Filter" type="checkbox" name="" id="Gifts" value="Gifts" v-model="FilterValue1">
          <label for="Collectibles">Collectibles</label>
          <input @input="Filter" type="checkbox" name="" id="Collectibles" value="Collectibles" v-model="FilterValue1">
      </div>
      <hr>
      <div>
          <div>Price</div>
          <label for="Price1">100-500</label>
          <input @input="Filter" type="checkbox" name="" id="Price1" value="Range1" v-model="FilterValue2">
          <label for="Price1">500-800</label>
          <input @input="Filter" type="checkbox" name="" id="Price1" value="Range2" v-model="FilterValue2">
          <label for="Price1">800-1000</label>
          <input @input="Filter" type="checkbox" name="" id="Price1" value="Range3" v-model="FilterValue2">
          <label for="Price1">1000-1200</label>
          <input @input="Filter" type="checkbox" name="" id="Price1" value="Range4" v-model="FilterValue2">
          <label for="Price1">1200-2400</label>
          <input @input="Filter" type="checkbox" name="" id="Price1" value="Range5" v-model="FilterValue2">
      </div>
      <hr>
      <div class="ProductGrid">
          <ProductCard  v-for="(Product,x) in ProductData" v-bind:key="x" :Product="Product"></ProductCard>
      </div>
      <button @click="Check">Check for Check box</button>
  </div>
</template>

<script>
import {EventBus} from "../../main"
import firebase from "firebase"
import ProductCard from "../ShemyComponents/ProductCard"
export default {
    data:function()
    {
        return{
            ShopSection:"",
            FilterValue1:[],
            FilterValue2:[],
            ProductData:[]
        }
    },
    components:{
        ProductCard
    },
    methods:{
        Check()
        {
            console.log("First Checked Value: ",this.FilterValue1)
            console.log("Second Checked Value: ",this.FilterValue2)
        },
        Filter()
        {
            //TODO Perform Filter process on a Cloud Function
            //TODO Perform a Filter process on the Client Side
        },
        // ShowMeShop()
        // {
        //     console.log("7amada")
        //     // var id = this.ProductData[counter].ProductID
        //     // this.$router.push(`/Products/${id}`)
        // }
    },
    async mounted()
    {
        await EventBus.$on("GoToShop", (val) => {
            this.ShopSection = val;
        })
        var db = firebase.firestore()
        var DbRef2 = db.collection("Products")
        await DbRef2.get().then((query) => {
            query.forEach((doc) => {
                this.ProductData.push(doc.data())
            })
        })
        // console.log("Data Recieved: ",this.ProductData);
    }
}
</script>

<style>

</style>