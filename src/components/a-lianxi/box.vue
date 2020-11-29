<template>
    <div>
      <div class="box1">
        <div class="box2">
          box2
        </div>
      </div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
      <div class="box6">
        <div class="box7"></div>
      </div>
      <div class="box8">
        <span style="height: 100%;vertical-align: middle;display: inline-block"></span>
        <img style="vertical-align: middle" src="../../assets/img/3.png" alt="">
      </div>
      <div style="position:relative; width: 300px; height: 500px; border: 1px solid #000000">
        <div style="position:absolute; top: 50%; left: 50%;transform:translate(-50%,-50%);  width:50px; height:50px; border: 1px solid #000000"></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "box",
      data(){
        return{

        }
      },
      methods:{

      },
      mounted(){
        window.localStorage.setItem("asd",6666)
        console.log(window.localStorage.getItem("asd"))
        //split()   jion()
        let arr = ['asd','鹿达',666,true]
        console.log(arr.join(),typeof arr.join())
        console.log('sdf,jhfg,2541,false'.split(','))
        // typeof 的类型有number、string、object、boolean、function、undefined
        let typ = 5*'45'
        console.log(typeof typ,typ)
        let arr1 = ['qwr','鹿达',6125,undefined]
        console.log(arr1.push(888))
        console.log(arr1.pop())
        console.log(arr1.unshift(666),arr1)
        console.log(arr1.shift())
        console.log(arr1.slice(1,3),arr1)
      }
    }                   
</script>

<style scoped>
  .box1 {
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
    margin-bottom: 20px;
  }
  .box2 {
    width: 100px;
    height: 100px;
    background: green;
    margin-top: 50px;
    position: absolute;
    top:10px;
    right: 10px;
    bottom: 10px;
  }
  .box3 {
    width: 100px;
    height: 100px;
    background: red;
    padding: 10px;
    box-sizing: border-box;
  }
  .box4 {
    width: 100px;
    height: 100px;
    background: #668822;
    display: none;
  }
  .box5 {
    width: 100px;
    height: 100px;
    background: yellow;

  }
  .box6 {
    width: 300px;
    height: 300px;
    background: #668899;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box7 {
    width: 100px;
    height: 50px;
    border: 1px solid #000000;
  }
  .box8 {
    width: 400px;
    height: 300px;
    border: 1px solid #000000;
    text-align: center;
    vertical-align:middle;
  }
</style>
