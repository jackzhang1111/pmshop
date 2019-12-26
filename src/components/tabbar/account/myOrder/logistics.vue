<template>
    <div class="logistics">
        <balance-header></balance-header>
        <div class="logistics-con">
            <div class="baoguo">
                <div class="baoguo-header">包裹一</div>
                <div class="baoguo-con">
                    <div class="aaa">
                        <div class="good-img" v-for="i in 1" :key="i">
                            <img src="../../../../assets/img/goodsDetails/02@2x.png" alt="">
                        </div>
                        <div class="right-con"  v-if="true">
                            <div class="p1">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大包</div>
                        </div>
                    </div>
                    <div class="btns">
                        <div class="tk-btn">退款</div>
                    </div>
                </div>
            </div>
            <div class="wuliu">
                <div class="wuliu-title">
                    <span class="t1">TOSPINO物流</span>
                    <span class="t2">客服：61465656</span>
                </div>
                <div class="wuliu-num">物流单号：1416161625622611</div>
            </div>

            <div class="liucheng">
                <van-steps direction="vertical" :active="active" active-color="#FA5300" class="steps-con">
                    <van-step class="steps-item" v-for="i in 5" :key="i">
                        <h3>退款成功</h3>
                        <p class="p1">已成功退还到你的账户，总金额：{{jn}}74.48</p>
                        <p class="p2">2016-07-12 12:40</p>
                    </van-step>
                </van-steps>
            </div>
            <footer-exhibition></footer-exhibition>
            
        </div>
    </div>
</template>

<script>
import balanceHeader from './itemComponents/balanceHeader'
import footerExhibition from '@/multiplexing/footerExhibition'
export default {
    props: {

    },
    data() {
        return {
            active: 2
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
        balanceHeader,
        footerExhibition
    },
};
</script>

<style scoped lang="less">
.logistics{
    .logistics-con{
        padding: 0 30px 41px;
        .baoguo{
            padding: 0 40px;
            background-color: #fff;
            font-size:24px;
            color: #999;
            margin-bottom: 14px;
            .baoguo-header{
                height: 60px;
                line-height: 60px
            }
            .baoguo-con{
                padding: 20px 0 40px;
                .aaa{
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction:row;
                    .good-img{
                        display: inline-block;
                        width: 120px;
                        height: 120px;
                        vertical-align: top;
                        margin: 0 2px 20px 0;

                    }
                }
                
                .right-con{
                    display: inline-block;
                    width: 458px;
                    line-height:36px;
                    margin-left:20px;
                }
                .btns{
                    overflow: hidden;
                    .tk-btn{
                        width:88px;
                        height:44px;
                        border:1px solid rgba(153,153,153,1);
                        border-radius:22px;
                        line-height: 44px;
                        text-align: center;
                        font-size: 24px;
                        margin-top:14px;
                        float: right;
                    }
                }
                
            }
        }
        .wuliu{
            margin-bottom: 14px;
            .wuliu-title{
                height: 82px;
                background-color: #fff;
                line-height: 82px;
                padding: 0 40px;
                .t1{
                    font-size:32px;
                    font-weight:bold;
                    color: #333;
                    margin-right:36px;
                }
                .t2{
                    font-size:20px;
                    color: #333;
                    font-weight:bold;
                }
            }
            .wuliu-num{
                height: 58px;
                background-color: #F3F4F8;
                line-height: 58px;
                padding: 0 40px;
                font-size:24px;
            }
        }
    }
    .liucheng{
        .steps-con{
            background-color:#F8F8FA;
        }
        .steps-item{
            padding-bottom: 70px;
            padding-left: 29px;
            &:nth-last-child(1){
                padding-bottom: 0px;
                /deep/ .van-step__line{
                    display: none;
                }
            }
            h3{
                height: 50px;
                font-size:28px;
            }
            p{
                height: 40px;
            }
            .p1{
                font-size: 24px;
            }
            .p2{
                font-size: 20px;
            }
        /deep/ .van-step__circle-container{
            .van-step__circle{
                width: 12px;
                height: 12px;
            
           }
       }
        /deep/ .van-step__line{
            width: 2px;
        }
    }
    /deep/ .van-step--finish{
        .van-step__line{
            background-color: #FA5300;
        }
        .van-step__circle{
            background-color: #FA5300;
        }
    }
    }
    
}
</style>
