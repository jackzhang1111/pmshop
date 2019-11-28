<template>
<!-- 账户设置 -->
    <div class="account-settings">
        <div class="settings-header">
            <van-icon name="arrow-left" class="arrow-left"/>
            <span class="header-t1">{{title}}</span>
            <van-icon name="ellipsis" class="ellipsis"/>
        </div>
        <div class="cell" @click="toAddress">
            <span>我的收货地址</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell">
            <span>账户与安全</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell bor-b-1">
            <span>清除缓存</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell bor-b-1">
            <span>法律条款</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell bor-b-1">
            <span>关于TOSPINO</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell bor-b-1">
            <span>检查更新</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell bor-b-1">
            <span>意见反馈</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell ">
            <span>帮助中心</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            title:'账户设置',

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
        toAddress(){
            this.$router.push({name:'收货地址'})
        }
    },
    components: {
        
    },
};
</script>

<style scoped lang="less">
.settings-header{
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
.cell{
    height: 88px;
    line-height: 88px;
    padding: 0 30px;
    background-color: #fff;
    color: #333;
    position: relative;
    font-size: 30px;
    &:nth-child(2){
        margin-bottom: 20px;
    }
    &:nth-child(3){
        margin-bottom: 20px;
    }
    .arrow{
        position: absolute;
        right:30px;
        top:50%;
        transform: translateY(-50%);
        
    }
    .text{
        position: absolute;
        right:60px;
    }
    .text-tk{
        position: absolute;
        right:30px;
    }
    .input-xt{
        margin-left:40px;
        height: 40px;
        border: 0;
    }
}
.bor-b-1{
    border-bottom: 1px solid #DCDCDC
}
</style>
