<template>
<!-- 购物车 -->
    <div class="shopping-cart">
        <div class="shopping-cart-header">
            <span class="header-t1">购物车({{shoplength}})</span>
            <span class="header-t2" @click="mange" v-if="conditions">{{showMange?'管理':'完成'}}</span>
        </div>
        <div class="shopping-cart-container" v-if="conditions">
            <!-- 有商品的页面 -->
            <div class="shopping-cart-content" v-for="(data,index) in dataList" :key="index">
                <div class="serial-number">
                    <van-checkbox v-model="data.checkStatus" icon-size="24px" checked-color="#F83600" @click="changeCheckbox(data,'all')">DJF161611616</van-checkbox>
                </div>
                <div class="goods-content" v-for="(dataitem,index) in data.list" :key="index">
                    <van-checkbox v-model="dataitem.checkStatus" icon-size="24px" checked-color="#F83600" @click="changeCheckbox(dataitem,'',data)"></van-checkbox>
                    <div class="good-img" @click="toDetail">
                        <img src="@/assets/img/tabbar/shoppingCart/product@2x.png">
                    </div>
                    <span class="good-describe" @click="toDetail">{{dataitem.skuName}}</span>
                    <div class="good-seclet">
                        <select name="" disabled> 
                            <option value="0">{{dataitem.skuValuesTitle}}</option> 
                        </select> 
                    </div>
                    <div class="good-logistics">
                        <span>物流：TOSPINO物流</span>
                    </div>
                    <div class="good-price">
                        <span class="price-p1">¥{{dataitem.discountPrice}}</span>
                        <span class="price-p2" v-if="dataitem.salePriceFlag">159.00</span>
                        <van-stepper class="price-quantity" v-model="dataitem.shopNumber" />
                        <span class="price-batch">起订量{{dataitem.numIntervalStart}}件</span>
                    </div>
                </div>
            </div>
            <!-- 失效商品 -->
            <div class="shopping-cart-content">
                <div class="serial-number">
                    <span class="invalid-num">失效宝贝2件</span>
                    <span class="empty">清空</span>
                </div>
                <div class="goods-content" v-for="(wuxiao,index) in wuxiaoList" :key="index">
                    <span class="invalid">
                        失效
                    </span>
                    <div class="good-img">
                        <img src="@/assets/img/tabbar/shoppingCart/product@2x.png">
                    </div>
                    <span class="good-describe">{{wuxiao.skuName}}</span>
                    <div class="good-seclet">
                        <span class="specifications">{{wuxiao.skuValuesTitle}}</span>
                    </div>
                    <div class="good-price">
                        <span class="price-batch-left">已下架</span>
                        <span class="price-batch-right" @click="toXiangsi">找相似</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="no-shopping" v-else>
            <!-- 没有商品的页面 -->
            <div class="no-shopping-img">
                <img src="@/assets/img/tabbar/shoppingCart/icon@2x.png">
                <div class="no-shopping-p1">
                    您还没有选购商品哦
                </div>
                <div class="no-shopping-p2" @click="jumpRouter('首页')">
                    去商城选购商品
                </div>
            </div>
            
            
        </div>
        <div>
            <footer-exhibition v-if="footerShow" :footerData="footerData"></footer-exhibition>
        </div>
        <div style="height:60px" v-if="conditions">
            <div class="settlement">
                <span class="settlement-text" v-if="showMange">
                    <van-checkbox v-model="checked" icon-size="24px" class="checkbox" checked-color="#F83600"></van-checkbox>
                    <span class="btn" @click="$router.push({name:'确认订单详情'})">结算(0)</span>
                    <span class="p3">¥5</span>
                    <span class="p2">合计:</span>
                    <span class="p1">全选</span>
                </span>
                <span class="settlement-text" v-else>
                    <van-checkbox v-model="checked" icon-size="24px" class="checkbox" checked-color="#F83600"></van-checkbox>
                    <span class="btn1" @click="show=true">删除</span>
                    <span class="btn2">移入收藏夹</span>
                    <span class="p1">全选</span>
                </span>
            </div>
        </div>
        
        <!-- <div style="height:60px"></div> -->


        <van-overlay :show="show">
            <!-- 遮罩层确认购买弹框 -->
            <div class="overlay-wrapper" @click.stop>
                <div class="overlay-wrapper-p1">
                    确认删除这4件商品吗？
                </div>
                <div class="overlay-wrapper-btns">
                    <span @click="show = false">取消</span>
                    <span @click="show = false">确定</span>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import footerExhibition from '@/multiplexing/footerExhibition'
