<template>
    <div class="parent">
      父亲:{{mes}}
      <Child :hel="hello" @mes="mesSend"/>
      <div>{{getCount}}</div>
      <button @click="getCount1">获取count1</button>
      <div>fu 显示count1：{{count1}}</div>

      <button @click="min">减少</button>

      <button @click="arr">数组指定位置</button>
    </div>
</template>

<script>
  import Child from './Child'
  export default {
    name: "Parent",
    data(){
      return{
        hello:'这里是父亲传给儿子的数据,',
        //儿子传的值
        mes:'',
        count1:''
      }
    },
    components:{
      Child
    },
    computed:{
      getCount(){
        //return this.$store.state.count;
        return this.$store.getters.getstate;
      }
    },
    methods:{
      mesSend(data){
        this.mes = data+666;
      },
      //测试vuex，获取store的count1
      getCount1(){
        this.count1 = this.$store.state.count1;
      },
      min(){
        //这种没使用actions，直接提交到mutations
        //this.$store.commit("increment");
        //这种是使用了actions！！！
        this.$store.dispatch("min");
      },
      arr(){
        var arr = [15,1,5,12,15,21,65,48,51,52];
        arr.splice(2,1);
        console.log(arr);
      }
    },
  }
</script>

<style>
  .parent{
    font-size: .5rem;
  }
</style>
