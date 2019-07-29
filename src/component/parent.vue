<template>
    <div>
        {{ parentMsg }}
        <component-A :logo="logoMsg" @toParent="componenta"></component-A>
        <div> split </div>
        <component-B @toParent="componentb"></component-B>
    </div>
</template>

<script>
    import A from '@/component/child_a.vue';
    import B from '@/component/child_b.vue';
    export default {
        data(){
            return {
                logoMsg: 'ParentMsgToConpenentAContent',
                parentMsg: 'none'
            };
        },
        components: {
            "component-A": A,
            "component-B": B
        },
        methods: {
            componenta: function(data){
                this.parentMsg = data;
            },
            componentb: function(data){
                this.logoMsg = data;
            }
        }
    }
</script>

<style>
</style>
