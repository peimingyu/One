<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
	*{
		margin:0;
		padding:0;
		list-style: none;
		box-sizing:border-box;
	}
	#app{
		font-size: .16rem;
		overflow: hidden;
		width: 100%;
		height: 100%;
		display: flex;
	}
	/*input,button{
		border:none;
		outline:none;
		background: none;
	}*/
</style>
