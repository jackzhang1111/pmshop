<template>
<!-- 购物车 -->
    <div class="shopping-cart">
        <div class="shopping-cart-header">
            <span class="header-t1">购物车(4)</span>
            <span class="header-t2" @click="mange">{{showMange?'管理':'完成'}}</span>
        </div>
        <div class="shopping-cart-container" v-if="true">
            <!-- 有商品的页面 -->
            <div class="shopping-cart-content" v-for="(i,index) in 2" :key="index">
                <div class="serial-number">
                    <van-checkbox v-model="checked" icon-size="24px">DJF161611616</van-checkbox>
                </div>
                <div class="goods-content" v-for="(i,index) in 2" :key="index">
                    <van-checkbox v-model="checked" icon-size="24px"></van-checkbox>
                    <div class="good-img">
                        <img src="@/assets/img/tabbar/shoppingCart/product@2x.png">
                    </div>
                    <span class="good-describe">超软美妆蛋 葫芦海绵粉扑干湿两用扑不吃粉气垫rt彩妆化妆工具粉底扑妆容扑456787979789</span>
                    <div class="good-seclet">
                        <select name="" disabled> 
                            <option value="0">红色/s码</option> 
                        </select> 
                    </div>
                    <div class="good-logistics">
                        <span>物流：TOSPINO物流</span>
                    </div>
                    <div class="good-price">
                        <span class="price-p1">¥50.40</span>
                        <span class="price-p2">159.00</span>
                        <van-stepper class="price-quantity" v-model="value" />
                        <span class="price-batch">起订量100件</span>
                    </div>
                </div>
            </div>
            <div class="shopping-cart-content">
                <div class="serial-number">
                    <span class="invalid-num">失效宝贝2件</span>
                    <span class="empty">清空</span>
                </div>
                <div class="goods-content" v-for="(i,index) in 2" :key="index">
                    <span class="invalid">
                        失效
                    </span>
                    <div class="good-img">
                        <img src="@/assets/img/tabbar/shoppingCart/product@2x.png">
                    </div>
                    <span class="good-describe">超软美妆蛋 葫芦海绵粉扑干湿两用扑不吃粉气垫rt彩妆化妆工具粉底扑妆容扑456787979789</span>
                    <div class="good-seclet">
                        <span class="specifications">红色/s码</span>
                    </div>
                    <div class="good-price">
                        <span class="price-batch-left">已下架</span>
                        <span class="price-batch-right">找相似</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="no-shopping" @click="aaa" v-else>
            <!-- 没有商品的页面 -->
            <div class="no-shopping-img">
                <img src="@/assets/img/tabbar/shoppingCart/icon@2x.png">
                <div class="no-shopping-p1">
                    您还没有选购商品哦
                </div>
                <div class="no-shopping-p2">
                    去商城选购商品
                </div>
            </div>
            
            
        </div>
        <div>
            <footerExhibition></footerExhibition>
        </div>
        <div class="settlement">
            <span class="settlement-text" v-if="showMange">
                <van-checkbox v-model="checked" icon-size="24px" class="checkbox"></van-checkbox>
                <span class="btn">结算(0)</span>
                <span class="p3">¥5</span>
                <span class="p2">合计:</span>
                <span class="p1">全选</span>
            </span>
            <span class="settlement-text" v-else>
                <van-checkbox v-model="checked" icon-size="24px" class="checkbox"></van-checkbox>
                <span class="btn1">删除</span>
                <span class="btn2">移入收藏夹</span>
                <span class="p1">全选</span>
            </span>
        </div>


        <van-overlay :show="show" @click="show = false" >
            <!-- 遮罩层确认购买弹框 -->
            <div class="overlay-wrapper" @click.stop>
                <div class="overlay-wrapper-p1">
                    确认删除这4件商品吗？
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
import footerExhibition from '@/multiplexing/footerExhibition'
export default {
    props: {

    },  
    data() {
        return {
            checked:'',
            value:1,
            show:false,
            showMange:true
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
        aaa(){
            
        },
        mange(){
            this.showMange = !this.showMange
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
        z-index:999;
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
                width: 180px;
                height: 36px;
                font-size: 20px;
                color: #fff;
                background-color: #FA5300;
                line-height: 36px;
                border-radius: 15px;
            }
        }
        .no-shopping-p1{
            margin:36px 0;
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
