<template>
  <div>
    <el-table
      :data="data"
      style="width: 100%">
      <el-table-column
        prop="cnname_one"
        label="一级分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cnname_two"
        label="二级分类">
      </el-table-column>
      <el-table-column
        prop="time"
        label="日期"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data:null
    }
  },
  created(){
    const _this= this;
      this.axios.get('http://localhost:9999/api/front_article/getArticleAll').then((data)=>{
        // console.log(data.data.data);
        _this.data=data.data.data
      })
  }
}
</script>

<style scoped>

</style>