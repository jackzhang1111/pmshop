<template>
<!-- 我的订单 -->
    <div class="my-order">
        <div class="footprint-header">
            <van-icon name="arrow-left" class="arrow-left" @click="$router.go(-1)"/>
            <span class="header-t1">我的订单</span>
            <span class="header-t2" @click="jumpRouter('我的订单历史记录')">
                <van-icon name="search" class="search"/>
            </span>
            <van-icon name="ellipsis" class="ellipsis"/>
        </div>
        <div class="commodity-tab">
            <van-tabs v-model="active" class="tab-list" title-active-color="#FA5300" @change="changeTab">
                <van-tab :title="tab.title" v-for="tab in tabList" :key="tab.id" >
                    <div v-if="noSearchStatus">
                        <!-- 待付款 -->
                        <dfk :dfkList="dfkList" @closeOverlay="closeOverlay" @showPay="showPay"></dfk>
                        <!-- 待发货 -->
                        <dfh :dfhList="dfhList"></dfh>
                        <!-- 已完成 -->
                        <ywc :dfkList="ywcList"></ywc>
                        <!-- 待收货 -->
                        <dsh :dfkList="dshList" @showPay="showPay"></dsh>
                        <!-- 订单关闭 -->
                        <ddgb :dfkList="ddgbList"></ddgb>
                    </div>
                    <noSearch v-else></noSearch>
                </van-tab>
            </van-tabs>
        </div>

        <transition name="canorder">
            <zhezhao v-show="show">
                <cancel-order @closeOverlay="closeOverlay" ref="cancelorder"></cancel-order>
            </zhezhao>
        </transition>

        <action-sheet-password ref="actionSheetPassword"></action-sheet-password>
       
    </div>
</template>

<script>
import dfh from './itemComponents/dfh'
import dfk from './itemComponents/dfk'
import ddgb from './itemComponents/ddgb'
import ywc from './itemComponents/ywc'
import dsh from './itemComponents/dsh'
import zhezhao from '@/multiplexing/zhezhao'
import cancelOrder from './itemComponents/cancelOrder'
import noSearch from './itemComponents/noSearch'

import actionSheetPassword from '@/multiplexing/actionSheetPassword'
import {orderlistApi} from '@/api/myOrder/index.js'
export default {
    props: {

    },
    data() {
        return {
            tabList:[
                {
                    title:'全部',
                    id:null
                },
                {
                    title:'待付款',
                    id:1
                },
                {
                    title:'待发货',
                    id:2
                },
                {
                    title:'待收货',
                    id:3
                },
                {
                    title:'已完成',
                    id:4
                },
            ],
            active:3,
            show2:false,
            noSearchStatus:true,
            formData:{
                product_key_name:'',
                order_status_app:null,
                page:1,
                limit:10
            },
            dfhList:[],
            dfkList:[],
            ddgbList:[],
            ywcList:[],
            dshList:[],
            dataList:[],
            show:false
        };  
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.active = this.$route.query.active
        this.orderlist(this.formData)
    },
    watch: {

    },
    methods: {
        jumpRouter(name){
            this.$router.push({name})
        },
        orderlist(data){
            this.clerStatuList()
            orderlistApi(data).then(res => {
                if(res.code == 0){
                    this.dataList = res.Data.list
                    if(this.dataList.length > 0){
                        this.noSearchStatus = true
                        this.dataList.forEach(item => {
                            if(item.orderStatusApp == 1){
                                this.dfhList.push(item)
                            }else if(item.orderStatusApp == 0){
                                this.dfkList.push(item)
                            }else if(item.orderStatusApp == 2){
                                this.dshList.push(item)
                            }else if(item.orderStatusApp == 3){
                                this.ywcList.push(item)
                            }else if(item.orderStatusApp == 4){
                                this.ddgbList.push(item)
                            }
                        });
                    }else{
                        this.noSearchStatus = false
                    }
                    
                }
            })
        },
        //更改tab
        changeTab(index,title){
            if(index==0){
                this.formData.order_status_app = null
            }else{
                this.formData.order_status_app = index-1
            }
            this.orderlist(this.formData)
        },
        //清空每个状态数组
        clerStatuList(){
            this.dfhList = []
            this.dfkList = []
            this.dshList = []
            this.ywcList = []
            this.ddgbList = []
        },
        //控制取消订单弹窗
        closeOverlay(falg){
            this.show = falg
            this.$refs.cancelorder.anima = true
        },
        //弹出付款弹窗
        showPay(){
            this.$refs.actionSheetPassword.showAction = true
        },
    },
    components: {
        dfh,
        dfk,
        ddgb,
        ywc,
        dsh,
        noSearch,
        actionSheetPassword,
        zhezhao,
        cancelOrder
    },
};
</script>

<style scoped lang="less">
.my-order{
    .footprint-header{
        width: 100%;
        height: 88px;
        background-color: #f2f3f5;
        text-align: center;
        position: relative;
        .arrow-left{
            position: absolute;
            top:20px;
            left:30px;
            font-size: 40px;
            
        }
        .header-t1{ 
            display: inline-block;
            line-height: 88px;
            font-size: 36px;
            color: #010101;
        }
        .header-t2{
            position: absolute;
            top:20px;
            right: 100px;
            font-size: 40px;
        }
        .ellipsis{
            position: absolute;
            top:20px;
            right: 30px;
            font-size: 40px;
            transform: rotate(-90deg)
        }
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
            /deep/ .van-tabs__content{
                padding: 20px 30px;
            }
        }
    }
    .good-detail{
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
                .p5{
                    margin-top:75px;
                    span{
                        &:nth-child(3){
                            font-size: 30px;
                        }
                    }
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
                transform: translateY(-50%)

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
        .good-detail-dfh-footer{
            height: 120px;
            border-top: 1px solid #F2F3F5;
            font-size: 30px;
            color: #333;
            background-color: #fff;
             
            .dfh-footer-top{
                height: 60px;
                text-align: center;
                font-size: 20px;
                line-height:60px;
            }
            .dfh-footer-bottom{
                height: 60px;
                text-align: right;
                font-size: 20px;
                line-height:60px;
            }
        }
    }
}
.font-30{
    font-size: 30px;
}
</style>
