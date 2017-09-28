<template>
	<div class="shenghuo">
		<div class="top">
			<dl v-for="i in msg">
				<dt>
					<h4>{{i.cont}}</h4>
					<p>{{i.tet}}</p>
				</dt>
				<dd><img :src="i.img"></dd>
			</dl>
		</div>
		<div class="bottom">
			<dl v-for="i in list">
				<dt>
					<h4>{{i.cont}}</h4>
					<p>{{i.tet}}</p>
				</dt>
				<dd><img :src="i.img"></dd>
			</dl>
		</div>
		<div class="banner">
			<swiper :options="swiperOption"  ref="mySwiper">
				<swiper-slide v-for="item in items">
					<img :src="item" class="index_img">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
	name:"shenghuo",
	components: {
		swiper,
		swiperSlide
	},
	data(){
		return {
			msg:[
				{
					img:'../../static/image/shenghuo/01 (116).jpg',
					cont:'玩3C',
					tet:"iphone7超.."
				},{
					img:'../../static/image/shenghuo/01 (8).jpg',
					cont:'京东家电',
					tet:"每满1500"
				},{
					img:'../../static/image/shenghuo/01 (11).jpg',
					cont:'京东超市',
					tet:"满99减50"
				},{
					img:'../../static/image/shenghuo/01 (52).jpg',
					cont:'爱家',
					tet:"家装节"
				},
			],
			list:[
				{
					img:'../../static/image/shenghuo/01 (98).jpg',
					cont:'爱宝宝',
					tet:"爆款低至5折"
				},{
					img:'../../static/image/shenghuo/01 (166).jpg',
					cont:'爱美丽',
					tet:"美妆0元试"
				},{
					img:'../../static/image/shenghuo/01 (125).jpg',
					cont:'爱吃',
					tet:"低至9.9包邮"
				},{
					img:'../../static/image/shenghuo/01 (67).jpg',
					cont:'爱穿搭',
					tet:"穿着新衣"
				},
			],
			items:[
				'../../static/image/banner/swiper/1/01.jpg',
				'../../static/image/banner/swiper/1/02.jpg',
			],
			swiperOption: {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                notNextTick: true,
                autoplay: 2000,
                grabCursor : true,
                centeredSlides: true,
                paginationClickable: true,
                onSlideChangeEnd: swiper => {
                    this.page = swiper.realIndex+1;
                    this.index = swiper.realIndex;
                },
            }
		}
	},
	computed: {
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
    },
}
</script>

<style>
	.shenghuo{
		width: 100%;
	}
	.shenghuo .top{
		width: 100%;
		display: flex;
		flex-wrap:wrap;
	}
	.top dl{
		width: 50%;
		display: flex;
	}
	.top dl dt{
		width: 50%;
	}
	.top dl dd{
		flex:1;
	}
	.top dl dd img{
		width: 80%;
	}
	.shenghuo .bottom{
		width: 100%;
		display: flex;
		flex-wrap:wrap;
	}
	.bottom dl{
		width: 25%;
		text-align: center;
	}
	.bottom dl dt{
		width: 100%;
		font-size: .12rem;
	}
	.bottom dl dd{
		width: 100%;
	}
	.bottom dl dd img{
		width: 80%;
	}
</style>