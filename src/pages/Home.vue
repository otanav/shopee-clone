<template>
    <div id="home">
        <Header></Header>
        <Slide></Slide>
        <Other></Other>
        <Menu></Menu>
    </div>
</template>
  
<script>

import Slide from '../components/Slide.vue'
import Other from '../components/Other.vue'
import Menu from '../components/Menu.vue'
import Header from '../components/Header.vue'


  
export default {
    name: 'Home',
    props :{

    },
    components: {
        Header,
        Slide,
        Other,
        Menu
    }
}

</script>
