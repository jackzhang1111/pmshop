<template>
    <div>
       <div class="good-detail" v-for="i in 2" :key="i">
            <div class="good-detail-header">
                <span>订单编号：DJKLD561261</span>
                <span class="dfk c-orange">待审核</span>
            </div>
            <div class="good-detail-content">
                <div class="good-detail-img">
                    <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                </div>
                <div class="good-detail-title">
                    <span class="name">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大容量女...</span>
                    <div class="guige">
                        红色/L
                    </div>
                </div>
                <div class="price">
                    <br>
                    <br>
                    <div class="p4 fl-right">
                        x1
                    </div>
                </div>
                <div style="height:35px;"></div>
            </div>
            <div class="good-detail-dfh-footer">
                <div class="dfh-footer-top">
                    <span>查看其他2个商品</span>
                    <van-icon name="arrow-down" v-if="arrowDown"/>
                    <van-icon name="arrow-up" v-else/>
                </div>
                <div class="dfh-footer-bottom">
                    <div class="icon-img">
                        <img src="@/assets/img/confirmOrder/refund@2x.png" alt="">
                    </div>
                    <span>退货退款</span>
                    <div class="btn-detail c-orange" @click="toDetail">
                        查看详情
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
            arrowDown:true
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
        toDetail(){
            this.$router.push({name:'售后详情'})
        },
        jumpRouter(name){
            this.$router.push({name})
        },
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.good-detail{
    margin-bottom: 20px;
    .good-detail-header{
        width: 100%;
        height: 79px;
        line-height: 79px;
        font-size:26px;
        color: #333;
        background-color: #fff;
        padding-left: 30px;
        box-sizing: border-box;
        border-bottom: 1px solid #F2F3F5;
        .dfk{
            float: right;
            margin-right: 30px;
        }
    }
    .good-detail-content{
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 30px;
        position: relative;
        .good-detail-img{
            width: 150px;
            height: 150px;
            position: relative;
            top:30px;
            left:0px;
            display: inline-block;
        }
        .good-detail-title{
            display: inline-block;
            position: absolute;
            width: 336px;
            top:30px;
            left:200px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            .name{
                display: inline-block;
                margin-bottom: 24px;
                color: #333;
                font-size: 22px;
                -webkit-line-clamp:2;
                display: -webkit-box; 
                -webkit-box-orient:vertical;
                overflow:hidden; 
                text-overflow: ellipsis;
            }
            .guige{
                color: #999;
                font-size: 18px;
                display: inline-block;
                margin-bottom: 12px;
            }
            
        }
        .price{
            position: absolute;
            top:30px;
            right:30px;
            text-align: right;
            .p3{
                font-size:28px;
                color: #333;
                margin-bottom: 5px;
            }
            .p4{
                color: #999;
                font-size: 20px;
            }
            .p5{
                margin-top:75px;
                span{
                    &:nth-child(3){
                        font-size: 30px;
                    }
                }
            }
            .selection-right-stepper{
                position: relative;
                width: 100%;
                height: 156px;
                .add-btn{
                    position: absolute;
                    top:20px;
                    right:0;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                    background-color: #EEEEEE;
                    color: #666;
                }
                .reduce-btn{
                    position: absolute;
                    top:20px;
                    right:128px;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                    background-color: #EEEEEE;
                    color: #666;
                }
                .num{
                    position: absolute;
                    top:20px;
                    right:40px;
                    width: 88px;
                    height: 40px;
                    border-top: 1px solid #999999;
                    border-bottom: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
    }
    .good-detail-footer{
        height: 100px;
        border-top: 1px solid #F2F3F5;
        font-size: 30px;
        color: #666;
        background-color: #fff;
        .lan{
            height: 100%;
        }
        .btn-qzf{
            width:150px;
            height:60px;
            border:1px solid rgba(250,83,0,1);
            border-radius:30px;
            line-height: 60px;
            text-align: center;
            position: relative;
            top:50%;
            transform: translateY(-50%)

        }
        .btn-qxdd,.btn-xgdz{
            width:180px;
            height:60px;
            border:1px solid rgba(153,153,153,1);
            border-radius:30px;
            line-height: 60px;
            text-align: center;
            position: relative;
            top:50%;
            transform: translateY(-50%);
            margin-right:20px;
        }
    }
    .good-detail-dfh-footer{
        border-top: 1px solid #F2F3F5;
        font-size: 30px;
        color: #333;
        background-color: #fff;
            
        .dfh-footer-top{
            height: 60px;
            text-align: center;
            font-size: 20px;
            line-height:60px;
            border-bottom: 1px solid #F2F3F5;
        }
        .dfh-footer-bottom{
            height: 100px;
            line-height: 100px;
            font-size: 26px;
            color: #333;
            padding: 0 30px;
            .icon-img{
                width: 36px;
                height: 36px;
                display: inline-block;
                vertical-align:sub;
                margin-right:22px;
            }
            .btn-detail{
                width:160px;
                height:60px;
                border:2px solid rgba(250,83,0,1);
                border-radius:6px;
                float: right;
                margin-top:18px;
                font-size:26px;
                text-align: center;
                line-height: 60px;
            }
        }
        
    }
}
</style>
