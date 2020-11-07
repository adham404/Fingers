<template>
    <div class="Container">
        <div class="ShopHeader">
            <img src="@/assets/ProductPic.jpg" alt="">
            <h3>CherryNina Giftshop</h3>
        </div>
        <div class="ProductPreview">
            <img src="@/assets/ProductPic.jpg" alt="" class="Product Shadow">
        </div>
        <div class="Product Description">
            <h4>Product description</h4>
            <p>This product should be really amazing but something wrong has happend and I don't understand what it is
                I am typing very fast like a crazy man and that is wicked
            </p>

        </div>
        <br>
        <label for="">..Title of Cust..:</label>
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
        </select>
        <button id="Add">Add to cart</button>
        <button id="Message">Message Seller</button>
        <button id="Visit">Visit Store</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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