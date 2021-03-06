// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*解决ie不支持vuex的问题*/
import 'babel-polyfill'
/*饿了么ui*/
import { Button, Select,Carousel, CarouselItem,InputNumber,Progress,slider } from 'element-ui'
/*swiper滑块、轮播图*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import VueLazyload from 'vue-lazyload'
import store from './store'
import  './components/a-lianxi/icomoon/style.css'
// 引入echarts
import echarts from 'echarts'

Vue.use(VueLazyload)
Vue.prototype.$axios = Axios
Vue.use(VueAwesomeSwiper,)
Vue.use(Button)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(InputNumber);
Vue.use(Progress);
Vue.use(slider);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
