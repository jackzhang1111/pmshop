<template>
<!-- 商品搜索模式一 -->
    <div class="search-goods-one">
        <van-dropdown-menu active-color="#DB9000">
            <van-dropdown-item v-model="value1" :options="option1" class="scj"></van-dropdown-item>
            <van-dropdown-item v-model="value2" :options="option2"  class="scj"/>
            <van-dropdown-item v-model="value3" :options="option3"  class="scj" @close="aaa(value3)"/>
            <van-icon name="apps-o" class="apps-o" @click="viewModel"/>
        </van-dropdown-menu>
        <div style="height:34px;"></div>
        <div v-if="goodsShow1">
            <div class="footprint-goods-content" v-for="i in 9" :key="i">
                <div>
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
            </div>
        </div>
        
        <div v-else>
            <footer-exhibition :showIlike="false"></footer-exhibition>
        </div>
    </div>
</template>

<script>
import footerExhibition from '@/multiplexing/footerExhibition'
export default {
    props: {

    },
    data() {
        return {
            value1: 0,
            value2: 0,
            value3:0,
            option1: [
                { text: '收藏时间', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ],
            option2: [
                { text: '销量', value: 0 },
                { text: '从高到低', value: 1 },
                { text: '从低到高', value: 2 },
            ],
            option3: [
                { text: '价格', value: 0 },
                { text: '从高到低', value: 1 },
                { text: '从低到高', value: 2 },
            ],
            checked:true,
            goodsShow1:true
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
        aaa(a,b){
            this.value3 = 0
            console.log(a,b);
        },
        viewModel(){
            this.goodsShow1 = !this.goodsShow1
        }
    },
    components: {
        footerExhibition
    },
};
</script>

<style scoped lang="less">
.search-goods-one{
    /deep/ .van-dropdown-menu{
        height: 69px;
        font-size: 26px;
        position: fixed;
        top:88px;
        left:0;
        z-index: 2;
        width: 100%;
         .van-dropdown-menu__title{
            height: 60px;
            line-height: 60px;
            color: #DB9000;
        }
        /deep/ .van-dropdown-menu__item--disabled{
            span{
                display: none
            }
        }
    }
    .apps-o{
        position: relative;
        top:100%;
        transform: translateY(-70%);
        right:30px;
        font-size: 24px;
    }
    .scj{
        /deep/ .van-dropdown-item__option{
            height: 70px;
            line-height: 50px;
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
