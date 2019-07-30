<template>
    <div>
        <h1>这个是 main vue 界面</h1>
        <p>
            <router-link to="/">首页</router-link>
            <router-link to="/a_page">A-首页</router-link>
            <router-link to="/b_page">B-首页</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped>

</style>