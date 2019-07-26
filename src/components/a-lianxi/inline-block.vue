<template>
    <div style="height: 5000px;">
      <!--<div class="d1">
        <h1 style="background: #bbffcc;width: 200px;height: 200px"></h1>
        <table style="border: 1px salmon solid;border-collapse: collapse">
          <tr style="width: 150px;background: #bbffcc ">
            <td style="height: 50px;width: 30px">55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
          </tr>
          <tr style="">
            <td>55</td>
            <td>55</td>
            <td>55</td>
            <td>55</td>
          </tr>
        </table>
        <a href="#" style="display:inline-block; width: 300px;height: 300px;background: yellow">98sdfdf4545</a>
      </div>
      <input style="width: 100px;height: 100px; background: #bbffcc" id="nan" type="checkbox" name="sex"/><label for="nan">:nan</label>
      <input id="nv" type="checkbox" name="sex"/><label style="width: 200px;height: 50px" for="nv">:nv</label>
      <hr style="border: .5px solid red"/>
      <em style="width: 200px;height: 200px;background: red">6666666</em>
      <strong style="width: 20px;height: 20px;background: red">hangnei</strong>
      <fieldset>
        <legend>jhjhjbh666:</legend>
        <form action="" style="width: 200px;height: 100px;background: #bbffcc">
          <input type="text">
          <textarea style="width: 50px;height: 15px;background: yellow"></textarea>
          <tutton style="width: 20px;height: 20px;background: red;">6666</tutton>
          <select name="" id="" style="width: 50px;height: 40px;background: red">
            <option>6654</option>
            <option style="width: 60px;height: 300px;background: yellow">32154</option>
          </select>
        </form>
      </fieldset>
      <ol style="width: 500px;height: 200px;background: aquamarine">
        <li style="width: 200px;height: 100px;background: red"></li>
      </ol>-->

      <!--浮动的特点-->
      <!--<div class="box4">box1</div>
      <div class="box5" style="">box2 <a href="#">qawda</a></div>
      <div class="box6">box3</div>-->
      <!--元素浮动后都变成行内块；都由内容撑开，可设置宽高，-->
      <!--<span style="width: 100px;height: 100px;background: red;float:left;"></span>
      <span style="width: 100px;height: 100px;background: yellow;float:left;"></span>-->

      <!--高度塌陷的问题-->
      <!--<div class="box7">
        <div class="box8"></div>
        <div class="box9"></div>
&lt;!&ndash;
        <div style="width: 100px;height: 100px;background: aqua;position: relative;top: 220px;"></div>
&ndash;&gt;
      </div>
      <div class="box10">
        <div class="box11"></div>
      </div>-->
      <!--<div style="width: 100px;height: 100px;background: red;position: absolute;right: -20px;"></div>-->

      <!--<div style="width: 100px;height: 100px;background: red;position: relative;left:100px;top:100px"></div>
      <div style="width: 200px;height: 100px;background: #322;position: absolute;left:50px;top:50px"></div>-->
<!--
      <div style="width: 300px;height: 300px;background: red;"></div>
-->
      <span style="width: 150px;height: 150px;background: yellow;position: absolute;"></span>
      <span style="width: 100px;height: 100px;background: blue;position: absolute;left: 500px"></span>
<!--
      <div style="width: 2000px;height: 200px;background: #42b983"></div>
-->
      <div style="width: 200px;height: 200px;background: #ffbbcc;position: fixed;"></div>
    </div>
</template>

<script>
    export default {
      name: "inline-block",
      data(){
        return{
          arr:[68,15,45,45,48,21,54,56,15,45,45,45]
        }
      },
      created(){
        console.log(this.arr);
        var cen;
        for(var i=0;i<this.arr.length;i++){
          for(var j=0;j<this.arr.length;j++){
            if(this.arr[j]>this.arr[j+1]){
              cen = this.arr[j];
              this.arr[j] = this.arr[j+1];
              this.arr[j+1] = cen;
            }
          }
        }
        console.log(this.arr)
      },
      methods:{

      }
    }
</script>

<style scoped>

  .d1{
    width: 600px;
    height: 500px;
    background: #a631b8;
  }
  td{

    border: 10px red solid;
  }
  .box4{
    float: left;
    width: 200px;
    height: 200px;
    background: green;

    position: absolute;
  }
  .box5{
    width: 500px;
    height: 200px;
    background: blue;
    /*float:left;*/
  }
  .box6{
    width: 150px;
    height: 150px;
    background: red;
    text-align: center;
    /*float: right;*/
  }
  .box7{
    /*width: 500px;
    height: 500px;*/
    background: olive;
    border: #bbffcc 1px solid;
    /*第一种解决高度塌陷的方法,此方法除了父元素内的元素相对对位到父元素外的情况，其他都可以，如果元素定位到父元素以外，则会看不到*/
    /*overflow: hidden;*/
    /*第二种：放大一倍，兼容ie6、ie7， 其他浏览器不好使*/
    zoom:1;
  }
  .box8{
    width: 300px;
    height: 300px;
    background: #a631b8;
    float:left;

  }
  /*第三种方法：在浮动元素（子元素）后面添加一个空的div，然后给空div设置clear：both；*/
  /*.box9{
    clear: both;
  }*/
  /*第四种方法：伪类*/
  .box7:after{
    content: "";
    display: block;
    clear: both;
  }
  .box10{
     width: 200px;
     height: 200px;
     background: red;
    /* margin-top: 50px;*/
  }
  .box10:before{
     content: "";
     display: table;
  }
  .box11{
    width: 100px;
    height: 100px;
    background: yellow;
    margin-top: 100px;
  }

</style>
