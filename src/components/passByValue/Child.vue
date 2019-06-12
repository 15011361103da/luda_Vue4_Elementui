<template>
    <div>
      儿子
      {{hel}}
      <button @click="value">传给父亲</button>
      <div>zi:{{getCount}}</div>

      <button @click="add">加加</button>
    </div>
</template>

<script>
    export default {
      name: "Child",
      data(){
        return{
          mes:'这里是儿子给父亲传的值'
        }
      },
      methods:{
        value(){
          this.$emit('mes',this.mes)
        },
        add(){
          //这种没使用actions，直接提交到mutations
          //this.$store.commit("increment");
          //这种是使用了actions！！！
          this.$store.dispatch("increment");
        }
      },
      props:{
        hel:{
          type:String,
          default:''
        }
      },
      computed:{
        getCount(){
          //return this.$store.state.count;
          //使用了getters，不能直接读取
          return this.$store.getters.getstate;
        }
      },

    }
</script>

<style scoped>

</style>
