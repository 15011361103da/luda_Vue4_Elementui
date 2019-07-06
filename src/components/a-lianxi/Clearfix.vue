<template>
    <div>
      <!--浮动的影响---高度塌陷-->
      <div class="box1 clearfix">
        <div class="box2"></div>
      </div>
      <!--父子元素在垂直方向的外边距重叠问题-->
      <div class="box3 clearfix">
        <div class="box4"></div>
      </div>

      <div>{{arr1}}</div>
    </div>
</template>

<script>
    export default {
      name: "Clearfix",
      data(){
        return{
          arr:["as","fsasrdsa","dfvvd"],

        }
      },
      computed:{
        arr1(){

         /* var arr2 = this.arr;*/  //浅拷贝
          /*arr2[1]="66666";*/   //浅拷贝
          /*数组的深度拷贝*/
          var arr2 = [];
          for(var i = 0;i<this.arr.length;i++){
            arr2[i] = this.arr[i];
          }
          arr2[1] = "dgdfgfg66666";
          console.log(this.arr);
          console.log(arr2);
          return this.arr;
        }
      }

    }
</script>

<style scoped>
  .box1{
    border: 1px solid red;
  }
  .box2{
    width: 300px;
    height: 300px;
    background: #42b983;
    float: left;
  }
  /*清除浮动的元素对此元素的影响*/
  /*.clearfix:after{
    content: "";
    display: table;
    clear: both;
  }*/

  .box3{
    width: 400px;
    height: 400px;
    background: #a631b8;
  }
  .box4{
    width: 300px;
    height: 300px;
    background: #ffbbcc;
    /*外边距重叠*/
    margin-top: 50px;
  }
  /*清除父子元素的外边距重叠的问题*/
  /*.clearfix:before{
    content:"";
    display: table;
  }*/


  /*整合到一起*/
  .clearfix:before,.clearfix:after{
    content:"";
    display: table;
    clear: both;
  }
</style>
