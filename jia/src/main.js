// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUi from 'mint-ui'
import axios from "axios"
import vueAxios from "vue-axios"

import { Loadmore } from 'mint-ui';
import 'mint-ui/lib/style.css'
// Vue.component(Loadmore.name, Loadmore);

Vue.use(vueAxios, axios)
Vue.use(mintUi)

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import VIscroll from 'viscroll'

// Vue.use(VIscroll, {
// 	mouseWheel: true,
// 	click: false,
// 	preventDefault: true,
// 	tap: false,
// 	bounce: false,
// 	disableMouse: false,
// 	disablePointer: true,
// 	disableTouch: false,
// 	transitions:true,
// 	hScrollbar:false,  //禁止横向滚动
// 	vScroll:true,      //为true时允许y轴滚动
//     bounce:false,      //当滚动器到达容器边界时他将执行一个小反弹动画。在老的或者性能低的设备上禁用反弹对实现平滑的滚动有帮助。
//     click:true,    　   //如果你想你的应用程序响应click事件，那么该设置次属性为true
//     hideScrollbar: true //是否隐藏滚动条
// })

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
