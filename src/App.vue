<template>
  <div class="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './compoents/NavBar/index'
import './assets/css/app.scss'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>
