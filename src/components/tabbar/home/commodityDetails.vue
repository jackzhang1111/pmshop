<template>
<!-- 商品详情页 -->
    <div class="commodity-details">
        <!-- 头部搜索框 -->
        <details-header></details-header>
        <div class="commodity-tab">
            <van-tabs v-model="active" class="tab-list" title-active-color="#FA5300">
                <van-tab title="宝贝" ></van-tab>
                <van-tab title="评价"></van-tab>
                <van-tab title="参数"></van-tab>
                <van-tab title="详情"></van-tab>
                <van-tab title="推荐"></van-tab>
            </van-tabs>
        </div>
        <div class="commodity-swipe">
            <van-swipe @change="onChange">
                <van-swipe-item v-for="i in 5" :key="i">
                    <div class="w1">
                        <img src="@/assets/img/tabbar/home/commodityDetails/chanpin@2x.png" alt="">
                    </div>
                </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                    {{ current + 1 }}/{{5}}
                </div>
            </van-swipe>
        </div>
        <div class="good-content">
            <div class="prices">
                <span class="mark c-orange">￥</span>
                <span class="p1 c-orange">259.00</span>
                <span class="p2 through">￥369</span>
            </div>
            <div>
                <span class="p3">起订量200件</span>
            </div>
            <div class="miaoshu">
                <span class="p4">美康粉黛口红女学生款持久滋润防水平价小辣椒巧克力小众品牌正品</span>
                <span >
                    <img src="@/assets/img/tabbar/home/commodityDetails/share-02@2x.png" class="fenxiang">
                    <span class="fenxiang-txt">分享</span>
                </span>
            </div>
            <div class="supplement">
                <span class="t1">物流</span>
                <span class="t2">
                    浙江省 金华市
                </span>
                <span class="erect-line"></span>
                <span class="t3">TOSPINO</span>
            </div>
        </div>

        <van-cell-group class="border-0">
            <van-field v-model="username" clearable right-icon="arrow" placeholder="颜色:21#(复古正红色);196#(朱砂橘);" left-icon="arrow" disabled>
                <div slot="left-icon" size="small" type="primary" class="text-left">
                    <span>规格</span>
                    <span>选择</span>
                    <span class="erect-line1"></span>
                </div>
            </van-field>
        </van-cell-group>

        <div class="good-comment" @click="$router.push({name:'商品详情评价'})">
            <div class="comment-top">
                <span class="p1">评价</span>
                <span class="p2">4.9</span>
                <van-rate v-model="value" void-color="#FA5300"  color="#FA5300"/>
            </div>
            <div class="comment-describe">
                <span> 魅**生:颜色好看,但是质量有问题,刚刚用过一两次口红就转不出来了,用过挺好用的,上色也不错，就是如果...包装有待改进</span>
            </div>
            <div class="comment-specifications">
                <span>
                    颜色:316#(泫雅色)
                </span>
            </div>
            <div class="comment-arrow">
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="bbxq">
            <span class="line-left"></span>
            <span class="bbxq-p1">宝贝详情</span>
            <span class="line-right"></span>
        </div>
        <div class="banner">
            <img src="@/assets/img/tabbar/home/commodityDetails/01@2x.png">
            <img src="@/assets/img/tabbar/home/commodityDetails/02@2x.png">
        </div>  
        <!-- 推荐宝贝 -->
        <footer-exhibition></footer-exhibition>
        <div style="height:50px;"></div>
        <!-- 底部导航 -->
        <van-tabbar v-model="active" class="footer-tab">
            <div class="icon-collection">
                <img src="@/assets/img/tabbar/home/commodityDetails/collection-02@2x.png">
                <span class="icon-collection-p">收藏</span>
            </div>
            <div class="icon-service" @click="service">
                <img src="@/assets/img/tabbar/home/commodityDetails/service@2x.png">
                <span class="icon-collection-p">收藏</span>
            </div>
            <van-button type="default" class="add-shopping-cat">加入购物车</van-button>
            <van-button type="primary" class="spend">立即购买</van-button>
        </van-tabbar>
        
        <van-overlay :show="show" @click="show = false" class="overlay">
            <!-- 遮罩层商品选择规格(未完成) -->
            <div class="overlay-wrapper">
                <commodity-selection></commodity-selection>
            </div>
        </van-overlay>

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
import detailsHeader from '@/multiplexing/detailsHeader'
import footerExhibition from '@/multiplexing/footerExhibition'
import commoditySelection from '@/multiplexing/commoditySelection'
export default {
    props: {

    },
    data() {
        return {
            current: 0,
            username:'',
            value:4,
            active:1,
            show: false,
            show2:false,
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
        onChange(index) {
            this.current = index;
        },
        service(){
            this.show2 = true
        }
    },
    components: {
        detailsHeader,
        footerExhibition,
        commoditySelection
    },
};
</script>

<style scoped lang="less">
.commodity-details{
    .commodity-swipe{
        width: 750px;
        height: 750px;
        .custom-indicator{
            position: absolute;
            bottom: 20px;
            right:30px;
            width:60px;
            height:40px;
            background:rgba(153,153,153,1);
            border-radius:20px;
            text-align: center;
            line-height: 40px;
            font-size: 22px;
            color: #FFFEFE;
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
            
        }
    }
    .good-content{
        width: 100%;
        height: 235px;
        padding: 30px 30px 0;
        box-sizing: border-box;
    }
    .miaoshu{
        position: relative;
        margin-bottom: 19px;
        .fenxiang{
            position: absolute;
            top:0;
            right:0;
            width: 34px;
            height: 34px;
            
        }
        .fenxiang-txt{
            position: absolute;
            right:0;
            bottom: -10px;
            font-size: 20px;
            color:#999999;
        }
    }
    .supplement{
        .t1{
            color: #000000;
            font-size:18px;
        }
        .t2{
            font-size: 18px;
            color: #333;
        }
        .erect-line{
            display: inline-block;
            width: 1px;
            height: 18px;
            background-color: #999999;
        }
        .t3{
            width:70px;
            height:18px;
            background:rgba(153,153,153,1);
            border-radius:9px;
            font-size: 12px;
            color: #FFFEFE;
        }
    }
    .border-0{ //跳转栏
        margin-top: 14px;
        /deep/ .van-cell{
            height: 100px;
            .van-cell__value{
                border:0;
                margin-left:45px;
                /deep/ .van-field__body{
                    width: 95%;
                    line-height: 80px;
                    .van-field__control{
                        margin-left:61px;
                    }
                }
            }
            .text-left{
                width: 60px;
                position: absolute;
                left:23px;
                top:30px;
                color: #000000;
                font-size: 20px;
                line-height:33px;
                font-weight:bold;
                .erect-line1{
                    position: absolute;
                    display: inline-block;
                    width: 2px;
                    height: 50px;
                    background-color: #DCDCDC;
                    top:3px;
                    left:60px;
                }
            }
        }
    }
    .good-comment{
        width: 100%;
        height: 201px;
        margin: 21px 0 0;
        position: relative;
        background-color: #fff;
        .comment-top{
            height: 87px;
            line-height: 87px;
            .p1{
                margin:0 20px 0 30px;
                font-size: 22px;
                color: #000;

            }
            .p2{
                color: #F83600;
            }
        }
        .comment-describe{
            display: inline-block;
            width: 534px;
            font-size: 20px;
            color: #333;
            margin-left:94px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .comment-specifications{
            display: inline-block;
            margin:17px 0 0 94px;
            font-size:16px;
            color: #666666;
        }
        .comment-arrow{
            position: absolute;
            top:102px;
            right:30px;
            color: #999
        }
    }
    .bbxq{
        width: 100%;
        height: 85px;
        background-color: #F2F3F5;
        text-align: center;
        line-height: 85px;
        position: relative;
        .line-left{
            display: inline-block;
            position: absolute;
            width: 40px;
            height: 2px;
            background-color: #666666;
            top:40px;
            left:273px;
        }
        .bbxq-p1{
            font-size:28px;
            color: #666666;
        }
        .line-right{
            display: inline-block;
            position: absolute;
            width: 40px;
            height: 2px;
            background-color: #666666;
            top:40px;
            right:273px;
        }
    }

    /deep/ .footer-tab.van-tabbar--fixed{
        height: 100px;
        .icon-collection{
            position:absolute;
            display: inline-block;
            width: 60px;
            height: 100%;
            left:52px;
            color: #666;
            img{
                width: 48px;
                height: 48px;
                position: absolute;
                top:14px;
            }
            .icon-collection-p{
                position: absolute;
                bottom:10px;
            }
        }
        .icon-service{
            position:absolute;
            display: inline-block;
            width: 60px;
            height: 100%;
            left:156px;
            color: #666;
            img{
                width: 48px;
                height: 48px;
                position: absolute;
                top:14px;
            }
            .icon-collection-p{
                position: absolute;
                bottom:10px;
            }
        }
        .add-shopping-cat{
            width: 230px;
            height: 84px;
            background-color: #FFC4A6;
            position: absolute;
            left:268px;
            top:8px;
            color: #FA5300;
            font-size: 30px;
        }
        .spend{
            width: 230px;
            height: 84px;
            background-color: #FA5300;
            position: absolute;
            right:14px;
            top:8px;
            color: #FEFEFE;
            font-size: 30px;
        }
    }
    .w1{
        width: 100%;
        height: 750px;
        
    }
    .mark{
        font-size: 16px;
    }
    .p1{
        font-size: 36px;
    }
    .p2{
        font-size: 18px;
        color: #666
    }
    .p3{
        display: inline-block;
        font-size:18px;
        color: #333333;
        margin: 12px 0 20px;
    }
    .p4{
        display: inline-block;
        width: 606px;
        font-size: 30px;
        color: #010101
    }
    .overlay{
        // position: relative;
        .overlay-wrapper{
            width: 100%;
            height: 1062px;
            position: absolute;
            bottom: 0;
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
                color: #FA5300;
                border-top:1px solid #DCDCDC;
            }
            
        }
    }
    
}
</style>
