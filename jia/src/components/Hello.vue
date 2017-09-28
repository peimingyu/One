<template>
	<div class="hello">
		<header>
			<input type="text" placeholder="京东搜索">
			<span>登陆</span>
		</header>
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"   ref="loadmore">
			<main>
				<banner></banner>
				<h2><img src="../../static/image/huod/1.jpg" alt=""></h2>
				<huonav></huonav>
				<h2><img src="../../static/image/huod/2.jpg" alt=""></h2>
				<kuai></kuai>
				<miao></miao>
				<h2><img src="../../static/image/huod/3.jpg" alt=""></h2>
				<p><img src="../../static/image/hr/1 (6).jpg" alt=""></p>
				<shenghuo></shenghuo>
				<p><img src="../../static/image/hr/1 (7).jpg" alt=""></p>
				<xiang></xiang>
				<p><img src="../../static/image/hr/1 (4).jpg" alt=""></p>
				<gou></gou>
				<p><img src="../../static/image/hr/1 (5).jpg" alt=""></p>
				<guang></guang>
				<h5>————为您推荐————</h5>
				<sections></sections>
				<p><img src="../../static/image/hr/1 (5).jpg"></p>
			</main>
		</mt-loadmore>
		<!-- <p><img src="../../static/image/hr/1 (5).jpg"></p> -->
		<footer>
			<ul>
				<li v-for="i in list">
					<img :src="i.img" alt="">
				</li>
			</ul>
		</footer>
 	</div>
</template>

<script>
import banner from "./banner"
import huonav from "./huonav"
import kuai from "./kuai"
import miao from "./miao"
import shenghuo from "./shenghuo"
import xiang from "./xiang"
import gou from "./gou"
import guang from "./guang"
import sections from "./sections"

import { Loadmore } from 'mint-ui';

export default {
	name: 'hello',
	data () {
		return {
			list:[
				{
					img:'../../static/image/footer/a-recommend.png'
				},{
					img:'../../static/image/footer/n-catergry.png'
				},{
					img:'../../static/image/footer/n-find.png'
				},{
					img:'../../static/image/footer/n-cart.png'
				},{
					img:'../../static/image/footer/n-me.png'
				},
			]
		}
	},
	components:{
		[Loadmore.name]: Loadmore,
		banner,
		huonav,
		kuai,
		miao,
		shenghuo,
		xiang,
		gou,
		guang,
		sections
	},
	mounted(){

	},
	methods:{
		loadTop() {
			var _this = this
			setTimeout(function() {
				_this.$refs.loadmore.onTopLoaded();
			}, 1000)
			console.log('top')
      },
      loadBottom() {
			var _this = this
			setTimeout(function() {
				// _this.$refs.push(_this.$)
				_this.$refs.loadmore.onBottomLoaded();
			}, 1000)
			console.log("bottom")
			console.log(_this.$refs.loadmore)
      }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	width: 100%;
}
	header{
		position: fixed;
		top:0;
		width: 100%;
		padding:.1rem;
		color:white;
		z-index: 999;
	}
	header input{
		width: 85%;
		height: .25rem;
		font-size: .14rem;
		border-radius: 1rem;
		text-indent: .2rem;
		background: white;
	}
	header span{
		text-align: center;
	}
	main{
		width: 100%;
	}
	main p{
		width: 100%;
		height: .5rem;
		background: url('../../static/image/hr/floor_tit.png') no-repeat;
		background-size: 100% 100%;
		text-align: center;
		line-height: .5rem;
	}
	main p img{
		width: 20%;
	}
	main h2{
		width: 100%;
	}
	main h2 img{
		width: 100%;
	}
	main h5{
		width: 100%;
		height: .3rem;
		text-align: center;
		line-height: .3rem;
		background: #eee;
	}

	footer{
		width: 100%;
		position: fixed;
		bottom:0;
		z-index: 999;
		background: white;
	}
	footer ul{
		width: 100%;
		display: flex;
	}
	footer ul li{
		flex:1;
	}
	footer ul li img{
		width: 100%;
	}
</style>
