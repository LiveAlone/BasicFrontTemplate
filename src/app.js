import Vue from  'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import Vuex, { mapState } from 'vuex'
import Basic from '@/component/basic.vue'

Vue.use(ElementUI);
Vue.use(Vuex);

// var result = [1, 2, 3].map(function(n) {
//     return n * 2;
// });
var result = [1, 2, 3].map((n) => n + 1);
console.log(result);

new Vue({
    el:'#app',
    render: h => h(Basic)
});
