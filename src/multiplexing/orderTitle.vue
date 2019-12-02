<template>
<!-- 订单头部 -->
    <div class="orderTitle">
        <div class="footprint-header">
            <van-icon name="arrow-left" class="arrow-left" @click="$router.go(-1)"/>
            <span class="header-t1">{{title}}</span>
            <van-icon name="ellipsis" class="ellipsis" @click="$router.push({name:'消息'})"/>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            default: '我的订单'
        },
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
.edit-address{
    
}
.footprint-header{
    width: 100%;
    height: 88px;
    background-color: #f2f3f5;
    text-align: center;
    position: relative;
    .arrow-left{
        position: absolute;
        top:20px;
        left:30px;
        font-size: 40px;
        
    }
    .header-t1{ 
        display: inline-block;
        line-height: 88px;
        font-size: 36px;
        color: #010101;
    }
    .header-t2{
        position: absolute;
        top:20px;
        right: 100px;
        font-size: 40px;
    }
    .ellipsis{
        position: absolute;
        top:20px;
        right: 30px;
        font-size: 40px;
        transform: rotate(-90deg)
    }
}
</style>
