import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animate from 'animate.css'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

Vue.use(animate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
