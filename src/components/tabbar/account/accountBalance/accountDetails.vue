<template>
    <div class="account-details">
        <balance-header title="账户明细"></balance-header>
        <div class="account-tab">
            <van-tabs v-model="active" class="tab-list" title-active-color="#FA5300">
                <van-tab :title="tab.title" v-for="(tab,index) in tabList" :key="index">
                    <div class="tab-con">
                        <div class="con-p1">
                            <span>B20190502124536143</span>
                            <span>2019-05-12 18:21:30</span>
                        </div>
                        <div class="con-p2">
                            <span>信用卡</span>
                            <span>￥100.02</span>
                        </div>
                        <div class="con-p3">
                            <span>交易流水号：</span>
                            <span>2019232146456162656652265</span>
                            <span>成功</span>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import balanceHeader from './itemComponents/balanceHeader'
export default {
    props: {

    },
    data() {
        return {
            active:0,
            tabList:[
                {title:'充值记录'},
                {title:'消费记录'}
            ]
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
        balanceHeader
    },
};
</script>

<style scoped lang="less">
.account-details{
    .account-tab{
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
            .tab-con{
                padding: 30px;
                background-color: #fff;
                margin-bottom: 20px;
                .con-p1{
                    span{
                        &:nth-child(1){
                            font-size:24px;
                            margin-right:18px;
                        }
                        &:nth-child(2){
                            color: #999;
                        }
                    }
                }
                .con-p2{
                    margin:23px 0;
                    span{
                        &:nth-child(1){
                            font-size:26px;
                            color: #333;
                        }
                        &:nth-child(2){
                            float: right;
                            color: #FA5300;
                            font-size:36px;
                        }
                    }
                }
                .con-p3{
                    span{
                        &:nth-child(1){
                            font-size:18px;
                            color: #666;
                        }
                        &:nth-child(2){
                            color: #666;
                            font-size:22px;
                        }
                        &:nth-child(3){
                            float: right;
                            color: #999;
                            font-size:24px;
                        }
                    }
                }
            }
        }
    }
}
</style>
