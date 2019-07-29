<template>
    <div class="msg">
        {{msg}}
        <button @click="sendData">Send Data to Parent Content</button>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        data(){
            return {
                msg:'axios http basic content'
            }
        },
        methods:{
            sendData: function () {
                Axios.get('http://localhost:8080/', {
                    headers:{
                        'content-type': 'application/json; charset=utf-8'
                    }
                })
                    .then(function (response) {
                        console.log(response);
                    }).catch(function (error) {
                        console.log(error)
                });
            }
        }
    }
</script>

<style scoped>
</style>