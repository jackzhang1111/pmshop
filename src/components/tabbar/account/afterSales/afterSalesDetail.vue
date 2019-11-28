<template>
<!-- 售后详情 -->
    <div class="after-sales-detail">
        <div class="after-sales-status">
            待审核
        </div>
        <div class="cell">
            <span>退款原因</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="good-detail" >
            <div class="good-detail-header">
                <span>商品信息</span>
            </div>
            <div class="good-detail-content" v-for="i in 2" :key="i">
                <div class="good-detail-img">
                    <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                </div>
                <div class="good-detail-title">
                    <span class="name">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大容量女...</span>
                    <div class="guige">
                        红色/L码
                    </div>
                    <div class="tkje">
                        退款金额:
                    </div>
                </div>
                <div class="price">
                    <div class="p3">
                        ￥596.00
                    </div>
                    <div class="p4 fl-right">
                        x1
                    </div>
                    <div>
                        ￥596.00
                    </div>
                </div>
                <div style="height:40px;"></div>
            </div>
        </div>
        <div class="address-p4">
            <div class="p4-middle">
                <div class="middle-p1">
                    <span class="c-999">退货原因:</span>
                    <span class="margin-l-40 c-333">少件</span>
                </div>
                <div class="middle-p2">
                    <span class="c-999">退货编号:</span>
                    <span class="margin-l-40 c-333">XSD16562532362562546</span>
                </div>
                <div class="middle-p1">
                    <span class="c-999">订单编号:</span>
                    <span class="margin-l-40 c-333">XDS54616461156131642</span>
                    <span class="fl-right c-orange">复制</span>
                </div>
                <div class="middle-p1">
                    <span class="c-999">申请时间:</span>
                    <span class="margin-l-40 c-333">2019-10-21 19:20:30</span>
                </div>
                <div class="middle-p1">
                    <span class="c-999">退款总额:</span>
                    <span class="margin-l-40 c-orange">￥596.00</span>
                </div>
            </div>
        </div>
        <div class="address-p5">
            <div class="phone-icon">
                <img src="@/assets/img/confirmOrder/phone@2x.png">
            </div>
            <span>拨打电话</span>
        </div>
        <div style="height:100px"></div>
        <div class="footer">
            <div class="btn-cxsq">
                撤销申请
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            arrowDown:true
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
.after-sales-detail{
    .after-sales-status{
        height: 150px;
        font-size:46px;
        text-align: center;
        line-height: 150px;
        color: #333;
    }
    .cell{
        height: 88px;
        line-height: 88px;
        padding: 0 30px;
        background-color: #fff;
        color: #333;
        position: relative;
        font-size: 26px;
        margin-bottom: 20px;
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
    .address-p4{
        background-color: #fff;
        .p4-middle{
            padding:30px;
            border-bottom: 1px solid #F2F3F5;
            font-size: 20px;
            color: #666;
            line-height:45px;
        }
    }
    .address-p5{
        height: 90px;
        background-color: #fff;
        line-height: 90px;
        text-align: center;
        font-size: 26px;
        color: #666;
        .phone-icon{
            width: 40px;
            height: 40px;
            display: inline-block;
            vertical-align: sub;
        }
    }
    .footer{
        height: 100px;
        width: 100vw;
        background-color: #fff;
        padding: 0 30px;
        line-height: 100px;
        text-align: right;
        // position: fixed;
        // bottom: 0;
        box-sizing: border-box;
        .btn-cxsq{
            width:148px;
            height:48px;
            border:1px solid #FA5300;
            border-radius:5px;
            display: inline-block;
            text-align: center;
            line-height: 48px;
            color: #FA5300;
            
        }
    }
}
.good-detail{
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
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            .name{
                display: inline-block;
                margin-bottom: 24px;
                color: #333;
                font-size: 22px
            }
            .guige{
                color: #999;
                font-size: 18px;
                display: inline-block;
                margin-bottom: 28px;
            }
            .tkje{
                color: #999;
                font-size: 22px;
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
            .selection-right-stepper{
                position: relative;
                width: 100%;
                height: 156px;
                .add-btn{
                    position: absolute;
                    top:20px;
                    right:0;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                    background-color: #EEEEEE;
                    color: #666;
                }
                .reduce-btn{
                    position: absolute;
                    top:20px;
                    right:128px;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                    background-color: #EEEEEE;
                    color: #666;
                }
                .num{
                    position: absolute;
                    top:20px;
                    right:40px;
                    width: 88px;
                    height: 40px;
                    border-top: 1px solid #999999;
                    border-bottom: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
    }
}
.margin-l-40{
    margin-left:40px
}
</style>
