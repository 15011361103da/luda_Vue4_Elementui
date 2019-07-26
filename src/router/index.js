import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloREM from '../components/HelloREM'
import HelloSwiper from '../components/swiper/HelloSwiper'
import LazyLoad from '../components/lazyload/LazyLoad'
import Parent from '../components/passByValue/Parent'
import ArrayFun from '../components/ArrayFun'
import base from '../components/Base'
import sprite from '../components/性能优化/Sprite'
import table1 from '../components/a-lianxi/table1'
import clearfix from '../components/a-lianxi/Clearfix'
import ie6png from '../components/a-lianxi/Ie6-png'
import life from '../components/Life'
import center1 from '../components/a-lianxi/Center1'
import inlineBlock from '../components/a-lianxi/inline-block'
import nexttick from '../components/a-lianxi/nextTick'

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
    {
      path: '/ArrayFun',
      name: 'ArrayFun',
      component: ArrayFun,
      title:'数组方法的测试'
    },
    {
      path: '/base',
      name: 'base',
      component: base,
      title: '基础练习',
    },
    {
      path: '/sprite',
      name: 'sprite',
      component: sprite,
      title: '雪碧图',
    },
    {
      path: '/table1',
      name: 'table1',
      component: table1,
      title: '表格',
    },
    {
      path: '/clearfix',
      name: 'clearfix',
      component: clearfix,
      title: '高度塌陷与外边距重叠',
    },
    {
      path: '/ie6png',
      name: 'ie6png',
      component: ie6png,
      title: 'IE6兼容png24',
    },
    {
      path: '/life',
      name: 'life',
      component: life,
      title: 'vue生命周期',
    },
    {
      path: '/center1',
      name: 'center1',
      component: center1,
      title: 'css居中的方法',
    },
    {
      path: '/inlineBlock',
      name: 'inlineBlock',
      component: inlineBlock,
      title: 'css块元素与行内元素',
    },

    {
      path: '/nexttick',
      name: 'nexttick',
      component: nexttick,
      title: 'lu',
    },
  ]
})
