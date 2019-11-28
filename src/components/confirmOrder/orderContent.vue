<template>
<!-- 确认订单填写信息 -->
    <div class="order-content">
        <div class="shouhuoxq m-b-20">
            <div class="shouhuoxq-top">
                <span>收件人：章小楠</span>
                <span>13415224353</span>
            </div>
            <div class="shouhuoxq-bottom">
                <span>收件地址：广东省 深圳市 光明区 公明街道广东省深圳市宝安区公明街道风景北路收件</span>
            </div>
            <van-icon name="arrow" class="arrow"/>
        </div>
        <div class="payment m-b-20">
            <span>支付方式</span>
            <div class="select">
                在线支付
                <div class="xiala" v-if="showPayment" @click="showPayment=false">
                    <ul>
                        <li>在线支付</li>
                        <li>货到付款</li>
                    </ul>
                </div>
            </div>
            <van-icon name="ellipsis" class="ellipsis" @click="showPayment=!showPayment"/>
        </div>
        <div class="good-detail">
            <div class="good-detail-header">
                <span>DJKLD561261</span>
            </div>
            <div class="good-detail-content" v-for="i in 2" :key="i">
                <div class="good-detail-img">
                    <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                </div>
                <div class="good-detail-title">
                    <span class="name">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大容量女...</span>
                    <div class="guige">
                        红色/L
                    </div>
                    <div class="p1">
                        ￥298
                    </div>
                    <div class="p2 through">
                        ￥500
                    </div>
                </div>
                <div class="price">
                    <div class="p3">
                        ￥596.00
                    </div>
                    <div class="p4 through">
                        ￥1137.13
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
                </div>
            </div>
            <div class="yunfei b-t-1">
                <span class="p1">运费</span>
                <span class="p2">免邮</span>
            </div>
            <div class="payment b-t-1">
                <span>配送</span>
                <div class="select">
                    TOSPINO物流
                    <div class="xiala" v-if="showPayment" @click="showPayment=false">
                        <ul>
                            <li>上门提货</li>
                            <li>TOSPINO物流</li>
                        </ul>
                    </div>
                </div>
                <van-icon name="ellipsis" class="ellipsis" @click="showPayment=!showPayment"/>
            </div>
            <div class="heji b-t-1">
                <span class="p1">合计</span>
                <span class="p2 c-orange">￥6000</span>
            </div>
            <div class="beizhu">
                <van-cell-group>
                    <van-field
                        v-model="message"
                        rows="3"
                        autosize
                        label="备注"
                        type="textarea"
                        placeholder="请先致电客服沟通确认"
                    />
                </van-cell-group>
            </div>
        </div>
        
        <div class="total">
            <div class="total-top">
                <span class="p1">商品总额</span>
                <span class="p2">￥6000</span>
            </div>
            <div class="total-bottom">
                <span class="p1">总运费</span>
                <span class="p2 c-orange">￥0.00</span>
            </div>
        </div>
        <div class="niming">
            <van-checkbox v-model="checked" checked-color="#FA5300">匿名</van-checkbox>
        </div>
        <div class="settlement" >
            <span class="settlement-p1">总金额：</span>
            <span class="settlement-p2 c-orange">￥1137</span>
            <div class="settlement-btn" @click="submit">
                <span>提交订单</span>
            </div>
        </div>

        <!-- 确认付款弹窗 -->
        <action-sheet-paymen></action-sheet-paymen>
        
        <!-- 选择付款方式弹窗 -->
        <action-sheet-yinhang></action-sheet-yinhang>

        <!-- 支付成功弹窗 -->
        <action-sheet-sucess></action-sheet-sucess>

        <!-- 支付密码 -->
        <action-sheet-password></action-sheet-password>
    </div>
</template>

<script>
import actionSheetPaymen from "./itemComponents/actionSheetPaymen"
import actionSheetYinhang from './itemComponents/actionSheetYinhang'
import actionSheetSucess from './itemComponents/actionSheetSucess'
import actionSheetPassword from './itemComponents/actionSheetPassword'
export default {
    props: {

    },
    data() {
        return {
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '好评排序', value: 'b' },
                { text: '销量排序', value: 'c' },
            ],
            list:[
                {
                    a:false,
                    num:1
                },
                {
                    a:false,
                    num:2
                },
                {
                    a:true,
                    num:3
                }
            ],
            showPayment:false,
            message:'',
            checked:true,
            show:true,
            show1:false,
            radio:true
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
        //提交订单
        submit(){
            this.show = true
            console.log(123);
        },
        paymen(item){
            this.list.forEach(ele => {
                ele.a = false
                if(item.num == ele.num){
                    ele.a = true
                }
            });
            console.log(item);
        },
        confirm(){}
    },
    components: {
        actionSheetPaymen,
        actionSheetYinhang,
        actionSheetSucess,
        actionSheetPassword
    },
};
</script>

