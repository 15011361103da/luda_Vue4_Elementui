<template>
    <div>
      <!--懒加载-->
      <img v-lazy="imgObj" />
    </div>
</template>

<script>
    export default {
      name: "LazyLoad",
      data(){
        return{
          /*懒加载配置*/
          imgObj: {
            /*要显示图片的地址*/
            src:"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg",
            /*如果图片地址错误的话则显示此图片*/
            error: require('../../assets/error.jpg'),
            /*在加载过程中显示的图片*/
            loading: require('../../assets/loading.gif')
          },
        }
      },

    }
</script>

<style scoped>
 img{
   display: block;
   margin: 0 auto;
 }
</style>
