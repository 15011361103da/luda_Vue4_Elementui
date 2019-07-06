<template>
    <div class="box1">

    </div>
</template>

<script>
  import dd from '../../js/DD_belatedPNG_0.0.8a-min.js'
    export default {
        name: "Ie6-png",
      mounted:function () {
        console.log(66666);

        /*this.luda();*/
      },
      methods:{
          luda(){
            console.log(888888);
            this.vm.$el.arr()
          }
      }
    }
</script>

<style scoped>
  .box1{
    width:300px;
    height: 300px;
    background-image: url("../../assets/img/3.png");
    background-repeat: no-repeat;

  }
</style>
