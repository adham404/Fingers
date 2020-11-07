<template>
    <div class="HorizontalScroll">
        <h2>Captain Orders</h2>
        <div class="Toggle">
            <h3>Open Orders</h3>
            <h3>Accepted Orders</h3>

        </div>
        <div v-for="n in 3" :key="n" class="Container Shadow">
            <div class="Header">
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
        <div class="OrderDetails">
            <h3>Seller Address:</h3>
            <p>roo7 3nd abo batee5a we edelo tofa7 3ashan enta foladsfklasjflksajfl;
            sdfalksdfjadlf;kjas;fldjasd;lfjasdl;kfjsad;lsdfjlksjdflsajflsdfkals;djfk;lasdjflaks
            fldkjads;flksjadf;lksdafkljsa;lfkjsal;kfdjsd;lfkjsdf;lk
            </p>
            <h3>Buyer Address:</h3>
            <p>roo7 3nd abo batee5a we edelo tofa7 3ashan enta foladsfklasjflksajfl;
            sdfalksdfjadlf;kjas;fldjasd;lfjasdl;kfjsad;lsdfjlksjdflsajflsdfkals;djfk;lasdjflaks
            fldkjads;flksjadf;lksdafkljsa;lfkjsal;kfdjsd;lfkjsdf;lk
            </p>
            <h3>Seller Number:</h3>
            <p>0100000000</p>
            <h3>Buyer Number:</h3>
            <p>0100000000</p>

        </div>
        
        <button>Accept Order</button>
        
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.OrderDetails p{
    margin: 5px;
}
.OrderDetails h3{
    margin: 5px;
}
.Toggle{
    display: flex;
    justify-content: space-around;
}
p{
      overflow-wrap: break-word;

}
.HorizontalScroll{
    display: flex;
    flex-direction: column;
}
h2{
    align-self: center;
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
    height: 80px;
    border-radius: 20px;
    align-self: center;
    margin-bottom: 20px;
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
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    border-radius: 15px;
    background-color: white;
    height: 600px;
    margin-bottom: 20px;
    overflow-y: scroll;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
</style>