<template>
    <div id="login-page">
        <Login></Login>
    </div>
</template>
  
<script>

import Login from '../components/Login.vue'

export default {
    name: 'LoginPage',
    props: {
    },
    components: {
      Login
    },
}
</script>
