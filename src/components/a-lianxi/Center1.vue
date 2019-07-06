<template>
    <div>
      <!--1-->
      <div class="box1">
        <div class="box2"><span>卧室box2</span></div>
      </div>
      <!--2-->
      <p class="p1">
        <i class="i1">666</i>
      </p>
      <!--3-->
      <div class="box3">
        <div class="box4"></div>
      </div>
      <!--4-->
      <div class="box5">
        <div class="box6"></div>
      </div>
      <!--5-->
      <div class="box7">
        <div class="box8"></div>
      </div>
      <!-- [if IE 6]><![endif]-->
    </div>
</template>

<script>
    export default {
      name: "Center1",
      data(){
        return{

        }
      },
      methods:{

      },
    }
</script>

<style scoped>
  /*文本水平和垂直居中*/
  .box1{
    width: 25rem;
    height: 20rem;
    background: #a631b8;
    font-size: .8rem;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box2{
    width: 300px;
    height: 200px;
    background: red;
    line-height: 200px;
  }
  /**/
  .p1{
    width: 300px;
    height: 300px;
    background: #475669;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .i1{
    background: #42b983;
    /*行内元素不能设置宽高
    width: 200px;
    height: 200px;*/
    height: 200px;
    width: 200px;
    text-align: center;
    line-height: 200px;
  }
  .box3{
    width: 300px;
    height: 300px;
    background: #bbffcc;
  }
  .box4{
    width: 200px;
    height: 150px;
    background: #789;
    margin: 0 auto;
  }
  .box5{
    /*display: block;*/
    position: absolute;
    /*top: 0;
    left: 0;*/
    width: 100%;
    height: 100%;
    background: #000;
    /*filter: alpha(opacity=30);*/
    /*-ms-filter: "alpha(opacity=30)";*/
    opacity: .3;
    /*z-index: 10000;*/
  }
  .box6{
    /*display: block;*/
    position: absolute;
    /*_position: absolute;*/
    top: 50%;
    left: 50%;
    width: 666px;
    height:400px;
    margin-left: -333px;
    margin-top: -200px;
    z-index: 10001;
    /*box-shadow: 2px 2px 4px #A0A0A0, -2px -2px 4px #A0A0A0;*/
    background-color: #bbb;
  }
  .box7{
    width: 500px;
    height: 500px;
    background: #ffbbcc;
    position: absolute;
  }
  .box8{
    width: 200px;
    height: 150px;
    background: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -75px;
  }
</style>