import {shopcartlistApi} from '@/api/shoppingCart/index'
import {guessyoulikeApi} from '@/api/search/index'
export default {
    props: {

    },  
    data() {
        return {
            checked:false,
            show:false,
            showMange:true,
            scroll:'',
            footerShow:false,
            formData:{
                page:1,
                limit:10
            },
            dataList:[],
            youxiaoList:[],
            wuxiaoList:[],
            youlikeData:{
                page:1,
                limit:6
            },
            footerData:{},
            shopList:[]
        };
    },
    computed: {
        conditions(){
            return this.shopList.length>0
        },
        shoplength(){
            return this.shopList.length
        }
    },
    created() {

    },
    mounted() {
        // window.addEventListener('scroll', this.menu)
        this.shopcartlist()
        this.guessyoulike()
    },
    watch: {

    },
    methods: {
        toDetail(){
            this.$router.push({name:'商品详情'})
        },
        mange(){
            this.showMange = !this.showMange
        },
        toXiangsi(){
            this.$router.push({name:'找相似商品'})
        },
        //获取滚动条距离底部距离
        menu() {
            // this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(this.scroll,'scroll')
            console.log(document.documentElement.scrollHeight-document.documentElement.scrollTop-document.documentElement.clientHeight);
        },
        jumpRouter(name){
            this.$router.push({name})
        },
        //购物车列表
        shopcartlist(){
            shopcartlistApi(this.formData).then(res => {
                if(res.code == 0){
                    this.shopList = res.Data.list
                    this.shopList.forEach(item => {
                        if(item.isValid == 1){
                            this.youxiaoList.push(item)
                        }else{
                            this.wuxiaoList.push(item)
                        }
                    })
                    //根据businessId分类
                    this.dataList = this.groupArr(this.youxiaoList,'businessId')
                    this.dataList.forEach(item => {
                        item.list.forEach(listitem => {
                            listitem.salePriceFlag = true
                            listitem.checkStatus = false
                            if(listitem.discountPrice == null){
                                listitem.discountPrice = listitem.salePrice
                                listitem.salePriceFlag = false
                            }
                        })
                    })
                    console.log(this.dataList,'this.dataList');
                }
            })
        },
        //通过某个字段进行分组
        groupArr(list,field){
            let obj = {};
            let item = '';
            // let list = [];
            for(var i=0;i<list.length;i++){
                for(item in list[i]){
                    if(item==field){
                        obj[list[i][item]] = {
                            list:obj[list[i][field]]?obj[list[i][field]].list:[],
                        };
                    }
                }
                obj[list[i][field]].list.push(list[i])
            }
            let att = [];
            for(item in obj){
                att.push({
                    list:obj[item].list,
                })
            }
            return att;
        },
        //猜你喜欢
        guessyoulike(){
            guessyoulikeApi(this.youlikeData).then(res => {
                if(res.code == 0){
                    this.footerData = res.Data
                    this.footerShow = true
                }
            })
        },
        //点击复选框
        changeCheckbox(item,flag,list){
            item.checkStatus = !item.checkStatus
            if(flag == 'all'){
                item.list.forEach(ele => {
                    ele.checkStatus = item.checkStatus
                })
            }else{
                //标记
                let itemFlag = true
                list.list.forEach(element => {
                    //如果有一个是没选中的
                    if(element.checkStatus == false){
                        itemFlag = false
                    }
                })
                //判断状态
                if(itemFlag){
                    //全部选中
                    list.checkStatus = true
                }else{
                    //有一个没选中
                    list.checkStatus = false
                }
            }
            this.$forceUpdate()

            
        }
    },
    components: {
        footerExhibition
    },
};
</script>

