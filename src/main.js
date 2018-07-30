// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import '../reset.css'
// 引入全部组件
import Mint from 'mint-ui';
import "mint-ui/lib/style.css";

Vue.use(Mint);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://127.0.0.1:8088/api1';
// axios.defaults.baseURL = 'http://www.tiantianjia.store';

//  axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//  axios.interceptors.request.use(function (config) {
//    // 在发送请求之前做些什么
//    let data = JSON.stringify(config)
//    return config;
//  }, function (error) {
//    // 对请求错误做些什么
//    return Promise.reject(error);
//  });
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://api.example.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// axios.defaults.headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
