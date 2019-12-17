<template>
<!-- 确认订单填写信息 -->
    <div class="order-content">
        <balance-header title="确认订单"></balance-header>
        <div class="shouhuoxq m-b-20">
            <div class="shouhuoxq-top">
                <span>收件人：{{defaultAdderss.name}}</span>
                <span>{{defaultAdderss.phoneCode}}{{defaultAdderss.phoneNumber}}</span>
            </div>
            <div class="shouhuoxq-bottom">
                <span>收件地址：{{defaultAdderss.addreCitys}} {{defaultAdderss.userAddress}}</span>
            </div>
            <van-icon name="arrow" class="arrow" @click="jumpRouter('确认订单收货地址')"/>
        </div>
        <div class="payment m-b-20">
            <span>支付方式</span>
            <div class="select">
                {{zffs}}
                 <van-icon name="ellipsis" class="ellipsis" @click="showPayment=!showPayment"/>
                <div class="xiala" v-if="showPayment" @click="showPayment=false">
                    <ul>
                        <li @click="zffs='在线支付'">在线支付</li>
                        <li @click="zffs='货到付款'">货到付款</li>
                    </ul>
                </div>
            </div>
           
        </div>
        <div class="good-detail" v-for="order in orderData.orderList" :key="order.sortOrder">
            <div class="good-detail-header">
                <span>{{order.sortOrder}}</span>
            </div>
            <div class="good-detail-content" v-for="product in order.detailList" :key="product.skuId">
                <div class="good-detail-img" @click="jumpRouter('商品详情')">
                    <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                </div>
                <div class="good-detail-title" @click="jumpRouter('商品详情')">
                    <span class="name">{{product.skuName}}</span>
                    <div class="guige">
                        {{product.skuValuesTitle}}
                    </div>
                    <div class="p1">
                        {{product.currencySignWebsite}}{{product.priceWebsite}}
                    </div>
                    <div class="p2 through">
                        {{product.currencySignWebsite}}{{product.originPriceWebsite}}
                    </div>
                </div>
                <div class="price">
                    <div class="p3">
                        {{product.currencySignWebsite}}{{product.totalPriceWebsite}}
                    </div>
                    <div class="p4 through">
                        {{product.currencySignWebsite}}{{product.totalOriginPriceWebsite}}
                    </div>
                    <div class="selection-right-stepper">
                        <div class="add-btn" @click="addCount(product)">+</div>
                        <div class="center-input">
                            <input type="number" class="number-input" v-model="product.detailNum">
                        </div>
                        <div class="reduce-btn" @click="reduceCount(product)">一</div>
                    </div>
                </div>
            </div>
            <div class="yunfei b-t-1">
                <span class="p1">运费</span>
                <span class="p2">{{order.orderFareWebsite==0 ? '免邮':order.orderFareWebsite}}</span>
            </div>
            <div class="payment b-t-1">
                <span>配送</span>
                <div class="select" v-if="order.deliverType==1 || order.deliverType==2">{{order.deliverType==1? 'Tospino物流':'上门自取'}}</div>
                <div class="select" v-else>
                    <div class="gj-img">
                        <img :src="$webUrl+order.areaImg">
                    </div>
                    <span>{{order.areaName}}</span>
                </div>
            </div>
            <div class="heji b-t-1">
                <span class="p1">合计</span>
                <span class="p2 c-orange">{{order.currencySignWebsite}}{{order.orderAmountWebsite}}</span>
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
                <span class="p2">{{orderData.currencySignWebsite}}{{orderData.allOrderProductAmountWebsite}}</span>
            </div>
            <div class="total-bottom">
                <span class="p1">总运费</span>
                <span class="p2 c-orange">{{orderData.currencySignWebsite}}{{orderData.allOrderFareWebsite}}</span>
            </div>
        </div>
        <div class="niming">
            <van-checkbox v-model="checked" checked-color="#FA5300">匿名</van-checkbox>
        </div>
        <div class="settlement" >
            <span class="settlement-p1">总金额：</span>
            <span class="settlement-p2 c-orange">{{orderData.currencySignWebsite}}{{orderData.allOrderAmountWebsite}}</span>
            <div class="settlement-btn" @click="showpaymen">
                <span>提交订单</span>
            </div>
        </div>

        <!-- 确认付款弹窗 -->
        <action-sheet-paymen ref="paymen" @showpaymen="showpaymen" @showyinhang="showyinhang" @showpassword="showpassword"></action-sheet-paymen>
        
        <!-- 选择付款方式弹窗 -->
        <action-sheet-yinhang ref="yinhang" @showyinhang="showyinhang" @showpassword="showpassword" @showsucess="showsucess"></action-sheet-yinhang>

        <!-- 支付成功弹窗 -->
        <action-sheet-sucess ref="sucess" @showsucess="showsucess"></action-sheet-sucess>

        <!-- 支付密码 -->
        <action-sheet-password ref="password" @showpassword="showpassword"></action-sheet-password>
    </div>
