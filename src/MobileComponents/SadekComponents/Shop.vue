<template>
    <div >
        <div class="Filter">
            <div>
                <input type="checkbox">
                <label for="">Accessories</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Handbags</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Home decor</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Clothes</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Art and paintings</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Gifts</label>
            </div>
            <div>
                <input type="checkbox">
                <label for="">Collections</label>
            </div>
        </div>
        <div class="BreadCrumbs">
            <h3>Fingers/</h3>
        </div>
        <div class="Shop">
            <ProductCard v-for="(Product,x) in ProductData" :key = "x" :Product="Product" :Demo="true"/>
        </div>

    </div>
</template>

<script>
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
        // await EventBus.$on("GoToShop", (val) => {
        //     this.ShopSection = val;
        // })
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

<style scoped>
.Shop{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
h3{
    border-bottom: 3px solid black;
}
.Filter{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>