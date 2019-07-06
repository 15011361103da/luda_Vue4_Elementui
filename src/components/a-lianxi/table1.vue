<template>
    <div>
      <table>
        <tr>
          <td>数学</td>
          <td>英语</td>
          <td>语文</td>
          <td>物理</td>
        </tr>
        <tr>
          <td>100</td>
          <td rowspan="2">200</td>
          <td>300</td>
          <td rowspan="2">400</td>
        </tr>
        <tr>
          <td >100</td>
          <td>200</td>
          <!--横向合并单元格：colspan-->

        </tr>
        <tr>
          <td>100</td>
          <td rowspan="2">200</td>
          <td>300</td>
          <td rowspan="2">400</td>
        </tr>
        <tr>
          <td>100</td>
          <td>200</td>
          <td>300</td>
          <td>400</td>
        </tr>
        <tr>
          <td>100</td>
          <td>200</td>
          <td>300</td>
          <td>400</td>
        </tr>
        <tr>
          <td>100</td>
          <td>200</td>
          <td>300</td>
          <td>400</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
      name: "table1"
    }
</script>

<style scoped>
  table{
    width: 50%;

    margin: 0 auto;
    /*表格的边框合并*/
    border-collapse: collapse;

  }
  td{
    border: 1px solid black;
  }
  tr:nth-child(even){
    background: yellow;
  }
  tr:hover{
    background: red;
  }
</style>
