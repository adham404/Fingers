<template>
    <div>
        <div class="Checkout" v-for="n in 5" :key="n">
        <div class="StoreHeader">
            <img src="@/assets/ProductPic.jpg" alt="fe 7ewar">
            <h2>CherryNina Giftshop</h2>
        </div>
        <div class="Lower">
                <div class="Products">
                    <div v-for="n in 60" :key="n">
                        <CartProduct/>
                    </div>
                </div>
                <div class="Receipt">
                    <!-- <div class="BlockV">
                        <div class="Item" v-for="n in 5" :key = "n">
                            <p>Product name</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div class="Block">
                        <p>Delivery Fee</p>
                        <p>20.00</p>
                    </div>
                    <div class="Block">
                        <p>Total</p>
                        <p>100.0</p>
                    </div>
                    <div class="PlaceOrder">
                        <button>Proceed to confirmation</button>
                    </div> -->
                    <!-- <div class="Confirmation">
                    <h1>Order confirmation</h1>
                    <label for="">Phone Number</label>
                    <br>
                    <input type="text" name="" id="">
                    <br>
                    <label for="Address">Address</label>
                    <br>
                    <textarea name="Address" id="Address" cols="30" rows="10"></textarea>
                    <br>
                    <label for="cars">Prefered time of order arrival:</label>
                    <select name="timing" id="timing">
                    <option value="1:00 pm">1:00 pm</option>
                    <option value="2:00 pm">2:00 pm</option>
                    <option value="3:00 pm">3:00 pm</option>
                    <option value="4:00 pm">4:00 pm</option>
                    <option value="5:00 pm">5:00 pm</option>
                    <option value="6:00 pm">6:00 pm</option>
                    <option value="7:00 pm">7:00 pm</option>
                    <option value="8:00 pm">8:00 pm</option>
                    <option value="9:00 pm">9:00 pm</option>
                    </select>
                    <button>Place Order</button>
                    </div> -->
                    <div class="OrderStatus">
                    <h2>Order Status: Pending</h2>
                    <h3 id="StatusText">
                    In order to ensure a smooth shopping experience for you we need to verify that the seller accepted your order
                    We will notify you once your order is accepted by
                    the seller
                    </h3>
                    </div>
                </div>
        </div>
    </div>
    </div>
    
</template>

<script>
import CartProduct from '@/DesktopComponents/ShemyComponents/CartProduct.vue'
    export default {
        components: {
            CartProduct
        }
    }
</script>

<style lang="css" scoped>
.Header p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 10px;
}
.Header{
    display: flex;
    align-items: center;
    border-bottom: 3px solid black ;
}
#StatusText{
    text-align: center;
}
.OrderStatus{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
select{
    height: 40px;
    margin-bottom: 10px;
    background-color: white;
    border: 3px solid black;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    align-self: center;
    margin-bottom: 15px;
}
textarea{
    width: 80%;
    height: 150px;
    border: 3px solid black;
    border-radius: 10px;
}
input{
    width: 80%;
    height: 25px;
}
label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
}
.Confirmation{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-left: 2.5%;
}
button{
    border: none;
    background-color: #FF9D6C;
    height: 35px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    width: 200px;
    font-size: 0.9rem;
}
.PlaceOrder{
    display: flex;
    width: 100%;
    justify-content: center;
}
.Receipt{
    width: 25%;
}
.Item{
    display: flex;
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;
}
.Block{
    display: flex;
    border-top: 3px solid black ;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
}
.BlockV{
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
.Checkout{
    height: 500px;
}
.Lower{
    display: flex;
    width: 100%;
}
.StoreHeader{
    display: flex;
    align-items: center;
    border-bottom: 5px solid black;
}
.StoreHeader img{
    height: 60px;
    width: 60px;
    border-radius: 100px;
    margin: 10px;
}
.Products{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    width: 70%;
    justify-content: center;
    margin-top: 15px;
    height: 400px;
}

</style>