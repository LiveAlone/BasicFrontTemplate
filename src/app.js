import Vue from  'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/component/ui_element.vue'
import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.use(VueRouter);

const User = {
    template: '<div class="user"><h2>User {{ $route.params.id }}</h2><router-view></router-view></div>'
};

const UserHome = { template: '<div>Home</div>' };
const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

const router = new VueRouter({
    routes:[
        {
            path: '/user/:id',
            component: User,
            children: [
                {path: '', component: UserHome},
                {path: 'profile', component: UserProfile},
                {path: 'Posts', component: UserPosts}
            ]
        }
    ]
});

new Vue({
    el:'#app',
    render: h => h(App)
});
