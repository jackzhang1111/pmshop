<template>
<!-- 商品规格选择-->
    <div class="modal">
        <div class="commodity-selection">
            <div class="selection-title">
                <div class="selection-img">
                    <img :src="$webUrl+titleImg" alt="">
                </div>
                <div class="p1">
                    <span>{{attrTitle}}</span>
                </div>
                <div class="p2">
                    <span>￥{{sectionPrice}}</span>
                </div>
                <van-icon name="cross" class="cross" @click="closeModal"/>
            </div>
            <div class="selection-conten" @click.stop>
                <van-sidebar v-model="activeKey" class="selection-sidebar" @change="cliLeft">
                    <van-sidebar-item :title="leftData.attrTitle" v-for="leftData in dataList" :key="leftData.attrId"/>
                </van-sidebar>
                <div class="selection-right"  v-for="(rightData,index) in leftDataItem" :key="index">
                   
                    <div class="selection-right-item" @click="getIndex(index)">
                        <div class="selection-right-p1">
                            <span class="ggms">{{rightData.attrTitle}}</span>
                            <div class="jsq">
                                <div class="reduce-btn" @click="operationNumber(index,'jian',rightData)">
                                    <span>一</span>
                                </div>
                                <div class="num">
                                    <span>{{rightData.shopNumber}}</span>
                                </div>
                                <div class="add-btn" @click="operationNumber(index,'jia',rightData)">
                                    <van-icon name="plus" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="selection-right-p2">
                            <span>￥{{rightData.skuPrice}}</span>
                            <span class="fl-right">库存：{{rightData.skuNum}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="total">
                <span class="c-orange" style="margin-left:10px;">￥{{money}}</span>
                <span>件</span>
                <span class="c-orange">&nbsp;{{leijia}} &nbsp;</span>  
                <span>共 </span>
            </div>
            <div>
                <div class="success-btn"  v-if="btnStatus" @click="buyProduct">确定</div>
                <div class="success-btn" v-else>
                    <div class="btn-jrgwc" @click="buyshoppingCar">加入购物车</div>
                    <div class="btn-qd" @click="buyProduct">确定</div>
                </div>
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
import {addshopcartApi} from '@/api/shoppingCart/index'
import { Toast } from 'vant';
export default {
    props: {
        selectionData:{
            type:Object,
            default: ()=>{
                return {}
            }
        },
        btnStatus:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            activeKey:0,
            selectionObj:{},
            dataList:[],
            leftDataItem:[],
            titleImg:'',
            attrTitle:'',
            sectionPrice:0,
            money:0,
            leijia:0,
        };
    },
    computed: {
        
    },
    created() {

    },
    mounted() {
        this.getData()
    },
    watch: {
        selectionData:{
            handler:function(newVal, oldVal){
                this.getData()
            },
        },
    },
    methods: {
        //关闭规格
        closeModal(){
            this.$emit('changeComStatus',false)
        },
        getData(){
            this.selectionObj = Object.assign({},this.selectionObj,this.selectionData)
            this.dataList = this.selectionObj.productSkuList
            let arr = []
            let arr2 = []
            this.dataList.forEach(item => {
                item.tpproductskuattrvalue.forEach(item2 => {
                    item2.shopNumber = 0
                    //价格区间(最小值和最大值)
                    if(item.tpproductskuattrvalue.length > 1){
                        arr.push(item2.skuPrice)
                        arr.sort(function (a, b) {
                            return a-b;
                        }); 
                        let min = arr[0];
                        let max = arr[arr.length - 1];
                        item.sectionPrice = min + '~' + max

                        
                    }else{
                        item.sectionPrice = item2.skuPrice
                    }
                })
            })
            this.leftDataItem = this.dataList[0].tpproductskuattrvalue
            this.titleImg = this.leftDataItem[0].imgUrl
            this.attrTitle = this.dataList[0].attrTitle
            this.sectionPrice = this.dataList[0].sectionPrice
        },
        //点击左侧导航
        cliLeft(index){
            this.leftDataItem = this.dataList[index].tpproductskuattrvalue
            this.titleImg = this.leftDataItem[0].imgUrl
            this.attrTitle = this.dataList[index].attrTitle
            this.sectionPrice = this.dataList[index].sectionPrice
            this.buyTotle(this.leftDataItem)
        },
        getIndex(i){
            this.titleImg = this.leftDataItem[i].imgUrl
        },
        operationNumber(i,type,data){
            let num = 0
            if(type=='jian'){
                if(this.leftDataItem[i].shopNumber == 0) return
                this.leftDataItem[i].shopNumber--

            }else{
                this.leftDataItem[i].shopNumber++
            }
            this.$forceUpdate()

            //遍历求出购买数量金额
            this.buyTotle(this.leftDataItem)
        },
        //购买数量金额
        buyTotle(list){
            let leijia = 0;
            let money = 0
            list.forEach(listItem => {
                leijia += listItem.shopNumber
                money += listItem.skuPrice * listItem.shopNumber
            })
            this.leijia = leijia
            this.money = money
        },
        //点击确定收入购物车
        buyshoppingCar(){
            this.addshopcart(this.leftDataItem)
        },
        //添加购物车
        addshopcart(data){
            let arr = data
            data = []
            arr.forEach(item => {
                if(item.shopNumber > 0){
                    data.push(item)
                }
            })
            addshopcartApi(data).then(res => {
                if(res.code == 0){
                    Toast('成功添加购物车');
                    setTimeout(()=>{
                        this.closeModal()
                    },1000)
                }
            })
        },
        //确定按钮购买商品
        buyProduct(){
            this.$router.push({name:'确认订单详情'})
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.modal{
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
}
.commodity-selection{
    width: 100%;
    background:rgba(242,243,245,1);
    max-height: 90%;
    position: absolute;
    bottom: 0;
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
        max-height: 1000px;
        overflow: hidden;
        .selection-sidebar{
            float: left;
            width: 220px;
            max-height: 750px;
            overflow-y: auto;
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
            float: right;
            width: 530px;
            max-height: 750px;
            overflow-y: auto;
            .selection-right-item{
                padding: 50px 30px 19px 17px;
                .selection-right-p1{
                    overflow: hidden;
                    .ggms{
                        width: 175px;
                        float: left;
                    }
                    .jsq{
                        float: right;
                        .add-btn{
                            float: left;
                            width: 60px;
                            height: 60px;
                            line-height: 60px;
                            text-align: center;
                            background-color: #999;
                        }
                        .reduce-btn{
                            float: left;
                            width: 60px;
                            height: 60px;
                            line-height: 60px;
                            text-align: center;
                            background-color: #999;
                        }
                        .num{
                            float: left;
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
                .selection-right-p2{
                    margin-top:18px;
                    color: #666;
                    font-size: 18px;
                }
            }
            
        }
    }
    .total{
        height: 40px;
        line-height: 40px;
        padding-right: 40px;
        span{
            float: right;
        }
    }
    .success-btn{
        height: 110px;
        background-color: #FA5300;
        line-height: 110px;
        color: #fff;
        text-align: center;
        font-size: 42px;
        .btn-jrgwc,.btn-qd{
            width: 50%;
            float: left;
            font-size: 42px;
            text-align: center;
            line-height: 110px;
            color: #FA5300;
            background-color: #FFC4A6;
        }
        .btn-qd{
            background-color: #FA5300;
            color: #fff;
        }
    }
}
</style>
