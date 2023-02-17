<template>
    <div id="product-page">
        <Header></Header>
        <Product></Product>
    </div>
</template>
  
<script>
import Product from '../components/Product.vue'
import Header from '../components/Header.vue'

  
export default {
    name: 'ProductPage',
    props: {
    },
    components: {
        Header,
        Product
    },

}
</script>