<style scoped lang="less">
.shopping-cart{
    .shopping-cart-header{
        width: 100%;
        height: 88px;
        background-color: #f2f3f5;
        text-align: center;
        position: relative;
        .header-t1{ 
            display: inline-block;
            line-height: 88px;
            font-size: 36px;
        }
        .header-t2{
            position: absolute;
            font-size:30px;
            right: 30px;
            top:30px;
        }
    }
    .shopping-cart-content{
        width: 100%;
        background-color: #fff;
        margin-bottom: 20px;
        .serial-number{
            width: 100%;
            // height: 72px;
            padding-top: 30px;
            box-sizing: border-box;
            /deep/ .van-checkbox{
                height: 50px;
                .van-checkbox__icon{
                    margin-left:30px;
                }
                .van-checkbox__label{
                    margin-left:29px;
                    font-size: 32px;
                    color: #333
                }
            }
            .invalid-num{
                color: #333333;
                font-size: 26px;
                margin-left:29px;
            }
            .empty{
                float: right;
                margin-right: 26px;
                color: #999;
                font-size: 28px;
            }
        }
       .goods-content{
           width: 100%;
           height: 350px;
           background-color: #fff;
           box-sizing: border-box;
           padding-top:50px;
           position: relative;
           .good-img{
               width: 200px;
               height: 200px;
               display: inline-block;
               margin-right:20px;
           }
           .van-checkbox{
                display: inline-block;
                position: relative;
                left: 0;
                top:-60px;
                margin:0 12px 0 30px;
           }
           .good-describe{
                display: inline-block;
                position: absolute;
                width: 410px;
                top:50px;
                left:320px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
           }
           .good-seclet{
                width: 220px;
                height: 44px;
                position: absolute;
                top:115px;
                left:320px;
                select{
                    width: 100%;
                }   
                .specifications{
                    display: inline-block;
                    background-color: #EEE;
                    padding: 12px 18px;
                }
            }
            .good-logistics{
                position: absolute;
                top:166px;
                left:320px;
                font-size: 16px;
                color: #666666;
            }
            .good-price{
                position: absolute;
                top:209px;
                left:320px;
                width: 400px;
                .price-p1{
                    font-size:40px;
                    color: #FA5300;
                }
                .price-p2{
                    font-size:20px;
                    color: #999;
                    text-decoration: line-through;
                    margin-right:30px;
                }
                .price-quantity{
                    display: inline-block;
                    width: 147px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    position: absolute;
                    right:0;
                    /deep/ .van-stepper__input{
                        width: 76px
                    }
                }
                .price-batch,.price-batch-right{
                    width: 162px;
                    height: 24px;
                    display: inline-block;
                    position: absolute;
                    top:35px;
                    left:250px;
                    font-size: 24px
                }
                .price-batch-left{
                    width: 162px;
                    height: 40px;
                    display: inline-block;
                    position: absolute;
                    top:35px;
                    left:0px;
                    font-size: 24px;
                    color: #666;
                    line-height: 40px;
                }
                .price-batch-right{
                    width: 140px;
                    height: 40px;
                    display: inline-block;
                    border:2px solid rgba(219,144,0,1);
                    border-radius:20px;
                    text-align: center;
                    line-height: 40px;
                }
            }
            .invalid{
                display: inline-block;
                width: 52px;
                height: 34px;
                border:2px solid rgba(220,220,220,1);
                border-radius:5px;
                line-height: 34px;
                position: relative;
                top: -84px;
                left: 20px;
            }
       }
    }
    .settlement{
        width: 100%;
        height: 120px;
        background-color:#fff;
        position:fixed;
        bottom:98px;
        z-index:5;
        line-height: 120px;
        border-top:2px solid #DCDCDC;
        border-bottom:2px solid #DCDCDC;
        .checkbox{
            display: inline-block;
            margin:39px 0 0 30px;
        }
        .settlement-text{
            position: absolute;
            display: inline-block;
            width: 100%;
            height: 100%;;
            top:0px;
            left:0px;
            font-size: 32px;
            .p2,.p3{
                float: right;
            }
            .p1{
                position: absolute;
                left:103px;
                color: #999;
            }
            .p3{
                margin-left:18px;
            }
            .btn{
                float: right;
                width:160px;
                height:90px;
                background:linear-gradient(-90deg,rgba(248,54,0,1),rgba(250,83,0,1));
                border-radius:45px;
                color:rgba(255,255,255,1);
                line-height:90px;
                text-align: center;
                margin:16px 30px 0 18px;
            }
            .btn2{
                width:186px;
                height:50px;
                border:2px solid rgba(219,144,0,1);
                border-radius:25px;
                font-size:28px;
                color: #DB9000;
                position: absolute;
                right:154px;
                top:34px;
                line-height: 50px;
                text-align: center
            }
            .btn1{
                width:104px;
                height:50px;
                border:2px solid rgba(250,83,0,1);
                border-radius:25px;
                color: #FA5300;
                font-size:28px;
                line-height: 50px;
                text-align: center;
                position: absolute;
                right:30px;
                top:34px;
            }
        }
       
    }
    .no-shopping{
        width: 100%;
        height: 858px;
        position: relative;
        .no-shopping-img{
            width: 400px;
            height: 300px;
            position: absolute;
            top:200px;
            left:175px;
            text-align: center;
            .no-shopping-p1{
                font-size: 28px;
                color: #666666;
            }
            .no-shopping-p2{
                display: inline-block;
                padding: 6px 11px;
                font-size: 20px;
                color: #fff;
                background-color: #FA5300;
                border-radius: 15px;
            }
        }
        .no-shopping-p1{
            margin:36px 0;
        }
    }
    .van-overlay{
        z-index:10 !important ;
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
