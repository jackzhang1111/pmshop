<template>
<!-- 商品规格选择 卡住了-->
    <div class="commodity-selection">
        <div class="selection-title">
            <div class="selection-img">
                <img src="../assets/img/tabbar/home/commodityDetails/chanpin-03@2x.png" alt="">
            </div>
            <div class="p1">
                <span>秋冬装2019新款女短款卫衣学生上衣服连帽韩版宽松薄款外套...牌正品</span>
            </div>
            <div class="p2">
                <span>￥79.00~159.00</span>
            </div>
            <van-icon name="cross" class="cross" />
        </div>
        <div class="selection-conten">
            <van-sidebar v-model="activeKey" class="selection-sidebar">
                <van-sidebar-item title="红色(2019最新潮流新款新品主流）" v-for="i in 4" :key="i"/>
                
            </van-sidebar>
            <div style="width:50px;display:inline-block;height:100px;position:relative;top:0;left:200px;" v-for="i in 4" :key="i+'a'">
                13456
            </div>
            <!-- <div style="width:300px;display:inline-block;height:100px;position:relative;top:-291px;right:-60px;background-color:red" v-for="i in 4" :key="i">
                123
            </div> -->
            <!-- <div class="selection-right">
                <div class="selection-right-p1">
                   <span> S码数(适合80-90斤MM)</span>
                </div>
                <div class="selection-right-stepper">
                   <div class="add-btn ">
                       <van-icon name="plus" />
                   </div>
                   <div class="num">
                       <span>1</span>
                   </div>
                   <div class="reduce-btn">
                       <span>一</span>
                   </div>
                </div>
                <div class="selection-right-p2">
                    <span class="selection-right-p2-p1">￥79.00</span>
                    <span class="selection-right-p2-p2">库存：4079</span>
                </div>
                
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            activeKey:1,
            value:1
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
.commodity-selection{
    width: 100%;
    background:rgba(242,243,245,1);
    position: relative;
    .selection-title{
        width: 100%;
        height: 201px;
        border-bottom: 2px solid red;
        .selection-img{
            width: 200px;
            height: 200px;
            position: absolute;
            top:-30px;
            left:40px;
        }
        .p1{
            position: absolute;
            width:378px;
            height:64px;
            left:259px;
            top:29px;
            color: #010101;
            font-size: 26px;
            span{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }
        .p2{
            position: absolute;
            top:111px;
            left:259px;
            color: #FA5300;

        }
        .cross{
            position: absolute;
            top:86px;
            right:45px;
            font-size: 29px;
            color: #666666;
        }
    }
    .selection-conten{
        width: 100%;
        position: relative;
        .selection-sidebar{
            position: relative;
            display: inline-block;
            .van-sidebar-item{
                width: 220px;
                height: 160px;
                display: inline-block;
                /deep/ .van-sidebar-item__text{
                    line-height: 40px;
                }
            }
            /deep/ .van-sidebar-item--select{
                background-color: #F2F3F5;
            }
        }
        .selection-right{
            position: relative;
            top:0;
            right:0;
            width: 530px;
            display: inline-block;
            // height: 100%;
            .selection-right-p1{
                position: absolute;
                top:50px;
                left:18px;
                width: 175px;
                font-size: 22px;
                color: #333333;
            }
            .selection-right-p2{
                position: absolute;
                top:127px;
                left:0px;
                width: 100%;
                font-size: 18px;
                color: #333333;
                margin-bottom: 69px;
                .selection-right-p2-p1{
                    position: absolute;
                    left:80px;
                }
                .selection-right-p2-p2{
                    position: absolute;
                    right:32px;
                }
            }
            .selection-right-stepper{
                position: absolute;
                width: 100%;
                height: 156px;
                .add-btn{
                    position: absolute;
                    top:45px;
                    left:437px;
                    width: 60px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    background-color: #999;
                }
                .reduce-btn{
                    position: absolute;
                    top:45px;
                    left:253px;
                    width: 60px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    background-color: #999;
                }
                .num{
                    position: absolute;
                    top:45px;
                    left:313px;
                    width: 124px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    background-color: #fff;
                    font-size: 36px;
                    color: #333;
                }
            }
        }
    }
}
</style>
