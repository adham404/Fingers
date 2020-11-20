<template>
    <div class="Container">
        <div class="Left">
            <img src="@/assets/ProductPic.jpg" alt="">
            <Reviews/>
        </div>
        <div class="Right">
            <div class="Header">
                <img src="@/assets/ProductPic.jpg" alt="">
                <h2>CherryNina Gift Shop</h2>
            </div>
            <p>
                lsfkjas;lfjasdl;fkjadsl;kfjdsa;lfjsdalk;fjdlas;jf;aldsfjdsl;kjfsdl;kjsad;lfjsd;lkfjasdl;kfjsda;lfkjsadlk;f
                slkdfj;salkdfjlsad;kfjalsdkfjlkdsjs;adfffffffffffffffffffffffffffffffffaaaaaaaaflkajsdflkjdsalkfjdsa;lfjsdalkfj
                slkfkjsalkdfjl;ksajflksdjlfjsalkjflksadjflkjsdlfjsldk;jflkasjflkjlaksjflksdajflkdasjflsdjlkfjsdalfjlkasdjfdsl
                sfljsad;lkfj;lsdjf;lsadjlkfjaslfjl;kasjflkjdsaklfjlkasdjflkjdslkfjsdlfjdslkjflksdjflkjsdlkjflksjflksdflkjdsalksdj
            </p>
             <div class="Price">
            <h4>Egp 25.00</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.827" height="18.734" viewBox="0 0 19.827 18.734">
            <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M15.671,3.938h-.04a4.661,4.661,0,0,0-3.843,2,4.661,4.661,0,0,0-3.843-2h-.04a4.467,4.467,0,0,0-4.53,4.355,9.1,9.1,0,0,0,1.933,5.114,33.291,33.291,0,0,0,6.48,5.946,33.291,33.291,0,0,0,6.48-5.946A9.1,9.1,0,0,0,20.2,8.292,4.467,4.467,0,0,0,15.671,3.938Z" transform="translate(-1.875 -2.438)" fill="#fff" stroke="#000" stroke-width="3"/>
            </svg>
        </div>
        <label for="">..Title of customisation..</label>
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
        <button>Add to Cart</button>
        <div class="AboutSeller">
            <h2>About Seller:</h2>
            <p>
                sfjasldkfja;slkjf;lkdsajf;lkdsjf;lkadsjf
                sdlfkjasdlf;kasdjf;lkasdjfl;ksdajfl;kds
                dlkfjasdkl;fja;slkjfal;skdjflaskdjflkdasjf
                sdflsdjflksdjlfkjdaslkdjslkfjadslkfjadslkfjdsa
                dfklsdajflkjdsalkfjdsl;fkjsdl;kfjsda;lfkjdsalk;
                sdlfkjsad;lkfjasd;lkfjl;kdsjfl;kadsjlk;sdflsdjf
                dfjalskdfjl;skdjflaskdjflkdasjfdlfjsdalkf
                dsfl;kjaslkdfjlksdflkjasdslkfajlkjsdfa;jdlk;fjal;sdfkjd
            </p>
        </div>
        <button id="Pink">Text Seller</button>
        <button id="Orange">Visit Store</button>
        </div>

    </div>
</template>

<script>
    import Reviews from '@/DesktopComponents/MarawanComponents/Reviews.vue'
    export default {
        components: {
            Reviews
        }
    }
</script>

<style scoped>

label{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    align-self: center;
    margin-bottom: 20px;
    font-size: 1.2rem;
    }
#Pink{
    background-color: pink;
}
#Orange{
    background-color: #FF9D6C;
}
button{
    width: 250px;
    background-color: #AAE2DF;
    height: 35px;
    margin-top: 30px;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 20px;
    align-self: center;
}
.Shadow{
    -webkit-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
box-shadow: 0px 0px 21px -1px rgba(0,0,0,0.25);
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
h4{
    font-size: 1.3rem;
    font-weight: bold;
}
.Price{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
}
P{
    font-size: 1.1rem;
}
.Right p{
    width: 100%;
    overflow-wrap: break-word;
}
.Header{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.Header img{
    height: 60px;
    width: 60px;
    border-radius: 60px;
    margin-right: 10px;
}
.Container{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.Left{
    width: 48%;
    /* padding-left: 20px; */
}
.Right{
    width: 48%;
    /* padding-left: 20px; */
    display: flex;
    flex-direction: column;
}
img{
    width: 100%;
}

</style>