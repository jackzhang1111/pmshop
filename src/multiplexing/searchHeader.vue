<template>
<!-- 首页搜索框 -->
    <div class="search-header c-b-gray">
        <div class="logo">
            <img src="@/assets/img/tabbar/home/logo@3x.png">
        </div>
        <div class="search">
            <van-search v-model="value" shape="round" @click="toSearch" class="aaa"/>
        </div>
        <div class="icons">
            <img src="@/assets/img/tabbar/home/scan@3x.png" class="img1">
            <img src="@/assets/img/tabbar/home/msg@3x.png" class="img2" @click="$router.push({name:'消息'})">
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
        toSearch(){
            this.$router.push({name:'历史记录'})
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.search-header{
    width: 100%;
    height: 88px;
    position: relative;
    .logo{
        position: absolute;
        left:30px;
        top:39px;
        width: 120px;
        height: 31px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .search{
        position: absolute;
        left:168px;
        top:25px;
        width: 432px;
        height: 58px;
        overflow: hidden;
        /deep/ .van-search{
            background: #F2F3F5 !important;
            .van-search__content--round{
                height: 58px;
                border-radius:29px;
                margin-top:-12px;
                .van-field__left-icon{
                    margin-top:10px;
                    .van-icon.van-icon-search{
                        font-size: 27px;
                        color: #999;
                    }
                }
            }
        }
    }
    .icons{
        position: absolute;
        left:623px;
        top:38px;
        .img1{
            width: 35px;
            height: 35px;
            margin-right: 25px;
        }
        .img2{
            width: 34px;
            height: 34px;
        }
    }
}
</style>
