import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import ProductPage from '../pages/ProductPage.vue'
import CategoryPage from '../pages/CategoryPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import CartPage from '../pages/CartPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: "/category/:category",
            name: "CategoryPage",
            component: CategoryPage,
        },
        {
            path: "/product/:id",
            name: "ProductPage",
            component: ProductPage,
        },
        {
            path: "/login",
            name: "LoginPage",
            component: LoginPage,
        },
        {
            path: "/cart",
            name: "CartPage",
            component: CartPage,
        }
    ]
})