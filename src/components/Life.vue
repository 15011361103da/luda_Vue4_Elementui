<template>
    <div class="">
      <p id="pp">{{msg}}</p>
    </div>
</template>

<script>
    export default {
      name: "Life",
      data(){
        return{
          msg:"shuju",
        }
      },
      methods:{
        show(){
          console.log("此时show方法执行")
        },
        arr(){
          var arr = null;
          console.log(typeof arr);
        }
      },
      beforeCreate() {
        /*console.log(this.msg);*/  //undefined  此时data中的数据还不能使用
        /*this.show();*/  //报错   此时methods  中的数据还不能使用
      },
      created() {
        console.log(this.msg);  //  此时data中的数据能使用
        this.show();  //   此时methods  中的数据能使用
        var arr = null;
        console.log(typeof arr);
      },
      //挂载之前，模板已经在内存中编辑完成了，但是尚未把模板渲染到页面中去，
      beforeMount() {
        /*console.log(this.msg);*/  //undefined  此时data中的数据还不能使用
        /*this.show();*/  //报错   此时methods  中的数据还不能使用

      },
      mounted() {
        console.log(window.document.getElementById("pp").innerText)
      },
    }
</script>

<style scoped>

</style>
