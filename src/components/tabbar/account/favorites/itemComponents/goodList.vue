<template>
    <div>
        <div class="goods-list">
            <!-- 未失效商品 -->
            <div class="footprint-goods-content" v-for="i in 4" :key="i">
                <div class="good-img">
                    <van-checkbox v-model="checked" icon-size="24px" class="img-checkbox"></van-checkbox>
                    <img src="@/assets/img/tabbar/my/footprint/tiaoxing@2x.png" alt="">
                </div>
                <div class="good-desc">
                    <span class="p1">哈森2019秋新款羊反绒尖头单鞋时尚婚鞋浅口高跟鞋女细跟HL96505</span><br>
                    <span class="p2">1159人收藏</span>
                </div>
                <div class="good-price">
                    <span class="p1">￥259.00</span>
                    <span class="p2" @click="toResembleGood">找相似</span>
                </div>
            </div>
            <!-- 失效商品 -->
            <div class="goods-list">
                <div class="footprint-goods-content">
                    <div class="good-img">
                        <van-checkbox v-model="checked" icon-size="24px" class="img-checkbox"></van-checkbox>
                        <img src="@/assets/img/tabbar/my/footprint/tiaoxing@2x.png" alt="">
                    </div>
                    <div class="good-desc">
                        <span class="p1">哈森2019秋新款羊反绒尖头单鞋时尚婚鞋浅口高跟鞋女细跟HL96505</span><br>
                        <span class="p2">已售2953件</span>
                    </div>
                    <div class="good-price">
                        <span class="p3">货品已不能购买，如有需求请联系客服</span>
                        <span class="p2 t50" @click="toResembleGood">找相似</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            checked:false,
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
        toResembleGood(){
            //找相似
            this.$router.push({name:'找相似商品'})
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.goods-list{
    position: relative;
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
        .good-price{
            position: absolute;
            top:184px;
            left:211px;
            color: #FA5300;
            font-size:36px;
            .p2{
                font-size: 26px;
                color: #333333;
                width:120px;
                height:40px;
                // margin-left:180px;
                display: inline-block;
                border:1px solid #666;
                border-radius:40%;
                text-align: center;
                line-height: 40px;
                position: absolute;
                left:360px;
                // top:-50px;
            }
            .p3{
                font-size: 18px;
                color: #666;
            }
        }
    }
}
.t50{
    top:-50px;
}
</style>
