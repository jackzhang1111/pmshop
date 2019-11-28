<template>
    <!-- 点击搜索框弹出的历史记录 -->
    <div class="search-record" >
        <div v-if="false" class="record">
            <div class="search-title">
                <span class="title-p1">历史搜索</span>
                <van-icon name="delete" @click="deleteRecord"/>
            </div>
            <div class="search-labels">
                <span class="label">历史搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">搜索</span>
            </div>
            <div class="search-title m-t-60">
                <span class="title-p1">搜索发现</span>
                <van-icon name="eye-o" v-if='iconShow' @click="iconShow = !iconShow"/>
                <van-icon name="closed-eye" v-else @click="iconShow = !iconShow"/>
            </div>
            <div class="search-labels">
                <span class="label">历史搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">历史搜索</span>
                <span class="label">搜索</span>
            </div>
        </div>
        <div class="sousuo" v-else>
            <ul>
                <li v-for="i in 5" :key="i" @click="toGoodsOne">
                    <span>香水男</span>
                    <span class="icon">
                        <img src="@/assets/img/search/enter@3x.png" alt="">
                    </span>
                </li>
            </ul>
        </div>

        <van-overlay :show="redordshow" @click="redordshow = false" >
            <!-- 删除历史记录 -->
            <div class="overlay-wrapper" @click.stop>
                <div class="overlay-wrapper-p1">
                    确认删除全部历史记录？
                </div>
                <div class="overlay-wrapper-btns">
                    <span>取消</span>
                    <span>确定</span>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            iconShow:true,
            redordshow:false
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
        deleteRecord(){
            this.redordshow = true;
        },
        toGoodsOne(){
            this.$router.push({name:'搜索商品1'})
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.search-record{
    position: relative;
    background-color: #fff;
    height: calc(100vh - 88px);
    box-sizing: border-box;
    .record{
        padding: 39px 30px 0;
    }
    .search-title{
        height: 60px;
        .title-p1{
            font-size: 30px;
            color: #333;
        }
        .van-icon{
            float: right;
            font-size: 40px;
        }
    }
    
    .search-labels{
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-align-content: center;
        align-content: flex-start;
        .label{
            display: inline-block;
            background-color: #F2F3F5;
            border-radius:25px;
            padding: 12px 26px;
            font-size: 26px;
            color: #333;
            margin:20px 20px 0px 0;
        }
    }
    .sousuo{
        ul{
            li{
                height: 87px;
                line-height: 87px;
                font-size:24px;
                color: #333;
                border-bottom:1px solid #DCDCDC;
                padding:0 30px;
                .icon{
                    float: right;
                    width: 30px;
                    height: 30px;
                    
                }
            }
        }
    }
    .van-overlay{
        .overlay-wrapper{
            width: 500px;
            height: 200px;
            background-color: #fff;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            .overlay-wrapper-p1{    
                margin:49px 0 39px 40px;
                font-size:36px;
                color: #333
            }
            .overlay-wrapper-btns{
                padding-left:267px;
                font-size:30px;
                color: #FA5300;
                span{
                    &:nth-child(1){
                        margin-right: 65px
                    }
                }
            }
        }
    }
}

</style>
