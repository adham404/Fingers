<template>
   <div class="ChatList">
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
}
.ChatList{
}
img{
    height: 50px;
    width: 50px;
    border-radius: 50px;
}

</style>