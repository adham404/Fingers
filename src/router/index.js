import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductPreviewDesktop from '@/DesktopComponents/MarawanComponents/ProductPreview.vue'
import ProductPreviewMobile from '@/MobileComponents/MarawanComponents/ProductPreview.vue'
import SellerRegistrationDesktop from '@/DesktopComponents/MarawanComponents/SellerRegistration.vue'
import SellerRegistrationMobile from '@/MobileComponents/MarawanComponents/SellerRegistration.vue'
import CartDesktop from '@/DesktopComponents/SadekComponents/Cart.vue'
import CartMobile from '@/MobileComponents/SadekComponents/Cart.vue'
import ShopDesktop from '@/DesktopComponents/SadekComponents/Shop.vue'
import ShopMobile from '@/MobileComponents/SadekComponents/Shop.vue'
import AddProductDesktop from '@/DesktopComponents/ShemyComponents/AddProduct.vue'
import AddProductMobile from '@/MobileComponents/ShemyComponents/AddProduct.vue'
import HomePageDesktop from '@/DesktopComponents/ShemyComponents/HomePage.vue'
import HomePageMobile from '@/MobileComponents/ShemyComponents/HomePage.vue'
import LoginDesktop from '@/DesktopComponents/ShemyComponents/Login.vue'
import LoginMobile from '@/MobileComponents/ShemyComponents/Login.vue'
import SellerDashboardDesktop from '@/DesktopComponents/ShemyComponents/SellerDashboard.vue'
import SellerDashboardMobile from '@/MobileComponents/ShemyComponents/SellerDashboard.vue'
import SignUpDesktop from '@/DesktopComponents/ShemyComponents/SignUp.vue'
import SignUpMobile from '@/MobileComponents/ShemyComponents/SignUp.vue'
import SellerStoreDesktop from '@/DesktopComponents/ShemyComponents/SellerStore.vue'
import SellerStoreMobile from '@/MobileComponents/ShemyComponents/SellerStore.vue'
import CaptainOrdersDesktop from '@/DesktopComponents/ShemyComponents/CaptainOrders.vue'
import CaptainOrdersMobile from '@/MobileComponents/ShemyComponents/CaptainOrders.vue'
import ShopOrdersDesktop from '@/DesktopComponents/ShemyComponents/ShopOrders.vue'
import ShopOrdersMobile from '@/MobileComponents/ShemyComponents/ShopOrders.vue'
import TextSellerDesktop from '@/DesktopComponents/ShemyComponents/TextSeller.vue'
import TextSellerMobile from '@/MobileComponents/ShemyComponents/TextSeller.vue'
import ChatListDesktop from '@/DesktopComponents/ShemyComponents/ChatList.vue'
import ChatListMobile from '@/MobileComponents/ShemyComponents/ChatList.vue'
import ThreeStepsDesktop from '@/DesktopComponents/ShemyComponents/ThreeSteps.vue'
import ThreeStepsMobile from '@/MobileComponents/ShemyComponents/ThreeSteps.vue'
import MoreDesktop from '@/DesktopComponents/ShemyComponents/More.vue'
import MoreMobile from '@/MobileComponents/ShemyComponents/More.vue'
import FavouritesDesktop from '@/DesktopComponents/ShemyComponents/Favourites.vue'
import FavouritesMobile from '@/MobileComponents/ShemyComponents/Favourites.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HomePage',
    components: {
      Desktop: HomePageDesktop,
      Mobile: HomePageMobile
    }
  },
  {
    path: '/Products/:id',
    name: 'ProductPreview',
    components: {
      Desktop: ProductPreviewDesktop,
      Mobile: ProductPreviewMobile
    }
  },
  {
    path: '/SellerRegistration',
    name: 'SellerRegistration',
    components: {
      Desktop: SellerRegistrationDesktop,
      Mobile: SellerRegistrationMobile
    }
  },
  {
    path: '/Cart',
    name: 'ShoppingCart',
    components: {
      Desktop: CartDesktop,
      Mobile: CartMobile
    }
  },
  {
    path: '/Shop',
    name: 'Shop',
    components: {
      Desktop: ShopDesktop,
      Mobile: ShopMobile
    }
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    components: {
      Desktop: AddProductDesktop,
      Mobile: AddProductMobile
    }
  },
  {
    path: '/Login',
    name: 'Login',
    components: {
      Desktop: LoginDesktop,
      Mobile: LoginMobile
    }
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    components: {
      Desktop: SignUpDesktop,
      Mobile: SignUpMobile
    }
  },
  {
    path: '/SellerDashboard',
    name: 'SellerDashboard',
    components: {
      Desktop: SellerDashboardDesktop,
      Mobile: SellerDashboardMobile
    },
  },
    {
      path: '/SellerStore',
      name: 'SellerStore',
      components: {
        Desktop: SellerStoreDesktop,
        Mobile: SellerStoreMobile
      },
    },
      {
        path: '/SellerStore',
        name: 'SellerStore',
        components: {
          Desktop: SellerStoreDesktop,
          Mobile: SellerStoreMobile
        }
      },
      {
        path: '/CaptainOrders',
        name: 'CaptainOrders',
        components: {
          Desktop: CaptainOrdersDesktop,
          Mobile: CaptainOrdersMobile
        }
      },
      {
        path: '/ShopOrders',
        name: 'ShopOrders',
        components: {
          Desktop: ShopOrdersDesktop,
          Mobile: ShopOrdersMobile
        }
      },
      {
        path: '/TextSeller',
        name: 'TextSeller',
        components: {
          Desktop: TextSellerDesktop,
          Mobile: TextSellerMobile
        }
      },
      {
        path: '/ChatList',
        name: 'ChatList',
        components: {
          Desktop: ChatListDesktop,
          Mobile: ChatListMobile
        }
      },
      {
        path: '/ThreeStepRegistration',
        name: 'ThreeStepRegistration',
        components: {
          Desktop: ThreeStepsDesktop,
          Mobile: ThreeStepsMobile
        }
      },
      {
        path: '/Menu',
        name: 'Menu',
        components: {
          Desktop: MoreDesktop,
          Mobile: MoreMobile
        }
      },
      {
        path: '/Favourites',
        name: 'Favourites',
        components: {
          Desktop: FavouritesDesktop,
          Mobile: FavouritesMobile
        }
      }


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
