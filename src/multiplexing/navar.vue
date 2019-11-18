<template>
    
    <div class="nav-bar">
        <div class="icon">
            <img src="@/assets/img/login/back@3x.png" style="height:100%">
        </div>
        <div class="title">{{title}}</div>
    </div>
    
</template>

<script>
export default {
    props: {
        title:String
    },
    data() {
        return {

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
        
    },
};
</script>

<style scoped lang="less">
.nav-bar{
    width: 100%;
    height: 88px;
    position: relative;
    margin-bottom: 50px;
    .icon{
        width: 40px;
        height:40px;
        position: absolute;
        top:50%;
        transform: translateY(-50%)
    }
    .title{
        text-align: center;
        font-size: 36px;
        color: #000;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%)
    }
}
</style>
