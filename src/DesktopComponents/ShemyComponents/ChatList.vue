<template>
   <div class="ChatList shadow">
        <div class="ChatElement" v-for="n in 10" :key="n">
        <img src="@/assets/ProductPic.jpg" alt="">
        <div class="ChatInfo">
            <h4>CherryNina Giftshop</h4>
            <p>I sent you the product 5alas</p>
        </div>
        </div>
   </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h4{
    margin: 0;
}
p{
    margin: 0px;
}
.ChatElement{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    background-color: #AAE2DF;
    border-radius: 10px;
    height: 60px;
    margin-right: 10px;

}
.ChatList{
    width: 90%;
    padding-left: 10px;
    padding-top: 10px;
    border-radius: 10px;
    height: 700px;
    overflow-y: scroll;
}
img{
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin: 0 10px 0px 10px;
}
.shadow{
    -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.25);
}

</style>