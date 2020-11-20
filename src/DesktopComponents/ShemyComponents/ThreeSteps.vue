<template>
    <div class="Container">
        <h2 class="Shadow" id="Header">Become a seller in three steps</h2>
        <div class="ThreeSteps">
            <div class="Left">
                <h1>1 Register an account on fingers</h1>
                <!-- <Login/>
                <SignUp/> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="155" viewBox="0 0 155 155">
                <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M155.563,78.062a77.5,77.5,0,1,1-77.5-77.5A77.5,77.5,0,0,1,155.563,78.062ZM69.1,119.1l57.5-57.5a5,5,0,0,0,0-7.071l-7.071-7.071a5,5,0,0,0-7.071,0L65.562,94.349,43.669,72.456a5,5,0,0,0-7.071,0l-7.071,7.071a5,5,0,0,0,0,7.071l32.5,32.5a5,5,0,0,0,7.071,0Z" transform="translate(-0.563 -0.563)" fill="#f15a24"/>
                </svg>

            </div>
            <div class="Middle">
                <h1>2 Fill out your Fingers shop profile </h1>
                <!-- <SellerRegistration/> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="155" viewBox="0 0 155 155">
                <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M155.563,78.062a77.5,77.5,0,1,1-77.5-77.5A77.5,77.5,0,0,1,155.563,78.062ZM69.1,119.1l57.5-57.5a5,5,0,0,0,0-7.071l-7.071-7.071a5,5,0,0,0-7.071,0L65.562,94.349,43.669,72.456a5,5,0,0,0-7.071,0l-7.071,7.071a5,5,0,0,0,0,7.071l32.5,32.5a5,5,0,0,0,7.071,0Z" transform="translate(-0.563 -0.563)" fill="#f15a24"/>
                </svg>
            </div>
            <div class="Right">
                <h1>3 Start adding your products</h1>
                <p class="Shadow">Congratulation! you are now officially a shop owner of Fingers. You can now
                    add and show your products to the world. Keep it up, the only limit is your own
                    creativity! And if you need any help just send us an email at support@fingerscreate.com, 
                    we would love to help ❤️
                </p>
                <button>Start Adding products</button>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="186.875" height="186.875" viewBox="0 0 186.875 186.875">
                <path id="Icon_awesome-clock" data-name="Icon awesome-clock" d="M94,.562A93.437,93.437,0,1,0,187.437,94,93.421,93.421,0,0,0,94,.562Zm21.513,131.905L82.283,108.317a4.551,4.551,0,0,1-1.846-3.655V41.253a4.534,4.534,0,0,1,4.521-4.521h18.085a4.534,4.534,0,0,1,4.521,4.521v51.88l23.925,17.407a4.518,4.518,0,0,1,.98,6.33l-10.625,14.618A4.552,4.552,0,0,1,115.513,132.468Z" transform="translate(-0.563 -0.563)" fill="#f15a24"/>
                </svg>
                <h2>Waiting for steps 1 & 2</h2> -->
            </div>
        </div>
    </div>
</template>

<script>
// import Login from "@/DesktopComponents/ShemyComponents/Login.vue"
// import SellerRegistration from "@/DesktopComponents/MarawanComponents/SellerRegistration.vue"
// import SignUp from "@/DesktopComponents/ShemyComponents/SignUp.vue"
    export default {
        components:{
            // Login,
            // SellerRegistration,
            // SignUp
        }
    }
</script>

<style scoped>
h2{
    align-self: center;
}
#Header{
    width: 100%;
    background-color: #AAE2DF;
    text-align: center;
    height: 40px;
}
svg{
    align-self: center;
}
button{
    border: none;
    background-color: #AAE2DF;
    width: 250px;
    height: 40px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.1rem;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
}
p{
    margin-left: 3px;
    border-radius: 15px;
    padding-left: 10px;
}
.Container{
    width: 100%;
}
.ThreeSteps{
    width: 100%;
    display: flex;
    justify-content: space-around;
    /* background-color: green; */
}
.Left{
    width: 37%;
    /* background-color: #AAE2DF; */
    border-right: 3px solid rgb(179, 179, 179);
    display: flex;
    flex-direction: column;
}
.Middle{
    width: 37%;
    /* background-color: #AAE2DF; */
    border-right: 3px solid rgb(179, 179, 179);
    display: flex;
    flex-direction: column;

}
.Right{
    width: 25%;
    /* background-color: #AAE2DF; */
    display: flex;
    flex-direction: column;

}

.Shadow{
    -webkit-box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.25);
}
</style>