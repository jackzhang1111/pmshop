<template>
<!-- 商品搜索模式一 -->
    <div class="search-goods-one">
        <search-head @onfocus="onfocus" @getInputVal="getInputVal" @onSearch="onSearch" :searName="searName"></search-head>
        <van-dropdown-menu active-color="#DB9000">
            <van-dropdown-item v-model="value1" :options="option1" class="scj" @close="saleSort('zh',value1)"></van-dropdown-item>
            <van-dropdown-item v-model="value2" :options="option2"  class="scj scj-none" @open="saleSort('xl')" @close="saleSort('xl')"/>
            <van-dropdown-item v-model="value3" :options="option3"  class="scj" @close="saleSort('jg',value3)"/>
            <van-icon name="apps-o" class="apps-o" @click="viewModel"/>
        </van-dropdown-menu>
        <div style="height:34px;"></div>
        <!-- 模式一 -->
        <div v-if="goodsShow1">
            <div class="footprint-goods-content" v-for="good in dataList" :key="good.skuId" @click="toProduDetail(good.skuId)">
                <div>
                    <div class="good-img">
                        <img :src='webUrl+good.imgUrl' :alt="good">
                    </div>
                    <div class="good-desc">
                        <span class="p1">{{good.supplyTitle}}</span><br>
                        <div class="country">
                            <div class="country-img">
                                <img :src="webUrl+good.locationUrl">
                            </div>
                            <div class="guojia">
                                <span>{{good.locationName}}</span><br>
                            </div>
                            <van-rate v-model="good.starNumber" readonly class="rate"/>
                            <span class="rate-num">{{good.manNumber}}</span>
                        </div>
                    </div>
                    <div class="good-price">
                        <span class="p1">￥{{good.discountPrice}}</span>
                        <span class="p3" v-if="good.salePriceFlag">￥{{good.salePrice}}</span>
                        <!-- 省略号,暂时先隐藏 -->
                        <!-- <span class="p2">
                            <van-icon name="ellipsis" />
                        </span> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 模式二 -->
        <div v-else>
            <footer-exhibition :showIlike="false" :footerData="footerData" :webUrl="webUrl" @clickPro="clickPro"></footer-exhibition>
        </div>
    </div>
</template>

<script>
import footerExhibition from '@/multiplexing/footerExhibition'
import searchHead from '@/multiplexing/searchHead.vue'
import {searchProductApi} from '@/api/search/index';
export default {
    props: {

    },
    data() {
        return {
            value:2,
            value1: 0,
            value2: 0,
            value3:0,
            option1: [
                { text: '综合', value: 0 },
                { text: '信用优先', value: 1 },
            ],
            option2: [
                { text: '销量', value: 0 },
            ],
            option3: [
                { text: '价格', value: 0 },
                { text: '从高到低', value: 1 },
                { text: '从低到高', value: 2 },
            ],
            checked:true,
            goodsShow1:true,
            formData:{
                limit: 10,
                page: 1,
                seraname: "",
                sort: 0,
                categoryId:0
            },
            dataList:[],
            webUrl:'',
            footerData:{},
            searName:''
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.formData.seraname = this.$route.query.seraname ? this.$route.query.seraname : ''
        this.formData.categoryId = this.$route.query.categoryId ? this.$route.query.categoryId : 0
        this.searName = this.$route.query.seraname
        this.searchProduct()
    },
    
    watch: {

    },
    methods: {
        saleSort(name,value){
            switch (name) {
				case 'zh':
					this.formData.sort = 0
					break;
				case 'xl':
					this.formData.sort = 2
                    break;
                case 'jg':
                    this.formData.sort = value == 1 ? 4 : 3
                    break;
            }
            if(value == 0) return
            this.searchProduct()
        },
        viewModel(){
            this.goodsShow1 = !this.goodsShow1
        },
        //输入框获得焦点时触发
        onfocus(){
            // console.log(this.$store.state);
            this.$router.go(-1)
            this.$store.state.serchName = this.searName
        },
        //输入框内容变化时触发
        getInputVal(value){
            console.log(value);
        },
        //点击搜索按钮
        onSearch(){
            // console.log(123);
        },
        //搜索商品
        searchProduct(){
            searchProductApi(this.formData).then(res => {
                if(res.code == 0){
                    this.footerData = res.Data
                    this.dataList = res.Data.list
                    this.webUrl = res.webUrl
                    this.dataList.forEach(item => {
                        item.salePriceFlag = true
                        if(item.discountPrice == null){
                            item.discountPrice = item.salePrice
                            item.salePriceFlag = false
                        }
                    })
                }
            })
        },
        //跳转到商品详情
        toProduDetail(skuId){
            this.$router.push({name:'商品详情',query:{skuId}})
        },
        //猜你喜欢点击了商品
        clickPro(skuId){
            this.$router.push({name:'商品详情',query:{skuId}})
        }
    },
    components: {
        footerExhibition,
        searchHead
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
            color: #333;
        }
        /deep/ .van-dropdown-menu__item--disabled{
            span{
                // display: none
                &::after{
                    display: none;

                }
            }
        }
        /deep/ .van-dropdown-menu__item{
            &:nth-child(2){
                span{
                    &::after{
                        display: none;

                    }
                }
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
    .scj-none{
        display: none;
    }
    .footprint-goods-content{
        width: 100%;
        height: 250px;
        background-color: #fff;
        position: relative;
        border-bottom: 1px solid #F2F3F5;
        .good-img{
            width: 200px;
            height: 200px;
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
            padding-right: 30px;
            position: absolute;
            top:20px;
            left:250px;
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
        // .country{
        //     position: absolute;
        //     top:90px;
        //     left:190px;
        //     color: #333;
        //     font-size:36px;
        //     .good-img{
        //         width: 30px;
        //         height: 30px;

        //     }
        //     .guojia{
        //         font-size: 20px;
        //         color: #DB9000;
        //         margin-left:70px;
        //         margin-top:-5px;
        //     }
        //     .rate{
        //         margin:0 10px 0 30px;
        //     }
        //     .rate-num{
        //         font-size: 20px;
        //         color: #999;
        //     }
        // }
        .good-price{
            position: absolute;
            top:184px;
            left:250px;
            color: #F83600;
            font-size:36px;
            .p2{
                position: absolute;
                left:470px;
                color: #666;
            }
            .p3{
                font-size: 16px;
                color: #666;
                text-decoration:line-through;
            }
        }
    }
    .country{
        color: #333;
        font-size:36px;
        .country-img{
            width: 30px;
            height: 30px;
            position: relative;
            top:20px;
            // left:30px;
        }
        .guojia{
            font-size: 20px;
            color: #DB9000;
            margin-left:50px;
            margin-top:-5px;
        }
        .rate{
            margin:0 10px 0 0px;
        }
        .rate-num{
            font-size: 20px;
            color: #999;
        }
    }
}
</style>
