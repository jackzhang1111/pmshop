<template>
    <div>
        <search-head @onfocus="onfocus" @onSearch="onSearch" @getInputVal="getInputVal" v-if="searchHidden"></search-head>
        <div class="goods-list" v-for="i in 4" :key="i">
            <!-- 未失效商品 -->
            <div class="footprint-goods-content" >
                <div class="fl-left">
                    <div class="good-img">
                        <van-checkbox v-model="checked" icon-size="24px" class="img-checkbox" v-if="showCheck"></van-checkbox>
                        <img src="@/assets/img/tabbar/my/footprint/tiaoxing@2x.png" alt="">
                    </div>
                </div>
                <div class="fl-right clearfix">
                    <div class="good-desc">
                        <span class="p1">哈森2019秋新款羊反绒尖头单鞋时尚婚鞋浅口高跟鞋女细跟HL96505</span><br>
                        <span class="p2">1159人收藏</span>
                    </div>
                    <div class="good-price">
                        <span class="p1">￥259.00</span>
                        <span class="p2 fl-right" @click="toResembleGood">找相似</span>
                    </div>
                </div>
                
            </div>
            
        </div>
        <!-- 失效商品 -->
            <div class="goods-list" v-for="i in 4" :key="i+'a'">
                <div class="footprint-goods-content">
                    <div class="fl-left">
                        <div class="good-img">
                            <van-checkbox v-model="checked" icon-size="24px" class="img-checkbox" v-if="showCheck"></van-checkbox>
                            <img src="@/assets/img/tabbar/my/footprint/tiaoxing@2x.png" alt="">
                        </div>
                    </div>
                    <div class="fl-right clearfix">
                        <div class="good-desc">
                            <span class="p1">哈森2019秋新款羊反绒尖头单鞋时尚婚鞋浅口高跟鞋女细跟HL96505</span><br>
                            <span class="p2">已售2953件</span>
                        </div>
                        <div class="good-price">
                            <span class="p3">货品已不能购买，如有需求请联系客服</span>
                            <span class="p2 fl-right" @click="toResembleGood">找相似</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import searchHead from '@/multiplexing/searchHead.vue'
export default {
    props: {
        
    },
    data() {
        return {
            checked:false,
            showCheck:true,
            searchHidden:true
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
        },
        onShowCheck(){
            this.showCheck = !this.showCheck
            console.log(this.showCheck,123);
        },
        //输入框获得焦点时触发
        onfocus(){
            this.$router.go(-1)
        },
        //点击搜索按钮
        onSearch(){
            console.log(123);
            // this.$router.push({name:'搜索商品1'})
        },
        //输入框内容变化时触发
        getInputVal(value){
            // console.log(value);
        },
    },
    components: {
        searchHead
    },  
};
</script>

<style scoped lang="less">
.goods-list{
    position: relative;
    .footprint-goods-content{
        background-color: #fff;
        position: relative;
        margin-bottom: 20px;
        overflow: hidden;
        padding: 20px 30px;
        .good-img{
            width: 160px;
            height: 160px;
            .img-checkbox{
                position: absolute;
                left:30px;
                top:30px;
                /deep/ .van-icon{
                    background:rgba(51,51,51,0.5);
                }
            }
        }
        .good-desc{
            // position: absolute;
            // top:39px;
            // left:211px;
            width: 486px;
            font-size:26px;
            color: #333;
            margin-bottom: 50px;
            .p1{
                line-height:39px;
                display: inline-block;
            }
            .p2{
                font-size:20px;
                color:rgba(102,102,102,1);
                margin-top:20px;
                display: inline-block;
            }
        }
        .good-price{
            color: #FA5300;
            font-size:36px;
            .p2{
                width:100px;
                height:38px;
                border:1px solid rgba(102,102,102,1);
                border-radius:19px;
                line-height: 38px;
                text-align: center;
                font-size: 16px;
                color: #666;
            }
            .p3{
                font-size: 18px;
                color: #666;
            }
        }
    }
}
</style>
