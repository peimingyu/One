<template>
	<div class="search">
		<h3>全站搜索</h3>
		<el-row :gutter="18" >
		<el-col :span="16"><el-input v-model="txt" placeholder="请输入内容"></el-input></el-col>
		<el-col :span="4"><el-button type="primary" icon="search" @click="searchFn(txt)">搜索</el-button></el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name:'search',
	data(){
		return {
			txt:''
		}
	},
	//created
	methods:{
		searchFn(data){
			// console.log(data);
		}
	}
}
</script>

<style scoped>

</style>