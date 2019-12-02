<template>
<!-- 订单详情 -->
    <div class="order-detail">
        <div class="address-p1">
            <div class="p1-top">
                等待买家付款
            </div>
            <div class="p1-bottom">
                剩18小时47分自动关闭
            </div>
        </div>
        <div class="address-p2">
            <div class="p2-top">
                <div class="car-icon">
                    <img src="@/assets/img/confirmOrder/logistics@2x.png">
                </div>
                <span>上门自提</span>
            </div>
            <div class="p2-bottom">
                <div class="bottom-left">
                    <div class="add-icon">
                        <img src="@/assets/img/confirmOrder/add-02@2x.png">
                    </div>
                </div>
                
                <div class="bottom-right">
                    <span class="name"> 媛媛</span>
                    <span class="phone"> 86-13165265218</span>
                    <div class="addre">
                        中国 广东省 深圳市光明区公明街道 风景北路上村同富裕旭发科技园七栋五楼
                    </div>
                </div>
                
            </div>
        </div>
        <div class="address-p3">
            <div class="p3-header">
                商品信息
            </div>
            <div class="good-detail">
                <div class="good-detail-content" >
                    <div class="good-detail-img" @click="jumpRouter('商品详情')">
                        <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                    </div>
                    <div class="good-detail-title" @click="jumpRouter('商品详情')">
                        <span class="name">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大容量女...</span>
                        <div class="guige">
                            红色/L
                        </div>
                    </div>
                    <div class="price">
                        <div class="p3">
                            ￥596.00
                        </div>
                        <div class="p4 through">
                            ￥1137.13
                        </div>
                        <div class="p4 fl-right">
                            x1
                        </div>
                    </div>
                    <div style="height:15px;">

                    </div>
                </div>
                <div class="mingxi">
                    <span >商品总价：</span>
                    <span class="fl-right">￥596.00</span>
                </div>
                <div class="mingxi">
                    <span>运费：</span>
                    <span class="fl-right">￥596.00</span>
                </div>
                <div class="mingxi">
                    <span>订单总价：</span>
                    <span class="fl-right c-orange font-24">￥596.00</span>
                </div>
            </div>
        </div>
        <div class="address-p4">
            <div class="p4-top">
                订单信息
            </div>
            <div class="p4-middle">
                <div class="middle-p1">
                    <span>订单备注:</span>
                    <span>请及时发货！</span>
                </div>
                <div class="middle-p2">
                    <span>订单编号:</span>
                    <span>XSD16562532362562546</span>
                    <span class="fl-right c-orange">复制</span>
                </div>
                <div class="middle-p1">
                    <span>下单时间:</span>
                    <span>2019-10-21 19:20:30</span>
                </div>
                <div class="middle-p1">
                    <span>支付时间:</span>
                    <span>2019-10-21 19:20:30</span>
                </div>
                <div class="middle-p1">
                    <span>支付方式:</span>
                    <span>在线支付</span>
                </div>
            </div>
        </div>
        <div class="address-p5">
            <div class="phone-icon">
                <img src="@/assets/img/confirmOrder/phone@2x.png">
            </div>
            <span @click="show2 = true">拨打电话</span>
        </div>
        <div style="height:100px"></div>
        <div class="good-detail-footer">
            <!-- 待付款按钮栏 -->
            <div class="lan">
                <div class="btn-qzf fl-right c-orange">付款</div>
                <div class="btn-qxdd fl-right">取消订单</div>
                <div class="btn-xgdz fl-right">修改地址</div>
            </div>
        </div>

        <van-overlay :show="show2" @click="show2 = false" class="overlay">
            <!-- 客服电话 -->
            <div class="kefu">
                <div class="top">联系电话</div>
                <div class="bottom">233-5616 1166</div>
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
            show2:false
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

    },
};
</script>

<style scoped lang="less">
.order-detail{
    .address-p1{
        height: 200px;
        color: #333;
        padding:59px 0 0 78px;
        box-sizing: border-box;
        .p1-top{
            font-size:34px;
            margin-bottom: 25px;
        }
        .p1-bottom{
            font-size:24px;
        }
    }
    .address-p2{
        box-sizing: border-box;
        padding: 30px;
        background-color: #fff;
        margin-bottom: 20px;
        .p2-top{
            height: 119px;
            line-height: 119px;
            .car-icon{
                display: inline-block;
                width: 60px;
                height: 60px;
                vertical-align: text-bottom;
                margin-right:23px;
            }
        }
        .p2-bottom{
            height: 180px;
            font-size: 28px;
            position: relative;
            .bottom-left{
                height: 180px;
                line-height: 180px;
                float: left;
                margin-right:20px;
                .add-icon{
                    width: 60px;
                    height: 60px;
                    display: inline-block;
                }
            }
            .name{
                color: #333;
                margin-right:39px;
            }
            .addre{
                margin-top:32px;
                font-size: 26px;
                color: #333;
            }
        }
    }
    .address-p3{
        background-color: #fff;
        margin-bottom: 30px;
        .p3-header{
            height: 69px;
            line-height: 69px;
            font-size:26px;
            padding-left:30px;
            color: #333;
            border-bottom: 1px solid #F2F3F5;
        }
        .mingxi{
            height: 50px;
            font-size: 20px;
            padding: 0 30px;
        }
    }
    .address-p4{
        background-color: #fff;
        .p4-top{
            height: 69px;
            border-bottom: 1px solid #F2F3F5;
            font-size:26px;
            color: #333;
            line-height: 69px;
            padding-left:30px;
        }
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
}
.good-detail{
    margin-bottom: 20px;
    .good-detail-content{
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 30px;
        position: relative;
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
                margin-bottom: 12px;
            }
            
        }
        .price{
            position: absolute;
            top:30px;
            right:30px;
            text-align: right;
            .p3{
                font-size:28px;
                color: #333;
                margin-bottom: 5px;
            }
            .p4{
                color: #999;
                font-size: 20px;
            }
        }
    }
}
.good-detail-footer{
    height: 100px;
    border-top: 1px solid #F2F3F5;
    font-size: 30px;
    color: #666;
    background-color: #fff;
    .lan{
        height: 100%;
    }
    .btn-qzf{
        width:150px;
        height:60px;
        border:1px solid rgba(250,83,0,1);
        border-radius:30px;
        line-height: 60px;
        text-align: center;
        position: relative;
        top:50%;
        transform: translateY(-50%);
        margin-right:20px;
    }
    .btn-qxdd,.btn-xgdz{
        width:180px;
        height:60px;
        border:1px solid rgba(153,153,153,1);
        border-radius:30px;
        line-height: 60px;
        text-align: center;
        position: relative;
        top:50%;
        transform: translateY(-50%);
        margin-right:20px;
    }
}
.kefu{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 400px;
    height: 220px;
    background-color: #fff;
    .top,.bottom{
        height: 110px;
        text-align: center;
        line-height: 110px;
    }
    .top{
        font-size:36px;
        color: #333;
    }
    .bottom{
        font-size:40px;
        color: #0E6CCC;
        border-top:1px solid #DCDCDC;
    }
}
.font-24{
    font-size: 24px
}
</style>
