import Vue from  'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import Main from '@/component/router/main.vue'
import Home from '@/component/router/home.vue'
import PageA from '@/component/router/config_page_a.vue'
import PageB from '@/component/router/config_page_b.vue'
import Vuex from 'vuex'

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path: '/', name: '首页', component: Home},
        {path: '/a_page', name: 'a 页面', component: PageA},
        {path: '/b_page', name: 'b 页面', component: PageB},
    ]
});

new Vue({
    el:'#app',
    router,
    render: h => h(Main)
});
