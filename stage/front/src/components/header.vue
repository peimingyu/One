<template>
  <div>
    <header>
      <h2>个人博客</h2>
    </header>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">一级列表</template>
        <el-menu-item index="2-1" v-for="i in data">{{i.cnname}}</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">二级列表</template>
        <el-menu-item index="3-1" v-for="i in tim">{{i.cnname}}</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="line">
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      data:null,
      tim:null
    };
  },
  created(){
    var _this = this;
  },
  created(){
    const _this = this;
    this.axios.get("http://localhost:9999/api/front_article/getNav").then((data)=>{
      // console.log(data.data.data[1].twodata[0]);
      // console.log(data.data.data[0].onedata.cnname);
      // console.log(data.data.data[0].twodata[0].cnname);
      _this.data = data.data.data[0].twodata;
      _this.tim = data.data.data[1].twodata;
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key == '2-1'){
        this.$router.push({path:"/list",query:{id:1}})
      }
    }
  }
}
</script>

<style scoped>
header{
  width: 100%;
  height: 100px;
  background: black;
  color:white;
  line-height: 100px;
}
header h2{
  text-indent: 10px;
}
</style>