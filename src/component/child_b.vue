<template>
    <div class="componentB" id="B">
        <h3>{{ msg }}</h3>
        <p><button @click="sendData">Send Data to Parent Content</button></p>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default Vue.component('componentB', {
        template: '#B',
        data(){
            return {
                msg: 'Component-B'
            }
        },
        methods: {
            sendData: function(){
                this.$emit('toParent', "ComponentBToParent");
            }
        }
    });
</script>

<style>
    .componentB{
        border: 2px solid black;
    }
</style>

