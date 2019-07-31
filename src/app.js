import Vue from  'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import Vuex, { mapState } from 'vuex'

Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
});

store.commit('increment');
console.log(store.state.count);

new Vue({
    el:'#app',
    store,
    computed: mapState([
        'count'
    ]),
    methods:{
        increment(){
            this.$store.commit('increment');
        }
    }
});
