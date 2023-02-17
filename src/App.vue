<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Footer
  },
}
</script>

<style>
:root {
  --white-color: #fff;
  --black-color: #000;
  --text-color: #333;
  --primary-color: #ee4d2d;
}

* {
  box-sizing: inherit;
}

#app {
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
  line-height: 1.6rem;
  box-sizing: border-box;
}


body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

.grid {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}

.toasting {
  color: rgb(0, 0, 0) !important;
  background-color: rgb(129, 211, 22) !important;
}


</style>
