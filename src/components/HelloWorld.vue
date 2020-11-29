<template>
  <div>
    <h1>{{ msg }}</h1>
 
    <el-carousel height="481px" indicator-position="outside">
      <el-carousel-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success" @click="echartsBtn">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <i class="el-icon-edit"></i>
    <i class="el-icon-share" @click="test"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button><br/>


    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 1,
      imgs:[
        "https://img.adidas.com.cn/resources/2020kvbanner/sep/SUPERSTAR/kv-pc(15).jpg",
        "https://img.adidas.com.cn/resources/2020kvbanner/sep/SUPERSTAR/kv-pc(14).jpg",
        "https://img.adidas.com.cn/resources/2020kvbanner/sep/winter/kv-pc2.jpg",
      ]
    }
  },
  methods:{
    test(){
      alert(666)
    },
    handleChange(value) {
      console.log(value);
    },
    echartsBtn(){
      console.log("跳转成功")
      this.$router.push({path:'/echartsFirst'})
    }
  },
  mounted() {
    console.log("luda")
    function test(){
      var n = 1
      console.log(n)
      function b(){
        return ++n
      }
      return b
    }
    
    let res = test()
    let num = res()
    console.log(num)
    console.log(res())

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-size: .1rem;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*自定义设置样式*/
.el-carousel{
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel__item img{
    width: 100%;
    
}
</style>
