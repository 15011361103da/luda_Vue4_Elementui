import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloREM from '../components/HelloREM'
import HelloSwiper from '../components/swiper/HelloSwiper'
import LazyLoad from '../components/lazyload/LazyLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloREM',
      name: 'HelloREM',
      component: HelloREM
    },
    {
      path: '/HelloSwiper',
      name: 'HelloSwiper',
      component: HelloSwiper,
      title:'swiper'
    },
    {
      path: '/LazyLoad',
      name: 'LazyLoad',
      component: LazyLoad,
      title:'懒加载'
    }
  ]
})
