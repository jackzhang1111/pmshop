<template>
    <!-- 点击搜索框弹出的历史记录 -->
    <div class="search-record" >
        <search-head @onfocus="onfocus" @getInputVal="getInputVal" @onSearch="onSearch"></search-head>
        <div v-if="lishiShow" class="record">
            <div class="search-title">
                <span class="title-p1">历史搜索</span>
                <van-icon name="delete" @click="deleteRecord"/>
            </div>
            <div class="search-labels">
                <span class="label" v-for="history in historyList" :key="history.tableId">{{history.keyWord}}</span>
                
            </div>
            <div v-if="faxian">
                <div class="search-title m-t-60" >
                    <span class="title-p1">搜索发现</span>
                    <van-icon name="eye-o" v-if='iconShow' @click="iconShow = !iconShow"/>
                    <van-icon name="closed-eye" v-else @click="iconShow = !iconShow"/>
                </div>
                <div class="search-labels" v-if="iconShow">
                    <span class="label">历史搜索</span>
                    <span class="label">历史搜索</span>
                    <span class="label">历史搜索</span>
                    <span class="label">搜索</span>
                    <span class="label">历史搜索</span>
                    <span class="label">历史搜索</span>
                    <span class="label">搜索</span>
                </div>
            </div>
            
        </div>
        <div class="sousuo" v-else>
            <ul>
                <li v-for="product in searGoodList" :key="product.productId" @click="toGoodsOne">
                    <span>{{product.productName}}</span>
                    <span class="icon">
                        <img src="@/assets/img/search/enter@3x.png" alt="">
                    </span>
                </li>
            </ul>
        </div>

        <van-overlay :show="redordshow" @click="redordshow = false" >
            <!-- 删除历史记录 -->
            <div class="overlay-wrapper" @click.stop>
                <div class="overlay-wrapper-p1">
                    确认删除全部历史记录？
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
import searchHead from '@/multiplexing/searchHead.vue'
import {searchGoodApi,searchHistoryApi,searchProductApi} from '@/api/search/index';
export default {
    props: {
        
    },
    data() {
        return {
            iconShow:true,
            redordshow:false,
            lishiShow:true,
            faxian:true,
            flag:true,
            goodName:'',
            searGoodList:[],
            historyList:[],
            formData:{
                limit: 1,
                page: 1,
                seraname: "",
                sort: 1
            }
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.searchHistory()
    },
    watch: {
        goodName:{
            handler:function(newVal, oldVal){
                this.lishiShow = newVal=='' ? true : false
                console.log(newVal,'newVal');
            },
        },
    },
    methods: {
        deleteRecord(){
            this.redordshow = true;
        },
        toGoodsOne(){
            this.$router.push({name:'搜索商品1'})
        },
        //输入框获得焦点时触发
        onfocus(){
            this.lishiShow = false
            // if(this.$route.name == '历史记录' || this.$route.name == '收藏夹历史记录' || this.$route.name == '我的订单历史记录') return
            // this.$router.push({name:'历史记录'})
        },
        //输入框内容变化时触发
        getInputVal(value){
            this.goodName = value
            if(this.flag && value != ''){
                this.flag = false
                this.searchGood(value)
                setTimeout(()=>{
                    this.flag = true
                },500)
                 console.log(123);
            }
        },
        //搜索商品
        searchGood(value){
            searchGoodApi({keyname:value}).then(res => {
                if(res.code == 0){
                    this.searGoodList = res.datalist
                }
            })
        },
        //历史记录
        searchHistory(){
            searchHistoryApi().then(res => {
                if(res.code == 0){
                    this.historyList = res.dataList
                }
            })
        },
        //点击搜索按钮
        onSearch(){
            // 
            if(this.goodName == '') return
            this.searchProduct()
        },
        //搜索商品
        searchProduct(){
            searchProductApi(this.formData).then(res => {
                if(res.code == 0){
                    this.$router.push({name:'搜索商品1'})
                }
            })
        }


    },
    components: {
        searchHead
    },
};
</script>

<style scoped lang="less">
.search-record{
    position: relative;
    background-color: #fff;
    height: calc(100vh - 90px);
    box-sizing: border-box;
    .record{
        padding: 39px 30px 0;
    }
    .search-title{
        height: 60px;
        .title-p1{
            font-size: 30px;
            color: #333;
        }
        .van-icon{
            float: right;
            font-size: 40px;
        }
    }
    
    .search-labels{
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-align-content: center;
        align-content: flex-start;
        .label{
            display: inline-block;
            background-color: #F2F3F5;
            border-radius:25px;
            padding: 12px 26px;
            font-size: 26px;
            color: #333;
            margin:20px 20px 0px 0;
        }
    }
    .sousuo{
        ul{
            li{
                height: 87px;
                line-height: 87px;
                font-size:24px;
                color: #333;
                border-bottom:1px solid #DCDCDC;
                padding:0 30px;
                .icon{
                    float: right;
                    width: 30px;
                    height: 30px;
                    
                }
            }
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
