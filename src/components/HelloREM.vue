<template>
    <div class="box" @click="viewWidth">
      哈哈
      <div>
        <div class="wrap">1</div>
        <div class="wrap">2</div>
        <div class="wrap">3</div>
        <div class="wrap">4</div>
        <div class="wrap last">5</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HelloREM",
      methods:{
        viewWidth(){
          console.log(document.documentElement.clientWidth)
        }
      }
    }
</script>

<style  lang="less">

  .box{
    width: 100%;
    height: 6rem;
    font-size: 16/50rem;
  }
  .wrap{
    float: left;
    width: 2rem;
    height: 1rem;
  }
  .last{
    border: 5px solid;
    margin: 0 5px;
    /*怪异盒子模型（IE盒子模型）*/
    /*margin、padding、border都会计算到盒子内，不会因为添加了margin、padding、border而增加了宽高*/
    box-sizing: border-box;
  }
</style>
