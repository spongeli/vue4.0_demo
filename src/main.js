import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 第三方UI库
require("@/element-ui/element-ui.js")

// 自定义函数
import CommonUtil from "./assets/common.js"
Vue.prototype.$util = CommonUtil

// 网络请求
import {request,requestPost} from "./request/request.js"
Vue.prototype.$get = request
Vue.prototype.$post = requestPost

// 常量库
import CONST from "./assets/const.js"
Vue.prototype.$const = CONST

//全局过滤器
Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
    //es5函数参数设置默认值
    //const lastFormatString = formatString || 
		// moment(input) 把时间字符串转成时间对象
		// format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
		input = input.toString().length < 13 ? input * 1000 : input;
    return moment(input).format(formatString)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
