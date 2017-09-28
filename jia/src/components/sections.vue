<template>
   <div class="sections">
      <dl v-for="i in list">
         <dt>
            <img :src="i.img" alt="">
         </dt>
         <dd>
            <p>{{i.cont}}</p>
            <p style="color:red;">{{i.pic}}</p>
         </dd>
      </dl>
   </div>
</template>

<script>
   export default{
      name:'sections',
      data () {
         return {
            list:[
               {
                  img:'../../static/image/sections/1.jpg',
                  cont:'辛格威水冷大公牛沙滩车四轮越野摩托铝合金轮款',
                  pic:'￥1000.00'
               },{
                  img:'../../static/image/sections/2.jpg',
                  pic:'￥2880.00',
                  cont:'捷运来迅鹰款100CC/125CC踏板车摩托车助力车休闲摩'
               },{
                  img:'../../static/image/sections/3.jpg',
                  pic:'￥2380.00',
                  cont:'豪新一本 125cc迅鹰 免费送合格大证 踏板车 黑色'
               },{
                  img:'../../static/image/sections/4.jpg',
                  pic:'￥99.00',
                  cont:'莎德妮 单肩手提斜挎包女包斜跨2017'
               },{
                  img:'../../static/image/sections/5.jpg',
                  pic:'￥2100.00',
                  cont:'新迅鹰踏板车摩托车 男女通用踏板车摩托车 其他颜色'
               },{
                  img:'../../static/image/sections/6.jpg',
                  pic:'￥230.00',
                  cont:'皮匠传奇男士手包真皮手拿包韩版头层牛皮商务'
               },
            ]
         }
      }
   }
</script>

<style>
.sections{
   width: 100%;
   display: flex;
   flex-wrap:wrap;
}
dl{
   width: 50%;
   font-size: .12rem;
}
dl dt{
   width: 100%;
}
dl dt img{
   width: 100%;
}
dl dd p{
   line-height: .2rem;
}
</style>