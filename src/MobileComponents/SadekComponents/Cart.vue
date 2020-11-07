<template>
    <div class="Horizontal scroll">
        <div v-for="n in 3" :key="n" class="Container Shadow">
        <!-- <div class="Header">
            <img src="@/assets/ProductPic.jpg" alt="">
            <p>CherryNina giftshop</p>
        </div>
        <div class="BlockV">
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
        <!-- This is the confirmation -->
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
            <div class="Header">
            <img src="@/assets/ProductPic.jpg" alt="">
            <p>CherryNina giftshop</p>
        </div>
            <h2>Order Status: Pending</h2>
            <h3 id="StatusText">
                In order to ensure a smooth shopping experience for you we need to verify that the seller accepted your order
                We will notify you once your order is accepted by
                the seller
            </h3>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
#StatusText{
    text-align: center;
}
.OrderStatus{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
button{
    width: 150px;
    background-color: #AAE2DF;
    height: 30px;
    margin-top: 30px;
}
select{
    height: 20px;
}
textarea{
    width: 80%;
    height: 200px;
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
}
.Confirmation{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-left: 2.5%;
}
.PlaceOrder{
    display: flex;
    width: 100%;
    justify-content: center;
}
button{
    border: none;
    background-color: #AAE2DF;
    width: 200px;
    height: 30px;
    border-radius: 20px;
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
}
img{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    margin-left: 10px;
}

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
.Container{
    width: 90%;
    margin-left: 5%;
    border-radius: 15px;
    background-color: white;
    height: 600px;
    margin-bottom: 20px;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
</style>