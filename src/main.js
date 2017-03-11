import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'
import Axios from 'axios'


Vue.use(VueRouter)
const router = new VueRouter({
	mode:'history',
	routes:routerConfig
})

//require('./assets/css/common.css') //全局引入css
//require('./assets/css/index.css')
import './assets/css/common.css'
import './assets/css/index.css'
import './assets/js/jquery-1.11.2.min.js'
import './assets/js/html-size-calculation.js'
/*import './assets/js/common.js'
import './assets/js/move.js'*/

new Vue({
  el: '#app',
  router,
  store,
  Axios,
  render: h => h(App)
})


/*axios.defaults.baseURL='http://localhost:8082/'; //配置请求跟路径*/
