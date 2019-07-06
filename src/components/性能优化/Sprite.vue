<template>
    <div>
      <div class="box1"></div>
    </div>
</template>

<script>
    export default {
      name: "Sprite",
      data(){
        return{

        }
      },
      methods:{

      },
      computed:{

      },
    }
</script>

<style scoped>
  /*
  雪碧图的好处：
    1.可以使图片大小整体减少（）
    2.加载图片只需请求一次，提高访问效率。
  */
  .box1{
    width: 93px;
    height: 29px;
    background:url("../../assets/img/btn2.png") no-repeat;
  }
  .box1:hover{
    background-position:-93px 0;
  }
  .box1:active{
    background-position: -186px 0;
  }
</style>
