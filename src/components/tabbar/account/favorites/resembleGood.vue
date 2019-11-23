<template>
<!-- 找相似商品 -->
    <div class="resemble-good">
        <div class="footprint-header">
            <van-icon name="arrow-left" class="arrow-left"/>
            <span class="header-t1">相似产品</span>
            <van-icon name="ellipsis" class="ellipsis"/>
        </div>
        <!-- 未失效商品 -->
        <div class="footprint-goods-content" v-for="i in 4" :key="i">
            <div class="good-img">
                <img src="@/assets/img/tabbar/my/footprint/tiaoxing@2x.png" alt="">
            </div>
            <div class="good-desc">
                <span class="p1">哈森2019秋新款羊反绒尖头单鞋时尚婚鞋浅口高跟鞋女细跟HL96505</span><br>
            </div>
            <div class="country">
                <div class="good-img">
                    <img src="@/assets/img/confirmOrder/guojia@2x.png" alt="">
                </div>
                <div class="guojia">
                     <span>瑞士</span><br>
                </div>
            </div>
            <div class="good-price">
                <span class="p1">￥259.00</span>
                <span class="p3">已售2953件</span>
                <span class="p2">购买</span>
            </div>
        </div>
        <footer-exhibition></footer-exhibition>
    </div>
</template>

<script>
import footerExhibition from '@/multiplexing/footerExhibition'
export default {
    props: {

    },
    data() {
        return {

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
        footerExhibition
    },
};
</script>

<style scoped lang="less">
.resemble-good{
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
            font-size:30px;
            right: 100px;
            top:30px;
        }
        .ellipsis{
            position: absolute;
            top:20px;
            right: 30px;
            font-size: 40px;
            transform: rotate(-90deg)
        }
    }
    .footprint-goods-content{
        width: 100%;
        height: 250px;
        background-color: #fff;
        position: relative;
        margin-bottom: 20px;
        .good-img{
            width: 160px;
            height: 160px;
            position: relative;
            top:20px;
            left:30px;
            .img-checkbox{
                position: absolute;
                left:20px;
                top:20px;
                /deep/ .van-icon{
                    background:rgba(51,51,51,0.5);
                }
            }
        }
        .good-desc{
            position: absolute;
            top:39px;
            left:211px;
            font-size:26px;
            color: #333;
            .p1{
                line-height:39px;
            }
            .p2{
                font-size:20px;
                color:rgba(102,102,102,1);
                margin-top:20px;
                display: inline-block;
            }
        }
        .country{
            position: absolute;
            top:110px;
            left:190px;
            color: #333;
            font-size:36px;
            .good-img{
                width: 30px;
                height: 30px;

            }
            .guojia{
                font-size: 20px;
                color: #DB9000;
                margin-left:70px;
                margin-top:-5px;
            }
        }
        .good-price{
            position: absolute;
            top:184px;
            left:211px;
            color: #333;
            font-size:36px;
            .p2{
                width:100px;
                height:40px;
                background:rgba(250,83,0,1);
                border-radius:20px;
                font-size: 26px;
                color: #FFFEFE;
                text-align: center;
                line-height: 40px;
                position: absolute;
                left:400px;
            }
            .p3{
                font-size: 16px;
                color: #666;
            }
        }
    }
}
</style>
