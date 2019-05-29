// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*饿了么ui*/
import { Button, Select,Carousel, CarouselItem,InputNumber } from 'element-ui'
/*swiper滑块、轮播图*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.prototype.$axios = Axios
Vue.use(VueAwesomeSwiper,)
Vue.use(Button)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(InputNumber);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
