<template>
    <div class="huonav">
        <dl v-for="i in items">
            <dt><img :src="i.img" alt=""></dt>
            <dd>{{i.cont}}</dd>
        </dl>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        name:'huonav',
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                items:[
                    {
                        img:"../../static/image/nav/05.png",
                        cont:"京东超市"
                    },{
                        img:"../../static/image/nav/09.png",
                        cont:"全球购"
                    },{
                        img:"../../static/image/nav/06.png",
                        cont:"服装城"
                    },{
                        img:"../../static/image/nav/10.png",
                        cont:"京东生鲜"
                    },{
                        img:"../../static/image/nav/07.png",
                        cont:"京东到家"
                    },{
                        img:"../../static/image/nav/02.png",
                        cont:"充值缴费"
                    },{
                        img:"../../static/image/nav/01.png",
                        cont:"领京豆"
                    },{
                        img:"../../static/image/nav/08.png",
                        cont:"领券"
                    },{
                        img:"../../static/image/nav/03.png",
                        cont:"惠赚钱"
                    },{
                        img:"../../static/image/nav/04.png",
                        cont:"物流查询"
                    }
                ],
                swiperOption: {
                    pagination: '.swiper-pagination',
                    slidesPerView: 'auto',
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
    .huonav{
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        padding:.1rem;
        font-size: .14rem;
    }
    .huonav dl{
        width: 20%;
        text-align: center;
    }
    .huonav dl dt{
        width: 100%;
    }
    .huonav dl dt img{
        width: 50%;
    }
</style>