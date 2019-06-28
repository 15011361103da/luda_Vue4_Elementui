<template>
    <div class="">
      <ul>
        <li v-for="(arr,index) in arrayList" :key="arr.id">
          <input type="checkbox">
          {{arr.name}}
          <button @click="del(index)">删除{{arr.name}}</button>
        </li>

      </ul>
      <input type="text" v-model="startname">
      <input type="text" v-model="lastname">
      {{name}}


      <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage"></el-progress>
      <button @click="sum">进度条</button>


      <div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="value1" :max="80"></el-slider>
      </div>
      <div style="width: 100px;height: 100px; padding: 10px;background-color: red">

      </div>
    </div>
</template>

<script>
    export default {
      name: "ArrayFun",
      data(){
        return{
          arrayList:[
            {id:1,name:"asdasdsad"},
            {id:2,name:"鹿达"},
            {id:3,name:"修宇川"},
            {id:4,name:"5151"},
          ],
          startname:'',
          lastname:'',

          number:1,
          percentage:20,
          //滑块进度条
          value1: 0,

        }
      },
      computed:{
        arr(){
          return 666
        },
        name(){
          return this.startname + this.lastname;
        }
      },
      methods:{
        del(index){
          this.arrayList.shift();
        },
        digui(){
          this.number++;
          if(this.number<8){
            this.digui();
          }

          return
        },
        //增加进度条
        sum(){
          this.percentage += 10;
        }
      }
    }
</script>

<style scoped>
  .block{
    width: 75%;
    margin: 0 auto;
  }
</style>
