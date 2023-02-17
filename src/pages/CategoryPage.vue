<template>
    <div id="category-page">
        <Header></Header>
        <Category></Category>
    </div>
</template>
  
<script>

import Category from '../components/Category.vue'
import Header from '../components/Header.vue'


export default {
    name: 'CategoryPage',
    props: {
    },
    components: {
        Header,
        Category
    },
}
</script>
