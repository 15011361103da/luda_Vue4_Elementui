<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
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
        "http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg",
        "http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg",
        "http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner3.jpg",
      ]
    }
  },
  methods:{
    test(){
      alert(666)
    },
    handleChange(value) {
      console.log(value);
    }
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
    height: 300px;
  }
</style>
