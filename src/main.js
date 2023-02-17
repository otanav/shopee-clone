import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import Toasted from 'vue-toasted'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faFacebookMessenger, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCircleQuestion, faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faChevronDown, faCartShopping, faMagnifyingGlass, faRotateLeft, faShield, faTruckFast, faStar, faCartPlus, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFacebook, faInstagram, faBell, faCircleQuestion, faGlobe, faChevronDown, faCartShopping, faMagnifyingGlass, faRotateLeft, faShield, faTruckFast, faLinkedin, faFacebookMessenger, faPinterest, faTwitter, faHeart, faStar, faCartPlus)

Vue.use(Toasted, {
    duration: 1500,
    position: 'top-center',
    theme: 'outline',
    iconPack: 'material',
    className: ["toasting"]
});


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    store,
    template: '<App/>'
})