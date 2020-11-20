<template>
    <div  class="Container">
        <div class="LowerContainer">
            <div class="StoreProfile">
                <img src="@/assets/ProductPic.jpg" alt="">
                <h3>CherryNina Giftshop</h3>
                <div class="Filter">
                    <h3>Recommendations for you:</h3>
                    <div v-for="n in 10" :key="n" class="Grid">
                        <ProductCard/>
                    </div>
                </div>
            </div>
            <div class="Container2">
                <div class="UserNavigate">
                    <div  class="Link">
                        <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m417.061 284.307-21.483-186.182h47.27v-69.046c-3.433-.207-6.869-.313-10.312-.312-34.09.001-68.234 10.355-93.256 34.835l1.569 25.488h-42.784v30.117h44.637l9.353 151.986c1.137 18.467-13.535 34.069-32.037 34.069h-133.117c0-19.067 7.733-36.329 20.225-48.82 12.492-12.492 29.753-20.225 48.82-20.225v-34.523h-83.333c-47.673 0-90.822 19.322-122.062 50.552-31.229 31.24-50.551 74.388-50.551 122.061h336.848c48.261 0 85.745-42.057 80.213-90z"/><path d="m446.654 278.032.326 2.823c3.62 31.374-6.355 62.891-27.369 86.469-2.173 2.439-4.45 4.763-6.811 6.983h99.2c0-43.698-27.066-81.067-65.346-96.275z"/><path d="m102.614 183.997c22.373-8.243 45.874-12.421 70.001-12.421h83.333v-21.118c0-18.019-14.607-32.627-32.627-32.627h-107.308c-18.019 0-32.627 14.607-32.627 32.627v3.792c0 13.243 7.893 24.634 19.228 29.747z"/><path d="m121.677 404.424v25.723h-30.117v-25.723h-53.257c-.459 3.198-.704 6.465-.704 9.79 0 38.118 30.901 69.019 69.019 69.019s69.019-30.901 69.019-69.019c0-3.325-.244-6.592-.704-9.79z"/><path d="m420.439 404.424v25.723h-30.117v-25.723h-53.257c-.46 3.198-.704 6.465-.704 9.79 0 38.118 30.901 69.019 69.019 69.019s69.019-30.901 69.019-69.019c0-3.325-.244-6.592-.704-9.79z"/></g></svg>
                        <h5>Orders</h5>
                    </div>
                    <div class="Link" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                            <path id="Icon_material-dashboard" data-name="Icon material-dashboard" d="M4.5,19.5h12V4.5H4.5Zm0,12h12v-9H4.5Zm15,0h12v-15h-12Zm0-27v9h12v-9Z" transform="translate(-4.5 -4.5)"/>
                        </svg>
                        <h5>Seller Dashboard</h5>
                    </div>
                    <div class="Link" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.243" height="29.492" viewBox="0 0 31.243 29.492">
                            <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M26.207,3.938h-.075A8.585,8.585,0,0,0,19,7.771a8.585,8.585,0,0,0-7.135-3.834h-.075a8.413,8.413,0,0,0-8.412,8.331,17.739,17.739,0,0,0,3.59,9.784C11.486,28.121,19,33.429,19,33.429s7.51-5.308,12.032-11.376a17.739,17.739,0,0,0,3.59-9.784A8.413,8.413,0,0,0,26.207,3.938Z" transform="translate(-3.375 -3.938)"/>
                        </svg>
                        <h5>Favourites</h5>
                    </div>
                    <div class="Link" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.679" height="34.777" viewBox="0 0 31.679 34.777">
                            <path id="Icon_awesome-shopping-cart" data-name="Icon awesome-shopping-cart" d="M29.046,20.467l2.6-14.128a1.577,1.577,0,0,0-1.287-1.991H8.756L8.252,1.3A1.424,1.424,0,0,0,6.959,0H1.32A1.5,1.5,0,0,0,0,1.63V2.717a1.5,1.5,0,0,0,1.32,1.63H5.163L9.027,27.675a4.028,4.028,0,0,0-1.547,3.3c0,2.1,1.379,3.8,3.08,3.8s3.08-1.7,3.08-3.8a4.271,4.271,0,0,0-.925-2.717h11.53a4.272,4.272,0,0,0-.925,2.717c0,2.1,1.379,3.8,3.08,3.8s3.08-1.7,3.08-3.8a3.958,3.958,0,0,0-1.737-3.424l.3-1.649a1.577,1.577,0,0,0-1.287-1.991H12l-.36-2.174H27.759A1.415,1.415,0,0,0,29.046,20.467Z"/>
                        </svg>
                        <h5>Cart</h5>
                    </div>
                    <div class="Link" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.243" height="29.248" viewBox="0 0 29.243 29.248">
                            <g id="Icon_ionic-ios-chatboxes" data-name="Icon ionic-ios-chatboxes" transform="translate(-3.375 -3.375)">
                                <path id="Path_47" data-name="Path 47" d="M29.946,11.981H14.365a2.683,2.683,0,0,0-2.679,2.679V25.509a2.677,2.677,0,0,0,2.679,2.672H23.28a.768.768,0,0,1,.534.225l4.43,4.085c.246.239.654.141.654-.2V28.73c0-.422.267-.555.689-.555h.07a2.927,2.927,0,0,0,2.96-2.672V14.66A2.668,2.668,0,0,0,29.946,11.981Z"/>
                                <path id="Path_48" data-name="Path 48" d="M12.262,10.259H24.736V5.667a2.293,2.293,0,0,0-2.292-2.292H5.667A2.293,2.293,0,0,0,3.375,5.667V17.283a2.293,2.293,0,0,0,2.292,2.292h4.3V12.551A2.3,2.3,0,0,1,12.262,10.259Z"/>
                            </g>
                        </svg>
                        <h5>Chat List</h5>
                    </div>
                </div>
                <Favourites/>
                <!-- <ShopOrders/> -->
                <!-- <TextSeller/> -->
                <!-- <ChatList/> -->
                <!-- <button>Load more</button>
                <button id="Pink">Back to top</button> -->
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/DesktopComponents/ShemyComponents/ProductCard.vue"
// import ChatList from "@/DesktopComponents/ShemyComponents/ChatList.vue"
// import TextSeller from "@/DesktopComponents/ShemyComponents/TextSeller.vue"
// import ShopOrders from "@/DesktopComponents/ShemyComponents/ShopOrders.vue"
import Favourites from "@/DesktopComponents/ShemyComponents/Favourites.vue"
    export default {
        components:{
            ProductCard,
            // ChatList,
            // TextSeller,
            // ShopOrders,
            Favourites
        }
    }
</script>

<style scoped>
.Link{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h5{
    margin: 0px;
}
.UserNavigate{
    display: flex;
    justify-content: space-around;
    background-color: #FACFD9;
    width: 80%;
    align-self: center;
    border-radius: 25px;
    height: 60px;
    align-items: center;
    margin-bottom: 30px;
}
svg{
    height: 30px;
    width: 30px;
}
.Filter{
    display: flex;
    flex-direction: column;
    width: 85%;
    background-color: #AAE2DF;
    height: 1000px;
    /* padding-left: 10px; */
    overflow-y: scroll;
    align-items: center;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
img{
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 150px;
}
.StoreProfile{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}
.LowerContainer{
    display: flex;
    flex-direction: row;
    margin-top: 80px;

}
#Pink{
    background-color: #FACFD9;
}
button{
    border: none;
    background-color: #AAE2DF;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.1rem;
}
.Container2{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Shop{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

}
.CoverPhoto{
    width: 100%;
    height: 300px;
    background-image: url("../../../src/assets/ProductPic.jpg");
    background-position: center;
    margin-bottom: 50px;
}
.Grid{
    width: 88%;
}
</style>