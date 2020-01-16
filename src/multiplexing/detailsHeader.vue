<template>
<!-- 商品详情头部搜素 -->
    <div>
        <div class="detailsHeader c-b-gray">
            <div class="logo">
                <van-icon name="arrow-left" size="17px" @click="$router.go(-1)"/>
            </div>
            <div class="search">
                <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    shape="round"
                    @focus="$router.push({name:'历史记录'})"
                    >
                </van-search>
            </div>
            <div class="icons">
                <!-- 最好能用icon做出显示消息数 -->
                <img src="@/assets/img/tabbar/home/scan@3x.png" class="img1">
                <van-icon name="shopping-cart-o" class="ellipsis" :info="shopCarInfo" @click="$router.push({name:'购物车'})" />
                <van-icon name="chat-o" class="xiaoxi" info=""  @click="$router.push({name:'消息'})"/>
            </div>
        </div>
        <div style="height:40px"></div>
    </div>
    
</template>

<script>
import {shopcartlistApi} from '@/api/shoppingCart/index'
export default {
    props: {
        
    },
    data() {
        return {
            value:'',
            shopCarInfo:'',
            formData:{
                page:1,
                limit:100
            }
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.shopcartlist()
    },
    watch: {

    },
    methods: {
         //购物车列表
        shopcartlist(){
            shopcartlistApi(this.formData).then(res => {
                if(res.code == 0){
                    this.shopCarInfo = res.Data.list.length > 99 ? '99+' : res.Data.list.length
                }
            })
        },
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.detailsHeader{
    width: 100%;
    height: 88px;
    position: fixed;
    top:0;
    z-index: 5;
    .logo{
        position: absolute;
        left:30px;
        top:50%;
        transform: translateY(-50%);
        img{
            width: 100%;
            height: 100%;
        }
    }
    .search{
        position: absolute;
        left:100px;
        top:40%;
        width: 420px;
        height: 58px;
        overflow: hidden;
        transform: translateY(-50%);
        /deep/ .van-search{
            background: #F2F3F5 !important;
            .van-field{
                width: 480px;
                height: 60px;
                line-height: 50px;
            }
            .van-field__clear{
                font-size: 30px;
            }
            .van-field__body{
                .van-field__control{
                    font-size: 26px;
                }
            }
        }
    }
    .icons{
        position: absolute;
        left:542px;
        top:50%;
        transform: translateY(-50%);
        .img1{
            width: 34px;
            height: 34px;
            margin-right: 25px;
        }
        .ellipsis{
            font-size: 34px;
            margin-right: 25px;
        }
        .xiaoxi{
            font-size: 34px;
        }
    }
    
}
</style>
