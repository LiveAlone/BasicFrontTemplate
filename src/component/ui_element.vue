<template>
    <div id="main">
        <div>
            <el-button @click="startHacking">Start</el-button>
            <el-button type="primary" @click="startHacking">主要按钮</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            startHacking (){
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style>
</style>
