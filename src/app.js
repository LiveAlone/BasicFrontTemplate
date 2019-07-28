import Vue from 'vue'
import App from '@/app.js'

var app = new Vue({
    el: '#app',
    data:{
        message:'Hello world'
    },
    components: { App }
});