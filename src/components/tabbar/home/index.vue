<template>
<!-- 首页 -->
    <div class="home">
        <search-header></search-header>
        <div class="big-pig pl-30 box"></div>
        <!-- 限时抢购先隐藏 -->
        <div class="flash-sale pl-30 box" v-if="false">
            <div class="flash-sale-1">
                <span class="put-line"></span>
                <span class="t1">限时</span>
                <span class="t2">抢购</span>
            </div>
            <div class="flash-sale-2">
                <div class="pictures">
                    <div class="p1" v-for="(i,index) in 4" :key="index" @click="$router.push({name:'商品详情'})">
                        <img src="@/assets/img/tabbar/home/01@3x.png" alt="">
                        <span class="good-name">OG法式连衣裙</span><br>
                        <span class="good-price1">¥99.00</span><br>
                        <span class="good-price2">¥199.00</span>
                    </div>
                </div>
                
            </div>
            <div class="jump-btn-con">
                <van-button type="primary" size="large" class="jump-btn" @click="jumpRouter('限时抢购')">
                    <span>进入主会场</span>
                    <span class="jump-btn-icon"></span>
                </van-button>
            </div>
            
        </div>
        <div class="good-recommend box">
            <div class="flash-sale-1">
                <span class="put-line"></span>
                <span class="t1">精品推荐</span>
                <span class="t2">查看更多</span>
            </div>
            <div class="flash-sale-2">
                <div class="pictures">
                    <div class="p1" v-for="finework in homeObj.producteFineWorkpro" :key="finework.skuId">
                        <img :src="$webUrl+finework.imgUrl">
                        <span class="good-name">{{finework.supplyTitle}}</span><br>
                        <span class="good-price1">{{jn}}{{finework.discountPrice == null ? finework.salePrice:finework.discountPrice}}</span><br>
                    </div>
                </div>
            </div>
        </div>
        <div class="good-world box">
            <div class="flash-sale-1">
                <span class="put-line"></span>
                <span class="t1">全球品牌精选</span>
                <span class="t2">查看更多</span>
            </div>
            <div class="good-world-brand">
                <div class="brand-p-1" v-if="false">
                    <img :src="$webUrl+homeObj.producteFineBrand[0].brandLogo" class="brand-p-1-left">
                    <img :src="$webUrl+homeObj.producteFineBrand[1].brandLogo" class="brand-p-1-right-top">
                    <img :src="$webUrl+homeObj.producteFineBrand[2].brandLogo" class="brand-p-1-right-bottom">
                </div>
                <div class="brand-p-2">
                    <img :src="$webUrl+globalPro.brandLogo" v-for="globalPro in globalProList" :key="globalPro.brandId">
                </div>
            </div>
        </div>
        <div class="good-world-best pl-30 box">
            <div class="flash-sale-1">
                <span class="put-line"></span>
                <span class="t1">全球畅销榜</span>
                <span class="t2">查看更多</span>
            </div>
            <div class="flash-sale-2">
                <div class="pictures">
                    <div class="good-world-best-p1" v-for="fineSale1 in fineSaleList1" :key="fineSale1.skuId">
                        <img :src="$webUrl+fineSale1.imgUrl">
                        <span class="good-name">{{fineSale1.supplyTitle}}</span>
                        <span class="good-price">{{jn}}{{fineSale1.discountPrice ? fineSale1.discountPrice : fineSale1.salePrice}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <img src="@/assets/img/tabbar/home/guanggao-01@3x.png">
        </div>
        <div class="exhibition">
            <div class="flash-sale-2">
                <div class="pictures">
                    <div class="p1" v-for="fineSale2 in fineSaleList2" :key="fineSale2.skuId">
                        <img src="@/assets/img/tabbar/home/01@3x.png">
                        <span class="good-name">{{fineSale2.supplyTitle}}</span><br>
                        <span class="good-price1">{{jn}}{{fineSale2.discountPrice ? fineSale2.discountPrice : fineSale2.salePrice}}</span><br>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <img src="@/assets/img/tabbar/home/guanggao-02@3x.png" >
        </div>
        <div class="good-popular box">
            <div class="flash-sale-1">
                <span class="put-line"></span>
                <span class="t1">全球畅销榜</span>
                <span class="t2">查看更多</span>
            </div>
            <div class="good-popular-top" >
                <div class="good-popular-top-1" v-for="category in homeObj.producteFinecategory" :key="category.categoryId">
                    <div class="circle">
                        <span>{{category.categoryName}}</span> 
                    </div>
                    <img :src="$webUrl+category.categoryImg">
                </div>
            </div>
            
        </div>
        <div class="banner">
            <img src="@/assets/img/tabbar/home/guanggao-03@3x.png" >
        </div>
        <div class="good-sort">
            <van-tabs v-model="active" title-active-color="#FA5300" title-inactive-color="#000">
                <van-tab title="标签1" >
                    <div slot="title" >
                        <span class="primary">精品</span>
                        <span class="secondary">猜你喜欢</span>
                    </div>
                </van-tab>
                <van-tab title="标签1" >
                    <div slot="title" >
                        <span class="primary">精品</span>
                        <span class="secondary">猜你喜欢</span>
                    </div>
                </van-tab>
                <van-tab title="标签1" >
                    <div slot="title" >
                        <span class="primary">精品</span>
                        <span class="secondary">猜你喜欢</span>
                    </div>
                </van-tab>
                <van-tab title="标签1" >
                    <div slot="title" >
                        <span class="primary">精品</span>
                        <span class="secondary">猜你喜欢</span>
                    </div>
                </van-tab>
                <van-tab title="标签1" >
                    <div slot="title" >
                        <span class="primary">精品</span>
                        <span class="secondary">猜你喜欢</span>
                    </div>
                </van-tab>
            </van-tabs>
            <div class="footer-exhibition">
                <div v-for="(i,index) in 3" :key="index" class="exhibition-con">
                    <div class="exhibition-left" >
                        <img src="@/assets/img/tabbar/home/chanpin@3x.png">
                        <div class="produced">
                            <span class="icon">
                                <img src="@/assets/img/tabbar/home/guojia@3x.png" alt="">
                            </span>
                            <span class="produced-font">瑞士</span>
                        </div>
                        <div>
                            <span>欧格双肩包男士背包可扩容大容量出差旅行李包15.6寸笔记本电脑包</span>
                        </div>
                        <div class="score">
                            <van-rate v-model="value" readonly  color="#FA5300"/>
                            <span>477</span>
                        </div>
                        <div class="price">
                            <span class="price1">¥199.00</span>
                            <span class="price2">258.00</span>
                            <span class="poin">...</span>
                        </div>
                    </div>
                    <div class="exhibition-right" >
                        <img src="@/assets/img/tabbar/home/chanpin@3x.png">
                        <div class="produced">
                            <span class="icon">
                                <img src="@/assets/img/tabbar/home/guojia@3x.png" alt="">
                            </span>
                            <span class="produced-font">瑞士</span>
                        </div>
                        <div>
                            <span>欧格双肩包男士背包可扩容大容量出差旅行李包15.6寸笔记本电脑包</span>
                        </div>
                        <div class="score">
                            <van-rate v-model="value" readonly  color="#FA5300"/>
                            <span>477</span>
                        </div>
                        <div class="price">
                            <span class="price1">¥199.00</span>
                            <span class="price2">258.00</span>
                            <span class="poin">...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import searchHeader from '@/multiplexing/searchHeader'
import {homePageApi} from '@/api/home/index.js'
export default {
    props: {

    },
    data() {
        return {
            active:0,
            value:2,
            homeObj:{},
            globalProList:[],
            fineSaleList1:[],
            fineSaleList2:[]
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.homePage()
    },
    watch: {

    },
    methods: {
        jumpRouter(name){
            this.$router.push({name})
        },
        //首页数据
        homePage(data){
            homePageApi(data).then(res => {
                if(res.code == 0){
                    this.homeObj = res.Data
                    this.globalProList = this.homeObj['producteFineBrand'].slice(3)
                    this.fineSaleList1 = this.homeObj['productFineSale'].slice(0,3)
                    this.fineSaleList2 = this.homeObj['productFineSale'].slice(3)
                    console.log(this.globalProList,'this.globalProList');
                }
            })
        }
    },
    components: {
        searchHeader,
    },
};
</script>

<style scoped lang="less">
.home{
    position: relative;
    overflow: hidden;
    .big-pig{
        width: 100%;
        height: 320px;
        background-color: red;
        margin: 7px 0 40px;
        background: url('~@/assets/img/tabbar/home/banner@3x.png') no-repeat center;
        background-size: 100%;
    }
    
    .flash-sale{
        width: 100%;
        height: 472px;
        vertical-align:text-top;
        .flash-sale-1{
            position: relative;
            .put-line{
                width: 6px;
                height: 40px;
                background-color: #FA5300;
                display: inline-block;
                position: relative;
                top:5px;
                
            }
            .t1{
                font-size:30px;
                color: #333;
                margin-right:20px;
            }
            .t2{
                font-size:30px;
                color: #333;
                display: inline-block;
                position: relative;
                &:after {
                    content: ' ';
                    position: absolute;
                    left: -15px;
                    top: 10px;
                    width: 6px;
                    height: 6px;
                    background-color: #333;
                    border-radius: 6px;
                }
            }
            .t3{
                position: absolute;
                top:20px;
                right: 145px;
                font-size:24px;
                color: #666
            }
            .van-count-down{
                display: inline-block;
                position: absolute;
                top:20px;   
                right:25px
            }
        }
        .flash-sale-2{
            width: 100%;
            height: 300px;
            margin-top: 17px;
            overflow: scroll;
            .pictures{
                height: 210px;
                width: 1000px;
                // white-space:nowrap;
                // overflow: scroll;
                .p1{
                    width: 200px;
                    height: 210px;
                    display: inline-block;
                    margin-right:11px;
                    text-align: center;
                    .good-name{
                        font-size: 20px;
                        color: #333333
                    }
                    .good-price1{
                        display: inline-block;
                        color: #FA5300;
                        font-size: 24px;
                        margin-top: 8px;
                    }
                    .good-price2{
                        display: inline-block;
                        color: #666;
                        font-size: 16px;
                        margin-top: 10px;
                    }
                }
            }
        }
        .jump-btn-con{
            margin-top:10px;
            margin-right: 30px;
            
            .jump-btn{
                height: 50px;
                background-color: #fff;
                color: #333333;
                font-size: 24px;
                font-weight:bold;
                border:none;
                .jump-btn-icon{
                    display: inline-block;
                    width: 11px;
                    height: 16px;
                    background: url('~@/assets/img/tabbar/home/Enter@3x.png');
                    background-size: 100%;
                    margin-left:11px;
                    
                }
            }
        }
    }
    .good-recommend{
        width: 100%;
        height: 372px;
        padding: 0 30px;
        .flash-sale-1{
            position: relative;
            height: 50px;
            line-height: 50px;
            .put-line{
                width: 6px;
                height: 40px;
                background-color: #FA5300;
                display: inline-block;
                position: relative;
                top:5px;
            }
            .t1{
                font-size:30px;
                color: #333;
                margin-right:20px;
            }
            .t2{
                float: right;
                font-size:20px;
                color: #666
            }
        }
        .flash-sale-2{
            width: 100%;
            height: 300px;
            margin-top: 17px;
            overflow: scroll;
            .pictures{
                // height: 280px;
                // width: 1000px;
                display: flex;
                flex-direction:row;
                justify-content : space-between;
                .p1{
                    // width: 220px;
                    height: 200px;
                    display: inline-block;
                    margin-right:5px;
                    text-align: center;
                    .good-name{
                        display: inline-block;
                        font-size: 20px;
                        color: #333333;
                        margin-top:9px;
                    }
                    .good-price1{
                        display: inline-block;
                        color: #FA5300;
                        font-size: 20px;
                        margin-top: 14px;
                    }
                }
            }
        }
    }
    .good-world{
        width: 100%;
        height: 600px;
        padding: 0 30px;
        .flash-sale-1{
            position: relative;
            height: 50px;
            line-height: 50px;
            .put-line{
                width: 6px;
                height: 40px;
                background-color: #FA5300;
                display: inline-block;
                position: relative;
                top:5px;
                
            }
            .t1{
                font-size:30px;
                color: #333;
                margin-right:20px;

            }
            .t2{
                float: right;
                font-size:20px;
                color: #666;
               
            }
            .t3{
                position: absolute;
                top:20px;
                right: 145px;
                font-size:24px;
                color: #666
            }
            .van-count-down{
                display: inline-block;
                position: absolute;
                top:20px;
                right:25px
            }
        }
        .good-world-brand{
            height: 550px;
            width: 100%;
            margin-top: 17px;
            .brand-p-1{
                width: 100%;
                height: 340px;
                .brand-p-1-left{
                    width: 340px;
                    height: 340px;
                    float: left;
                    margin-right:10px;
                }
                .brand-p-1-right-top{
                    width: 340px;
                    height: 165px;
                    float: left;
                }
                .brand-p-1-right-bottom{
                    width: 340px;
                    height: 165px;
                    float: left;
                    margin-top: 10px;
                }
            }
            .brand-p-2{
                // width: 100%;
                height: 80px;
                margin-top: 10px;
                display: flex;
                flex-direction:row;
                flex-wrap: wrap;
                justify-content : space-between;
                img{
                    width: 165px;
                    height: 80px;
                    margin-right: 3px;
                    &:last-child { 
                        margin-right: 0
                    }
                }
            }
        }
    }
    .good-world-best{
        width: 100%;
        height: 442px;
        .flash-sale-1{
            position: relative;
            .put-line{
                width: 6px;
                height: 40px;
                background-color: #FA5300;
                display: inline-block;
                position: relative;
                top:5px;
            }
            .t1{
                font-size:30px;
                color: #333;
                margin-right:20px;
            }
            .t2{
                position: absolute;
                top:20px;
                right:30px;
                font-size:20px;
                color: #666
            }
        }
        .flash-sale-2{
            width: 100%;
            height: 300px;
            margin-top: 17px;
            .pictures{
                height: 350px;
                width: 690px;
                background-color: #F7E8C7;
                padding: 24px 24px 20px;
                box-sizing: border-box;
                
                .good-world-best-p1{
                    padding: 45px 0 16px;
                    width: 200px;
                    // height: 306px;
                    display: inline-block;
                    text-align: center;
                    margin-right: 21px;
                    background-color: #F2F3F5;
                    position: relative;
                    &:after {
                        content: ' ';
                        position: absolute;
                        left: 0px;
                        top: -10px;
                        width: 35px;
                        height: 35px;
                        background: url('~@/assets/img/tabbar/home/NO.1@3x.png') no-repeat center;
                        background-size: 100%;
                        
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                    img{
                        width: 175px;
                        height: 175px;
                    }
                    .good-name{
                        padding: 0 12px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        margin: 10px 0 14px;
                        color: #000;
                        font-size: 14px;
                    }
                    .good-price{
                        font-size:16px;
                        color: #F83600;
                    }
                }
            }
        }
    }
    .banner{
        width: 100%;
        height: 250px;
    }
    .exhibition{
        height: 288px;
        padding: 0 30px;
        .flash-sale-2{
            width: 100%;
            height: 300px;
            margin-top: 17px;
            overflow: scroll;
            .pictures{
                // height: 280px;
                // width: 1000px;
                display: flex;
                flex-direction:row;
                justify-content : space-between;
                .p1{
                    width: 220px;
                    height: 200px;
                    display: inline-block;
                    margin-right:5px;
                    text-align: center;
                    .good-name{
                        display: inline-block;
                        width: 100%;
                        font-size: 20px;
                        color: #333333;
                        margin-top:9px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .good-price1{
                        display: inline-block;
                        color: #F83600;
                        font-size: 20px;
                        margin-top: 14px;
                    }
                }
            }
        }
    }
    .good-popular{
        width: 100%;
        height: 462px;
        padding: 0 30px;
        .flash-sale-1{
            position: relative;
            height: 50px;
            line-height: 50px;
            .put-line{
                width: 6px;
                height: 40px;
                background-color: #FA5300;
                display: inline-block;
                position: relative;
                top:5px;
            }
            .t1{
                font-size:30px;
                color: #333;
                margin-right:20px;
            }
            .t2{
                float: right;
                font-size:20px;
                color: #666
            }
        }
        .good-popular-top{
            width: 100%;
            height: 170px;
            margin: 19px 0 10px;
            position: relative;
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
            justify-content : space-between;
            .good-popular-top-1{
                width: 340px;
                height: 170px;
                position: relative;
            }
            
        }
        .good-popular-bottom{
            margin: 0px;
        }
        
    }
    .good-sort{
        width: 100%;
        // height: 1619px;
        box-sizing: border-box;
        padding-top:20px;
        /deep/ .van-tabs{
            .van-tabs__wrap{
                height: 88px;
                .primary{
                   font-size:34px;
                }
                .secondary{
                    font-size:20px;
                }
            }
            
        }
        .footer-exhibition{
            width: 100%;
            box-sizing: border-box;
            padding: 0 30px;
            overflow: hidden;
            margin-top: 20px;
            .exhibition-con{
                width: 100%;
                height: 570px;
                margin-bottom: 10px;
            }
            .exhibition-left{
                width: 340px;
                height: 570px;
                float: left;
                background-color: #fff;
                img{
                    width: 340px;
                    height: 340px;
                }
                .icon{
                    position: relative;
                    top:8px;
                    img{
                        width: 30px;
                        height: 30px;
                        margin-left: 10px;
                    }
                }
                .produced{
                    margin-bottom: 18px;
                    .produced-font{
                        color: #DB9000;
                        margin-left:10px;
                    }
                }
                .score{
                    margin:10px 0 20px;
                    .van-rate{
                        margin-right:8px;
                    }
                }
                .price{
                    position: relative;
                    .price1{
                        font-size:28px;
                        color: #FA5300;
                        margin-right:11px;
                    }
                    .price2{
                        font-size:18px;
                        color: #666666;
                        text-decoration:line-through
                    }
                    .poin{
                        position: absolute;
                        font-size: 60px;
                        top: -35px;
                        right: 0;
                    }
                }
            }
            .exhibition-right{
                width: 340px;
                height: 570px;
                float: right;
                background-color: #fff;
                img{
                    width: 340px;
                    height: 340px;
                }
                .icon{
                    position: relative;
                    top:8px;
                    img{
                        width: 30px;
                        height: 30px;
                        margin-left: 10px;
                    }
                }
                .produced{
                    margin-bottom: 18px;
                    .produced-font{
                        color: #DB9000;
                        margin-left:10px;
                    }
                }
                .score{
                    margin:10px 0 20px;
                    .van-rate{
                        margin-right:8px;
                    }
                }
                .price{
                    position: relative;
                    .price1{
                        font-size:28px;
                        color: #FA5300;
                        margin-right:11px;
                    }
                    .price2{
                        font-size:18px;
                        color: #666666;
                        text-decoration:line-through
                    }
                    .poin{
                        position: absolute;
                        font-size: 60px;
                        top: -35px;
                        right: 0;
                    }
                }
            
            }
        }
    }
}
.pl-30{
    padding-left: 30px;
}
.box{
    box-sizing: border-box
}
.c-666{
    color: #666;
}
.item {
  display: inline-block;
  width: 25px;
  height: 25px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #FA5300;
  border-radius:5px;
}
.circle{
    min-width:120px;
    height:120px;
    padding: 0 15px;
    background:rgba(0,0,0,1);
    opacity:0.47;
    border-radius:50%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    span{
        display: inline-block;
        color: #fff;
        margin-top:50%;
        transform: translateY(-50%);
        font-size: 34px;
    }
}
</style>
