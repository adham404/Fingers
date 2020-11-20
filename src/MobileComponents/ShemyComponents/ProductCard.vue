<template>
    <div @click="ShowMeShop" class="Container">
        <img :src="getImgUrl(Product.url2)" alt="fe 7ewar" class="shadow">
        <h4 class="ProductName">{{Product.ProductName}}</h4>
        <h4 class="SellerName">fingersteam</h4>
        <div class="Price">
            <h4>EGP: {{Product.Price}}</h4>
            <svg @click="Like" xmlns="http://www.w3.org/2000/svg" width="19.827" height="18.734" viewBox="0 0 19.827 18.734">
            <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M15.671,3.938h-.04a4.661,4.661,0,0,0-3.843,2,4.661,4.661,0,0,0-3.843-2h-.04a4.467,4.467,0,0,0-4.53,4.355,9.1,9.1,0,0,0,1.933,5.114,33.291,33.291,0,0,0,6.48,5.946,33.291,33.291,0,0,0,6.48-5.946A9.1,9.1,0,0,0,20.2,8.292,4.467,4.467,0,0,0,15.671,3.938Z" transform="translate(-1.875 -2.438)" fill="#fff" stroke="#000" stroke-width="3"/>
            </svg>
        </div>
    </div>
</template>

<script>
import firebase from "firebase"
export default {
data:function()
{
    return{
        AltUrl:"BlueBracelet.jpg"
    }
},
mounted()
{
},
methods:{
    getImgUrl(pic)
    {
        return require('../../assets/ProductPhotographs/'+pic)
    },
    Like()
    {
        //TODO Further invistigating on it it doesn't matter now
        var db = firebase.firestore()
        var DBRef = db.collection("Products")
        var likes = this.Product.NumberOfFavs;
        likes = likes + 1
        DBRef.doc(this.Product.ProductID).update({
            NumberOfFavs: likes
        })
    },
    async ShowMeShop()
    {
            var id = this.Product.ProductID
            console.log("Hey in here: "+ id)
            if(id != undefined)
            {
                console.log("kiki")
                this.$router.push({path:`/Products/${id}`, query:{id: id, Real: true} })
            }
            else
            {
                console.log("am here")
                id = "123"
                var ProductData = {
                    ProductName: this.Product.ProductName,
                    ProductPrice: this.Product.ProductPrice,
                    Description: "This is a Great Product which meets high quality of the handmade craft",
                    url2: this.Product.url2,
                    Customization:[
                        {
                            Customization: "Color",
                            Options: [{
                                OptionValue: "Red"
                            },
                            {
                                OptionValue: "Black"
                            }
                            ]
                        },
                        {
                            Customization:"Size",
                            Options: [{
                                OptionValue:"Large",
                            },
                            {
                                OptionValue:"Small"
                            }
                            ]
                        }
                    ]
                }
                var SellerData = {
                    ShopName:"Fingers Shop"
                }
                this.$router.push({path:`/Products/${id}`, query:{ id: id, ProductData2: ProductData, SellerData2:SellerData, Real: false}})
            }
    },
    Compare()
    {

    }
},
props:["Product", "Seller","Demo"]             
}
</script>

<style scoped>
svg{
    height: 30px;
}
.Price h4{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.Price{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.SellerName{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    font-weight: normal;
}
.ProductName{
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bolder;
}
.Container{
    display: flex;
    flex-direction: column;
    width: 160px;
    margin-right: 20px;
}
img{
    border-radius: 5px;
    height: 150px;
    width: 100%;
}
.shadow{
    -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
}

</style>