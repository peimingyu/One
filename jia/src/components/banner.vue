<template>
<div class="banner">
    <swiper :options="swiperOption"  ref="mySwiper">
        <swiper-slide v-for="item in items">
            <img :src="item" class="index_img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        name:'banner',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                items:[
                    '../../static/image/header_swiper/01.jpg',
                    '../../static/image/header_swiper/02.jpg',
                    '../../static/image/header_swiper/03.jpg',
                    '../../static/image/header_swiper/04.jpg',
                    '../../static/image/header_swiper/05.jpg',
                    '../../static/image/header_swiper/06.jpg',
                    '../../static/image/header_swiper/07.jpg',
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
                },
                swiperSlides: [1, 2, 3, 4, 5, 6, 7]
            }
        },
        computed: {
            swiper() {
              return this.$refs.mySwiper.swiper;
            }
        },
        mounted () {
            // this.swiper.slideTo(0, 0, true);
        }
    }
</script>

<style>
    .banner{
        width: 100%;
    }
    swiper-slide{
        width: 100%;
    }
    .banner img{
        width: 100%;
        height: 100%;
    }
    .banner .swiper-pagination span{
        width: .1rem;
        height: .1rem;
    }
</style>