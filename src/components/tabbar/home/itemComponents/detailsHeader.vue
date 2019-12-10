<template>
<!-- 商品详情头部搜素 -->
    <div>
        <div class="detailsHeader c-b-gray">
            <div class="logo">
                <van-icon name="arrow-left" size="17px" @click="$router.go(-1)"/>
            </div>
            <div class="search">
                <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    shape="round"
                    @focus="onSearch">
                </van-search>
                <div class="zntj">

                </div>
            </div>
            <div class="icons">
                <!-- 最好能用icon做出显示消息数 -->
                <img src="@/assets/img/tabbar/home/cart@3x.png" class="img1" @click="$router.push({name:'购物车'})">
            </div>
        </div>
        <div style="height:44px"></div>
        
    </div>
    
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            value:''
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
        onSearch(){
            console.log(123456);
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.detailsHeader{
    height: 88px;
    position: fixed;
    top:0;
    z-index: 5;
    width: 100%;
    padding-right: 30px;
    box-sizing: border-box;
    
    .logo{
        position: absolute;
        left:30px;
        top:50%;
        transform: translateY(-50%);
        img{
            width: 100%;
            height: 100%;
        }
    }
    .search{
        position: absolute;
        left:100px;
        top:50%;
        width: 540px;
        height: 58px;
        // overflow: hidden;
        transform: translateY(-50%);
        /deep/ .van-search{
            background: #F2F3F5 !important;
        }
    }
    .icons{
        float: right;
        height: 100%;
        line-height: 100px;
        .img1{
            width: 34px;
            height: 34px;
            margin-right: 25px;
        }
    }
    .zntj{
        height: 200px;
        position: relative;
        background-color: red;
        z-index: 555
    }
    
}
</style>
