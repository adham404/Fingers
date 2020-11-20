<template>
    <div class="Container Shadow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24.743" height="23.34" viewBox="0 0 24.743 23.34">
        <path id="Icon_ionic-md-arrow-round-back" data-name="Icon ionic-md-arrow-round-back" d="M28.223,15.75H13.177l5.836-5.583a2.326,2.326,0,0,0,0-3.178,2.079,2.079,0,0,0-3.038,0L6.258,16.411a2.142,2.142,0,0,0-.633,1.575v.028a2.142,2.142,0,0,0,.633,1.575l9.71,9.422a2.079,2.079,0,0,0,3.037,0,2.326,2.326,0,0,0,0-3.178L13.17,20.25H28.216A2.2,2.2,0,0,0,30.368,18,2.178,2.178,0,0,0,28.223,15.75Z" transform="translate(-5.625 -6.33)"/>
        </svg>
        <div class="ChatInfo">
            <img src="@/assets/ProductPic.jpg" alt="">
            <h4>CherryNina Giftshop</h4>
        </div>
        <div class="Messages">
            <p id="Sender">Hello</p>
            <p id="Receiver">Hello</p>
        </div>
        <div class="SendMessage">
            <input type="text" class="Shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="33.621" height="33.621" viewBox="0 0 33.621 33.621">
            <g id="Icon_feather-send" data-name="Icon feather-send" transform="translate(-1.5 -0.879)">
                <path id="Path_45" data-name="Path 45" d="M33,3,16.5,19.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Path_46" data-name="Path 46" d="M33,3,22.5,33l-6-13.5L3,13.5Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
            </svg>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.ChatInfo{
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #FACFD9;
    margin-bottom: 20px;
    height: 60px;
}
img{
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin: 0 10px 0px 10px;
}
h4{
    margin: 0;
}
p{
    margin: 0px;
}
.Container{
    width: 90%;
    padding-left: 20px;
    padding-top: 10px;
    border-radius: 5px;
}
#Sender{
    margin-left: 75%;
    margin-right: 2%;
    background-color: #AAE2DF ;
    padding-left: 10px;
    border-radius: 5px;
}
#Receiver{
    margin-right: 75%;
    margin-left: 2%;
    background-color:#FACFD9 ;
    padding-left: 10px;
    border-radius: 5px;


}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
.SendMessage svg{
    height: 25px;
}
.SendMessage{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    margin-top: 30px;
    

}
input{
  width: 275px;
  height: 30px;
  border-radius: 15px;
  border: none;
  outline: none;
  padding-left: 10px;
}

</style>