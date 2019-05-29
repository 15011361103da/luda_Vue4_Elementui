<template>
    <div>
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(imgitem,index) in imgs" :key="index">
          <img :src="imgitem.img" alt="">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>
    </div>
</template>

<script>
    export default {
      name: "HelloSwiper",
      data(){
        return{
          swiperOption: {
            autoplay:true,
            loop : true,
            // some swiper options/callbacks
            // 所有的参数同 swiper 官方 api 参数
            pagination: {
              el: '.swiper-pagination',

            },
            effect : 'cube',
            cubeEffect: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 100,
              shadowScale: 0.6
            },
          },
          imgs:[
            /*"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg",
            "http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg",
            "http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner3.jpg",*/
          ]
        }
      },
      created() {
        this.$axios.get("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
          .then(res =>{
            console.log(666)
            this.imgs = res.data.banner;
          })
          .catch(error =>{
            console.log(error)
          })
      }
    }
</script>

<style scoped>
  /*通过浏览器控制台查看最外层div的class，然后设置宽高*/
  .swiper-container,.swiper-wrapper{
    width: 100%;
    height:250px;
  }
  img{
    width: 100%;
    height:200px;
  }
</style>
