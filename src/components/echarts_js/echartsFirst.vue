<template>
  <div>
    <div id="myChart" :style="{width: '600px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'echartsFirst',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     
    }
  },
  methods:{
    test(){
      alert(666)
    },
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛","雪纺","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    }
    
  },
  mounted() {
    this.drawLine();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
