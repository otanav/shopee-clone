<template>
    <div id="cart-page">
        <Header></Header>
        <Cart></Cart>
    </div>
</template>
  
<script>

import Cart from '../components/Cart.vue'
import Header from '../components/Header.vue'


export default {
    name: 'CartPage',
    props: {
    },
    components: {
        Header,
        Cart
    },
}
</script>
