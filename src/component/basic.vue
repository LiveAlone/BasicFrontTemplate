<template lang="pug">
    div
        h5 basic page 页面配置方式
        input(type='checkbox' checked=true)
        - for (var x = 0; x < 3; x++)
            li item
</template>

<script>
    export default {
        name: "basic"
    }
</script>

<style scoped>

</style>