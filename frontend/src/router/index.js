import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ReviewView from '../views/ReviewView.vue'
import ReviewViewPhoto from '../views/ReviewPhotoView.vue'
import DiscountView from '../views/DiscountView.vue'
import OfferView from '../views/OfferView.vue'
import InfoClientView from '../views/InfoClientView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginReg from '../views/LoginReg.vue'
import ProfileView from '../views/ProfileView.vue'
import CartView from '../views/CartView.vue'
import ProductView from '../views/ProductView.vue'
import MyOrdersView from '../views/MyOrdersView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'

const routes = [
  {
    path: '/changepasswordview',
    name: 'changepasswordview',
    component: ChangePasswordView
  },
  {
    path: '/myordersview',
    name: 'myordersview',
    component: MyOrdersView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/reviews',
    name: 'review',
    component: ReviewView
  },
  {
    path: '/discounts',
    name: 'discount',
    component: DiscountView
  },
  {
    path: '/offer',
    name: 'offer',
    component: OfferView
  },
  {
    path: '/infoclient',
    name: 'infoclient',
    component: InfoClientView
  },
  {
    path: '/404',
    name: 'Not Found',
    component: NotFoundView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/reviewsphoto',
    name: 'reviewsphoto',
    component: ReviewViewPhoto
  },
  {
    path: '/loginreg',
    name: 'loginreg',
    component: LoginReg
  },
  {
    path: '/profileview',
    name: 'profileview',
    component: ProfileView
  },
  {
    path: '/cartview',
    name: 'cartview',
    component: CartView
  },
  {
    path: '/productview/:id',
    name: 'productview',
    component: ProductView,
    props: true,
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
