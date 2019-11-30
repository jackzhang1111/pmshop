<template>
<!-- 商品详情头部搜素 -->
    <div class="detailsHeader c-b-gray">
        <div class="logo">
            <van-icon name="arrow-left" size="17px" @click="$router.go(-1)"/>
        </div>
        <div class="search">
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                shape="round"
                @search="onSearch"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <div class="icons">
            <!-- 最好能用icon做出显示消息数 -->
            <img src="@/assets/img/tabbar/home/scan@3x.png" class="img1">
            <img src="@/assets/img/tabbar/home/cart@3x.png" class="img1" @click="$router.push({name:'购物车'})">
            <img src="@/assets/img/tabbar/home/commodityDetails/msg@2x.png" class="img2" @click="$router.push({name:'消息'})">
        </div>
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
            
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.detailsHeader{
    width: 100%;
    height: 88px;
    position: relative;
    .logo{
        position: absolute;
        left:30px;
        top:39px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .search{
        position: absolute;
        left:100px;
        top:25px;
        width: 420px;
        height: 58px;
        overflow: hidden;
        /deep/ .van-search{
            background: #F2F3F5 !important;
        }
    }
    .icons{
        position: absolute;
        left:572px;
        top:38px;
        .img1{
            width: 34px;
            height: 34px;
            margin-right: 25px;
        }
        .img2{
            width: 7px;
            height: 34px;
        }
    }
    
}
</style>
