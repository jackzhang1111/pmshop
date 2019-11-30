<template>
    <div class="account-address">
        <settings-header :title="title" :title2="title2"></settings-header>
        <div v-if="addressStatus">
            <posse-address></posse-address>
        </div>
        <!-- 无地址的时候 -->
        <div v-else>
            <noAddress></noAddress>
        </div>
    </div>
</template>

<script>
import noAddress from './itemComponents/noAddress'
import posseAddress from './itemComponents/posseAddress'
import settingsHeader from './itemComponents/settingsHeader'
export default {
    props: {

    },
    data() {
        return {
            title:'收货地址',
            title2:'添加新地址',
            title2Show:true,
            addressStatus:true
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
        noAddress,
        posseAddress,
        settingsHeader
    },
};
</script>

<style scoped lang="less">
.account-address{
    
}
</style>
