<template>
    <div>
      <div class="box1"></div>
      <div class="box2"></div>
      <span style="width: 100px;height: 100px;background-color: red">6666</span>
      <div class="box3">
        45432121
        <div class="box3-child"></div>
      </div>

      <div class="box4 clearfix">
        <div class="box5"></div>
        <!--清除浮动，解决高度塌陷-->
        <!--<div style="clear: both"></div>-->
        <!--
          清除浮动解决高度塌陷：
          1、父元素设置：overflow：hidden；不兼容IE6
          2、父元素设置：zoom：1；IE6
          3、浮动元素后面添加空元素，然后设置clear：both；
          4、父元素设置：after｛content：“”；display：block；clear：both；｝
        -->
      </div>
      <!--相对定位与绝对定位-->
      <div class="absolute1"></div>
      <div class="relative1"></div>
      <span class="s1">测试绝对定位会不会改变元素性质</span>


    </div>
</template>

<script>
    export default {
      name: "Base",
      data(){
        return{

        }
      },
      methods:{

      },
      computed:{

      }
    }
</script>

<style scoped>
  .box1{
    width: 150px;
    height: 150px;
    background-color: red;
    margin-bottom: 100px;
    float: left;
  }
  .box2{
    width: 200px;
    height: 200px;
    background-color: yellow;
    margin-top: 50px;
  }
  /*em:相对于当前元素的font-size*/
  .box3{
    width: 8em;
    height: 5em;
    font-size: 20px;
    background-color: #42b983;
  }
  .box3-child{
    width: 1em;
    height: 2em;
    background-color: yellow;

  }
  .box5{
    width: 100px;
    height: 100px;
    background-color: #d3dce6;
    float: left;
  }
  .box4{
    border: 1px solid #bfc;
    background-color: red;
  }
  .clearfix:after{
    /*解决高度塌陷问题的完美方法*/
    content: "";
    display: block;
    clear: both;
  }
  /*高度塌陷解决IE6*/
  .clearfix{
    zoom: 1;
  }

  .absolute1{
    width: 300px;
    height: 300px;
    background-color: yellow;
    position: absolute;
    top: 290px;
    z-index: 20;
  }
  .relative1{
    width: 200px;
    height: 200px;
    background-color: #a631b8;
    position: relative;
    bottom: 50px;
  }
  .s1{
    width: 1000px;
    height: 1000px;
    background-color: #475669;
    position: absolute;
  }
</style>
