<template>
  <div class="app">
    <NavBar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import NavBar from './compoents/NavBar/index'
import Footer from './compoents/footer/index'
import './assets/css/app.scss'

export default {
  name: 'App',
  components: {
    Footer,
    NavBar,
  },
  
}
</script>
