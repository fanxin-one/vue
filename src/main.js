import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import crypto from 'crypto';
import axios from 'axios';
import VueResource from 'vue-resource';
import store from './vuex/store';
import SafeAlert from './vuex/safeAlert';
import AdminListStore from './vuex/adminListStore';
Vue.prototype.$store = store; //引入数据仓库
Vue.prototype.$crypto = crypto; //引入加密模块 crypto
axios.defaults.withCredentials = true; //允许你在进行跨域的时候，携带cookie   讲请求的组件赋值给vue，方便在子组件里面使用
Vue.prototype.$reqs = axios; //引入官方推荐的交互工具
Vue.prototype.$safeAlert = SafeAlert; //引入弹窗的数据库
Vue.prototype.$adminListStore = AdminListStore; //引入系统人员列表里面的数据仓库  放在vue原型里面，使用的时候直接$adminListStore  
axios.defaults.withCredentials = true;
/**
 * this.$reqs  在入口文件命名的， 将他赋给了VUE原型
 * */
Vue.config.debug = true; // 开启debug模式
Vue.use(Vuex);
Vue.use(VueResource); // vue vue-resource
new Vue({
    el: '#app',
    router,

})