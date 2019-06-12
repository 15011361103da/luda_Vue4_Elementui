import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloREM from '../components/HelloREM'
import HelloSwiper from '../components/swiper/HelloSwiper'
import LazyLoad from '../components/lazyload/LazyLoad'
import Parent from '../components/passByValue/Parent'

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
    },
    /*测试子父组件间传值，，以及vueX*/
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent,
      title:'组件传值-VueX'
    },
  ]
})
