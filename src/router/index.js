import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductPreview from '@/components/MarawanComponents/ProductPreview.vue'
import SellerRegistration from '@/components/MarawanComponents/SellerRegistration.vue'
import Cart from '@/components/SadekComponents/Cart.vue'
import Shop from '@/components/SadekComponents/Shop.vue'
import AddProduct from '@/components/ShemyComponents/AddProduct.vue'
import HomePage from '@/components/ShemyComponents/HomePage.vue'
import Login from '@/components/ShemyComponents/Login.vue'
import SellerDashboard from '@/components/ShemyComponents/SellerDashboard.vue'
import SignUp from '@/components/ShemyComponents/SignUp.vue'
import SheemyTestingPage from '@/components/ShemyComponents/SheemyTestingPage'
import SellerStore from '@/components/ShemyComponents/SellerStore.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/SellerStore',
    name: 'SellerStore',
    component: SellerStore
  },
  {
    path: '/SheemyTestingPage',
    name: 'SheemyTestingPage',
    component: SheemyTestingPage
  },
  {
    path: '/Products/:id',
    name: 'ProductPreview',
    component: ProductPreview,
    props: true
  },
  {
    path: '/SellerRegistration',
    name: 'SellerRegistration',
    component: SellerRegistration
  },
  {
    path: '/Cart',
    name: 'ShoppingCart',
    component: Cart
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/AddProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/SellerDashboard',
    name: 'SellerDashboard',
    component: SellerDashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