</template>

<script>
import actionSheetPaymen from "./itemComponents/actionSheetPaymen"
import actionSheetYinhang from './itemComponents/actionSheetYinhang'
import actionSheetSucess from './itemComponents/actionSheetSucess'
import actionSheetPassword from './itemComponents/actionSheetPassword'
import balanceHeader from './itemComponents/balanceHeader'
import {querydefaultObjectApi} from '@/api/accountSettings/index'
import {getconfirmorderApi} from '@/api/confirmOrder/index'
import {mapState} from 'vuex'
export default {
    props: {

    },
    data() {
        return {
            value1: 1,
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
            radio:true,
            yinhangTitle:'确认付款',
            orderData:{},
            defaultAdderss:{},
            zffs:'在线支付'
        };
    },
    computed: {
        ...mapState({
            selectionShopCar:state=>state.selectionShopCar
        })
    },
    created() {

    },
    mounted() {
        this.querydefaultObject()
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
        confirm(){},
        jumpRouter(name){
            this.$router.push({name})
        },
        //弹出银行
        showyinhang(){
            this.$refs.yinhang.showAction = true
        },
        //弹出支付
        showpaymen(){
            this.$refs.paymen.showAction = true
        },
        //弹出支付成功
        showsucess(){
            this.$refs.sucess.showAction = true
        },
        //弹出密码框
        showpassword(){
            this.$refs.password.showAction = true
        },
        //获取用户默认收货地址信息
        querydefaultObject(){
            querydefaultObjectApi().then(res => {
                if(res.code == 0){
                    if(res.Data==null){
                        this.jumpRouter('确认订单收货地址')
                        console.log(123);
                        return
                    }
                    this.defaultAdderss = res.Data
                    let obj = {
                        addressId:res.Data.addressId,
                        detailList:this.selectionShopCar
                    } 
                    
                    this.getconfirmorder(obj)
                    
                }
            })
        },
        //订单详情
        getconfirmorder(data){
            getconfirmorderApi(data).then(res => {
                if(res.code == 0){
                    this.orderData = res.Data
                }   
            })
        },
        //加数量
        addCount(item){
            item.detailNum++
        },
        //减数量
        reduceCount(item){
            item.detailNum--
            console.log(item);
        }
    },
    components: {
        actionSheetPaymen,
        actionSheetYinhang,
        actionSheetSucess,
        actionSheetPassword,
        balanceHeader
    },
};
</script>

<style scoped lang="less">
.order-content{
    width: 100%;
    height: 100%;
    .shouhuoxq{
        background-color: #fff;
        position: relative;
        font-size:30px;
        color: #333;
        padding: 30px 0 30px 30px;
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
        height:100px;
        background-color: #fff;
        line-height: 100px;
        position: relative;
        z-index: 1;
        padding: 0 30px;
        span:nth-child(1){
            font-size:26px;
        }
        .select{
            float: right;
            font-size:26px;
            color: #333;
            .xiala{
                width: 180px;
                position: absolute;
                background-color: #fff;
                text-align: center;
                right:29px;
            }
        }
        .gj-img{
            width: 45px;
            display: inline-block;
            vertical-align: sub;
            margin-right: 10px;
        }
        .ellipsis{
           vertical-align: middle;
           font-weight: bold;
           margin-left:29px;
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
                        border-left:none;
                        font-size: 40px;
                    }
                    .reduce-btn{
                        position: absolute;
                        top:20px;
                        right:128px;
                        width: 40px;
                        height: 40px;
                        border: 1px solid #999999;
                        border-right:none;
                        text-align: center;
                        line-height: 40px;
                        background-color: #EEEEEE;
                        color: #666;
                    }
                    .center-input{
                        position: absolute;
                        top:20px;
                        right:40px;
                        width: 88px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        .number-input{
                            width: 90%;
                            height: 75%;
                            text-align: center;
                        }
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
            margin-bottom: 20px;
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
