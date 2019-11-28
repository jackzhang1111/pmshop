<template>
<!-- 你可能还喜欢,推荐商品页 -->
    <div class="footer-exhibition">
        <div class="nknxh">
            <span class="line-left"></span>
            <span class="icon">
                <img src="@/assets/img/tabbar/home/commodityDetails/disabled@2x.png">
            </span>
            
            <span class="nknxh-p1">你可能还喜欢</span>
            <span class="line-right"></span>
        </div>
        <div v-for="(i,index) in 3" :key="index" class="exhibition-con">
            <div class="exhibition-left" >
                <img src="@/assets/img/tabbar/home/chanpin@3x.png">
                <div class="produced">
                    <span class="icon">
                        <img src="@/assets/img/tabbar/home/guojia@3x.png" alt="">
                    </span>
                    <span class="produced-font">瑞士</span>
                </div>
                <div>
                    <span>欧格双肩包男士背包可扩容大容量出差旅行李包15.6寸笔记本电脑包</span>
                </div>
                <div class="score">
                    <van-rate v-model="value" readonly  color="#FA5300"/>
                    <span>477</span>
                </div>
                <div class="price">
                    <span class="price1">¥199.00</span>
                    <span class="price2">258.00</span>
                    <span class="poin">...</span>
                </div>
            </div>
            <div class="exhibition-right" >
                <img src="@/assets/img/tabbar/home/chanpin@3x.png">
                <div class="produced">
                    <span class="icon">
                        <img src="@/assets/img/tabbar/home/guojia@3x.png" alt="">
                    </span>
                    <span class="produced-font">瑞士</span>
                </div>
                <div>
                    <span>欧格双肩包男士背包可扩容大容量出差旅行李包15.6寸笔记本电脑包</span>
                </div>
                <div class="score">
                    <van-rate v-model="value" readonly  color="#FA5300"/>
                    <span>477</span>
                </div>
                <div class="price">
                    <span class="price1">¥199.00</span>
                    <span class="price2">258.00</span>
                    <span class="poin">...</span>
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
            value:1
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        console.log(456789);
    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.footer-exhibition{
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    overflow: hidden;
    margin-top: 20px;
    .nknxh{
        width: 100%;
        height: 85px;
        // background-color: #F2F3F5;
        text-align: center;
        line-height: 85px;
        position: relative;
        .line-left{
            display: inline-block;
            position: absolute;
            width: 40px;
            height: 2px;
            background-color: #666666;
            top:35px;
            left:190px;
        }
        .nknxh-p1{
            font-size:28px;
            color: #666666;
        }
        .line-right{
            display: inline-block;
            position: absolute;
            width: 40px;
            height: 2px;
            background-color: #666666;
            top:35px;
            right:190px;
        }
        .icon{
            display: inline-block;
            width: 30px;
            height: 30px;
        }
    }
    .exhibition-con{
        width: 100%;
        height: 570px;
        margin-bottom: 10px;
    }
    .exhibition-left{
        width: 340px;
        height: 570px;
        float: left;
        background-color: #fff;
        img{
            width: 340px;
            height: 340px;
        }
        .icon{
            position: relative;
            top:8px;
            img{
                width: 30px;
                height: 30px;
                margin-left: 10px;
            }
        }
        .produced{
            margin-bottom: 18px;
            .produced-font{
                color: #DB9000;
                margin-left:10px;
            }
        }
        .score{
            margin:10px 0 20px;
            .van-rate{
                margin-right:8px;
            }
        }
        .price{
            position: relative;
            .price1{
                font-size:28px;
                color: #FA5300;
                margin-right:11px;
            }
            .price2{
                font-size:18px;
                color: #666666;
                text-decoration:line-through
            }
            .poin{
                position: absolute;
                font-size: 60px;
                top: -35px;
                right: 0;
            }
        }
    }
    .exhibition-right{
        width: 340px;
        height: 570px;
        float: right;
        background-color: #fff;
        img{
            width: 340px;
            height: 340px;
        }
        .icon{
            position: relative;
            top:8px;
            img{
                width: 30px;
                height: 30px;
                margin-left: 10px;
            }
        }
        .produced{
            margin-bottom: 18px;
            .produced-font{
                color: #DB9000;
                margin-left:10px;
            }
        }
        .score{
            margin:10px 0 20px;
            .van-rate{
                margin-right:8px;
            }
        }
        .price{
            position: relative;
            .price1{
                font-size:28px;
                color: #FA5300;
                margin-right:11px;
            }
        .price2{
            font-size:18px;
            color: #666666;
            text-decoration:line-through
        }
        .poin{
            position: absolute;
            font-size: 60px;
            top: -35px;
            right: 0;
                }
        }
        
    }
}
</style>
