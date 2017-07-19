import Vue from 'vue';
import Router from 'vue-router';
// 组件
import Hello from '@/components/Hello';
import Login from '@/components/login';
import Headers from '@/components/Headers';
import Second from '@/components/second';
import Tab from '@/components/tab';
import Modal from '@/components/modal';
import SafeAlert from '@/components/safeAlert';
import AdminListCom from '@/components/adminListCom';
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: __dirname + '/',
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/header',
        component: Headers
    }, {
        path: '/home',
        component: Second
    }, {
        path: '/tab',
        component: Tab
    }, {
        path: '/safe',
        component: SafeAlert
    }, {
        path: '/admin',
        component: AdminListCom
    }]
})