<style scoped lang="less">
.order-content{
    width: 100%;
    height: 100%;
    .shouhuoxq{
        width: 100%;
        background-color: #fff;
        position: relative;
        font-size:30px;
        color: #333;
        padding: 29px 0 0 30px;
        box-sizing: border-box;
        line-height: 45px;
        .shouhuoxq-top{
            margin-top:29px;
        }
        .shouhuoxq-bottom{
            display: inline-block;
            width: 627px;
        }
        .arrow{
            position: absolute;
            top: 110px;
            right:30px;
        }
    }
    .payment{
        width:750px;
        height:100px;
        background-color: #fff;
        line-height: 100px;
        position: relative;
        z-index: 1;
        span:nth-child(1){
            margin-left:30px;
            font-size:26px;
        }
        .select{
            float: left;
            position: absolute;
            top:50%;
            right:89px;
            transform: translateY(-50%);
            font-size:26px;
            color: #333;
            .xiala{
                width: 180px;
                position: absolute;
                background-color: #fff;
                text-align: center;
            }
        }
        .ellipsis{
            float: right;
            top:50%;
            right:30px;
            transform: translateY(-50%);
        }
    }
    .good-detail{
        .good-detail-header{
            width: 100%;
            height: 79px;
            line-height: 79px;
            font-size:30px;
            color: #333;
            background-color: #fff;
            padding-left: 30px;
            box-sizing: border-box;
            border-bottom: 1px solid #F2F3F5;
        }
        .good-detail-content{
            width: 100%;
            height: 210px;
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
                    color: #666;
                    font-size: 18px;
                    display: inline-block;
                    margin-bottom: 12px;
                }
                .p1{
                    color: #333;
                    font-size:24px;
                }
                .p2{
                    color: #999;
                }
            }
            .price{
                position: absolute;
                top:61px;
                right:30px;
                .p3{
                    font-size:28px;
                    color: #333;
                    margin-bottom: 5px;
                }
                .p4{
                    color: #999;
                    font-size: 20px;
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
        .yunfei,.heji{
            height: 63px;
            padding: 0 30px;
            box-sizing: border-box;
            font-size:26px;
            color: #333;
            position: relative;
            background-color: #fff;
            .p1{
                float: left;
                position: absolute;
                top:50%;
                transform: translateY(-50%)
            }
            .p2{
                float: right;
                position: absolute;
                top:50%;
                right:30px;
                transform: translateY(-50%)
            }
        }
        .beizhu{
            /deep/ .van-cell-group{
                .van-cell{
                    padding-left: 30px;
                    font-size: 26px;
                }
            }
        }
    }
    .total{
        height: 126px;
        background-color: #fff;
        .total-top,.total-bottom{
            height: 63px;
            line-height: 63px;
            position: relative;
            .p1{
                position: absolute;
                top:50%;
                left:30px;
                transform: translateY(-50%);
                font-size: 26px;
                color: #333;
            }
            .p2{
                position: absolute;
                top:50%;
                right:30px;
                transform: translateY(-50%);
                font-size: 30px;
                
            }
        }
        
    }
    .niming{
        width: 100%;
        height: 80px;
        line-height: 80px;
        padding-left: 30px;
        box-sizing: border-box;
        /deep/ .van-checkbox{
            display: inline-block;
            .van-checkbox__icon{
                display: inline-block;
                font-size: 40px;
            }
            .van-checkbox__label{
                font-size: 28px;
                margin-left:20px;
            }
        }
    }
    .settlement{
        width: 100%;
        height: 120px;
        background-color: #fff;
        line-height: 120px;
        padding-left:30px;
        box-sizing: border-box;
        .settlement-p1{
            font-size:20px;
            color: #333;
        }
        .settlement-p2{
            font-size:42px;
        }
        .settlement-btn{
            width: 240px;
            height: 120px;
            float: right;
            background-color: #FA5300;
            text-align: center;
            color: #fff;
            font-size:36px;
            line-height: 120px;
        }
    }
    
}

.m-b-20{
    margin-bottom: 20px;
}
.b-t-1{
    border-top: 1px solid #F2F3F5
}
.c-999{
    color: #999;
}
</style>
