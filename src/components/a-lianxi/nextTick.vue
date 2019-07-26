<template>
    <div style="position: relative;height: 100%">
      <div class="div1" ref="div1">{{mes}}</div>

      <div class="">{{mes1}}</div>
      <div class="">{{mes2}}</div>
      <div class="">{{mes3}}</div>

      <button @click="changeMes">修改Mes数据</button>

      <i class="icon-music"></i>
      <span class="icon-play"></span>

      <span :class="cla" ref="spa">666</span>

      <div class="esll">省略号省略号省略号省略号省略号省略号省略号省略号</div>

      <div class="wrap">
        <div class="boxsiz"></div>
      </div>

      <div class="radius">666</div>
    </div>
</template>

<script>
    export default {
      name: "nextTick",
      data(){
          return{
            mes:"改变之前的数据",
            mes1:"mes1",
            mes2:"mes2",
            mes3:"mes3",
            cla:{
              shadow: true,
              out:false
            },
          }
      },
      beforeCreate(){
        console.log("beforeCreate()")
      },
      created(){
        console.log("created()");
      },
      beforeMount(){
        console.log("beforeMount()");
      },
      mounted(){
        console.log("mounted()");
        this.$refs.spa.onmouseout = ()=>{
          this.cla.out = true;
        }
      },
      beforeUpdate(){
        console.log("beforeUpdate()");
      },
      updated(){
        console.log("updated()");
      },
      methods:{
        changeMes(){
          this.mes = "改变之后的数据";

          this.mes1 = this.$refs.div1.innerHTML;
          this.$nextTick(function(){
            this.mes2 = this.$refs.div1.innerHTML;
          });
          this.mes3 = this.$refs.div1.innerHTML;
        }
      },
      computed:{
        /*cla(){
          return "shadow";
        }*/
      }
    }
</script>

<style scoped>
 .icon-play{
   color: #bbffcc;
 }
  .shadow{
    text-shadow: red 10px 10px 10px;
  }
  .shadow:hover{
    background: #a631b8;
    transition: 10s;
  }
  .out{
    background: white;
    transition: 10s;
  }
  /*省略号*/
  .esll{
    width: 200px;
    height: 200px;
    background: #ffbbcc;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .boxsiz{
    width:300px;
    height:300px;
    background: #a631b8;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 0 20px;
    box-sizing:border-box;
    border: 10px solid;
  }
  .wrap{
    height: 800px;
    background: red;
    position: relative;

  }
  .radius{
    width: 50px;
    height: 50px;
    border: 1px solid;
    border-radius: 50%;
  }
</style>
