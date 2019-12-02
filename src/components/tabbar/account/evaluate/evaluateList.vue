<template>
<!-- 可发表评论的列表 -->
    <div class="evaluate-list">
        <div class="commodity-tab">
            <van-tabs v-model="active" class="tab-list" title-active-color="#FA5300">
                <van-tab title="待评价(2)" >
                    <div class="good-detail" v-for="i in 2" :key="i">
                        <div class="good-detail-header">
                            <span>订单编号：1234567890</span>
                        </div>
                        <div class="good-detail-content">
                            <div class="good-detail-img">
                                <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                            </div>
                            <div class="good-detail-title">
                                <span class="name">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大容量女...</span>
                                <div class="guige">
                                    红色/L码
                                </div>
                            </div>
                            <div class="price">
                                <div class="p3">
                                    ￥596.00
                                </div>
                                <div class="p4 fl-right">
                                    x1
                                </div>
                            </div>
                            <div style="height:35px;"></div>
                            <div class="btns">
                                <div class="pj" @click="jumpRouter('发表评价')">
                                    评价
                                </div>
                                <div class="ckdd" @click="jumpRouter('订单详情')">
                                    查看订单
                                </div>
                            </div>
                        </div>
                    </div>
                    <footerExhibition></footerExhibition>
                </van-tab>
                <van-tab title="追评(4)">
                   <div class="good-detail" v-for="i in 4" :key="i">
                        <div class="good-detail-header">
                            <span>订单编号：1234567890</span>
                        </div>
                        <div class="good-detail-content">
                            <div class="good-detail-img">
                                <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                            </div>
                            <div class="good-detail-title">
                                <span class="name">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大容量女...</span>
                                <div class="guige">
                                    红色/L码
                                </div>
                            </div>
                            <div class="price">
                                <div class="p3">
                                    ￥596.00
                                </div>
                                <div class="p4 fl-right">
                                    x1
                                </div>
                            </div>
                            <div style="height:35px;"></div>
                            <div class="btns">
                                <div class="pj" @click="jumpRouter('追加评价')">
                                    追评
                                </div>
                                <div class="ckdd" @click="jumpRouter('订单详情')">
                                    查看订单
                                </div>
                            </div>
                        </div>
                    </div>
                    <footerExhibition></footerExhibition>
                </van-tab>
               
            </van-tabs>
        </div>
        
    </div>
</template>

<script>
import footerExhibition from '@/multiplexing/footerExhibition.vue'
export default {
    props: {

    },
    data() {
        return {
            active:0,
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
        jumpRouter(name){
            this.$router.push({name})
        },
    },
    components: {
        footerExhibition
    },
};
</script>

<style scoped lang="less">
.evaluate-list{
    border-top: 2px solid #DCDCDC
}
.commodity-tab{
    height: 80px;
    .tab-list{
        height: 80px;
        /deep/ .van-tabs__wrap{
            height: 80px;
            .van-tabs__nav{
                background-color: #F2F3F5;
            }
            .van-tab{
                line-height: 80px;
                flex-basis: 20% !important;
            }
            .van-tabs__line{
                bottom: 30px;
                background-color: #FA5300;
            }
        }
        
    }
}
.good-detail{
    padding: 0 30px;
    box-sizing: border-box;
    margin-bottom: 20px;
    .good-detail-header{
        width: 100%;
        height: 79px;
        line-height: 79px;
        font-size:26px;
        color: #333;
        background-color: #fff;
        padding-left: 30px;
        box-sizing: border-box;
        border-bottom: 1px solid #F2F3F5;
        .dfk{
            float: right;
            margin-right: 30px;
        }
    }
    .good-detail-content{
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 30px;
        position: relative;
        border-bottom: 1px solid #F2F3F5;
        .good-detail-img{
            width: 150px;
            height: 150px;
            position: relative;
            top:30px;
            left:0px;
            display: inline-block;
        }
        .good-detail-title{
            display: inline-block;
            position: absolute;
            width: 336px;
            top:30px;
            left:200px;
            
            .name{
                display: inline-block;
                margin-bottom: 24px;
                color: #333;
                font-size: 22px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .guige{
                color: #999;
                font-size: 18px;
                display: inline-block;
                margin-bottom: 28px;
            }
        }
        .price{
            position: absolute;
            top:30px;
            right:30px;
            text-align: right;
            font-size: 26px;
            .p3{
                font-size:26px;
                color: #333;
                margin-bottom: 5px;
            }
            .p4{
                color: #999;
                font-size: 20px;
                margin-bottom: 90px;
            }
        }
        .btns{
            overflow: hidden;
            padding-bottom: 30px;
            .ckdd{
                width:150px;
                height:48px;
                border:2px solid rgba(153,153,153,1);
                border-radius:24px;
                line-height: 48px;
                text-align: center;
                font-size:26px;
                float: right;
                color: #666;
            }
            .pj{
                width:98px;
                height:48px;
                border:2px solid rgba(250,83,0,1);
                border-radius:24px;
                font-size:26px;
                text-align: center;
                line-height: 48px;
                float: right;
                color: rgba(250,83,0,1);
                margin-left:20px;
            }
        }
    }
}
</style>
