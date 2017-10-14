<template>
  <div class="list">
    <el-table
      :data="data"
      style="width: 100%">
      <el-table-column
        prop="article_name"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cnname_one"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="daodu"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发布时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:"list",
  data(){
    return {
      data:null
    }
  },
  created(){
    const _this=this;
    this.axios.get("http://localhost:9999/api/front_article/getArticleAll").then(function(data){
      // console.log(data.data.data);
      _this.data = data.data.data
    })
  },
  mounted(){
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>