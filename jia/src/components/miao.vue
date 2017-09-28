<template>
  <div id="scroll">
    <div class="miao">
      <ul>
        <li style="color:red;">京东秒杀</li>
        <li style="color:black;">14点场</li>
        <li>01：15：20</li>
        <li style="color:red;">京东尖货</li>
      </ul>
    </div>
    <div class="hua">
      <dl v-for="i in msg">
        <dt><img :src="i.img" alt=""></dt>
        <dd>
          <p style="color:red;">{{i.xpic}}</p>
          <p>{{i.ypic}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'miao',
  data () {
    return {
      msg: [
        {
          img:'../../static/image/product/01 (1).jpg',
          xpic:'￥53',
          ypic:'￥199'
        },{
          img:'../../static/image/product/01 (2).jpg',
          xpic:'￥53',
          ypic:'￥199'
        },{
          img:'../../static/image/product/01 (3).jpg',
          xpic:'￥53',
          ypic:'￥199'
        },{
          img:'../../static/image/product/01 (4).jpg',
          xpic:'￥53',
          ypic:'￥199'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#scroll {
  width: 100%;
}
.miao{
  width: 100%;
}
.miao ul{
  width: 100%;
  display: flex;
}
.miao ul li{
  flex:1;
  text-align: center;
}
.hua{
  width: 100%;
  display: flex;
}
.hua dl{
  flex:1;
  text-align: center;
}
</style>
