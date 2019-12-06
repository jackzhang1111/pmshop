<template>
    <div class="evaluaDetails">
        <details-header></details-header>
        <div class="commodity-tab">
            <van-tabs v-model="active" class="tab-list" title-active-color="#FA5300" @change="changeTab">
                <van-tab :title="i.title+`(${i.num})`" v-for="(i,index) in tabs" :key="index">
                    <div class="pingjia" v-for="data in dataList" :key="data.evaluaId">
                        <div class="diyi">
                            <div class="touxiang">
                                <img src="@/assets/img/confirmOrder/Twitter@2x.png" >
                            </div>
                            <span class="name">{{data.nickName}}</span>
                            <van-rate v-model="data.starNumber" disabled disabled-color="#FA5300"/>
                        </div>
                        <div class="dier">
                            <span>
                                {{data.evaContent}}
                            </span>
                        </div>
                        <div class="disan">
                            <span class="p1">数量:{{data.buyCount}}</span>
                            <span class="p2">规格：{{data.proUnit}}</span>
                            <span class="p3">{{data.evaTiem}}</span>
                        </div>
                    </div>
                </van-tab>
               <!-- <van-tab title="全部评价(10)">
                    <div class="pingjia" v-for="i in 3" :key="i">
                        <div class="diyi">
                            <div class="touxiang">
                                <img src="@/assets/img/confirmOrder/Twitter@2x.png" >
                            </div>
                            <span class="name">m**4</span>
                            <van-rate v-model="value" disabled disabled-color="#FA5300"/>
                        </div>
                        <div class="dier">
                            
                        </div>
                        <div class="disan">
                            <span class="p1">数量:259</span>
                            <span class="p2">规格：黑色/XL、粉色/2XL</span>
                            <span class="p3">2019-09-06</span>
                        </div>
                    </div>
                </van-tab> -->
            </van-tabs>
        </div>
    </div>
</template>

<script>
import detailsHeader from '@/multiplexing/detailsHeader'
import {productevaluationlistApi} from '@/api/home/commodityDetails'
export default {
    props: {

    },
    data() {
        return {
            active:0,
            value:2,
            formData:{
                skuid:'',
                page:1,
                limit:10,
                type:1
            },
            dataList:[],
            tabs:[
                {
                    title:'有内容的评价',
                    num:0
                },
                {
                    title:'全部评价',
                    num:0
                }
            ]
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.formData.skuid = this.$route.query.skuid
        this.productevaluationlist()
    },
    watch: {

    },
    methods: {
        //商品评论列表
        productevaluationlist(){
            productevaluationlistApi(this.formData).then(res => {
                if(res.code == 0){
                    this.dataList = res.Data.list
                    this.tabs[0].num = res.totalleft
                    this.tabs[1].num = res.totalright
                }
            })
        },
        //切换tab
        changeTab(index,title){
            this.formData.type = index+1
            this.formData.page = 1
            this.formData.limit = 10

            this.productevaluationlist()
        }
    },
    components: {
        detailsHeader
    },
};
</script>

<style scoped lang="less">
.commodity-tab{
    height: 80px;
    background-color: #fff;
    .tab-list{
        height: 80px;
        /deep/ .van-tabs__wrap{
            height: 80px;
            .van-tabs__nav{
                background-color: #fff;

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
    .pingjia{
        padding:30px 30px;
        background-color: #fff;
        border-bottom: 1px solid #DCDCDC;
        border-top: 1px solid #DCDCDC;
        .diyi{ 
            height: 50px; 
            line-height: 50px;
            position: relative;
            .touxiang{
                display: inline-block;
                width: 50px;
                height: 50px;
                position: absolute;
                top:0;
                left:0;
            }
            .name{
                margin-left:70px;
                font-size:28px;
                color: #333;
            }
            .van-rate{
                float: right;
            }
        }
        .dier{
            color: #333;
            font-size:28px;
            line-height:42px;
            margin:28px 0;
        }
        .disan{
            color: #666;
            font-size: 20px;
            span{
                margin-right:20px;
            }
            .p3{
                float: right;
            }
        }
    }
}
</style>
