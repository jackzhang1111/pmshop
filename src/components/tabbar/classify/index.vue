<template>
<!-- 分类 -->
    <div class="classify">
        <search-header></search-header>
        <div class="classify-con">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="标签名称" v-for="(i,index) in 10" :key="index"/>
                
            </van-sidebar>
            <div class="classify-right">
                <div class="banner">
                    <img src="@/assets/img/tabbar/classify/banner@2x.png">
                </div>
                <div class="recommend">
                    <span class="title">热门推荐</span>
                    <div>
                        <van-row gutter="40">
                            <van-col span="7" v-for="i in 3" :key="i">
                                <div class="aaa" style="margin-bottom:0">
                                    <img src="@/assets/img/tabbar/classify/01@2x.png">
                                    <span class="name">高跟鞋</span>
                                </div>
                            </van-col>
                           
                        </van-row>
                    </div>
                </div>
                <div class="recommend">
                    <span class="title">热门推荐</span>
                    <div>
                        <van-row gutter="40" v-for="i in 3" :key="i">
                            <van-col span="7" v-for="i in 3" :key="i">
                                <div class="aaa">
                                    <img src="@/assets/img/tabbar/classify/01@2x.png">
                                    <span class="name">高跟鞋</span>
                                </div>
                            </van-col>
                           
                        </van-row>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import searchHeader from '@/multiplexing/searchHeader'
export default {
    props: {

    },
    data() {
        return {
            activeKey:0
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
        searchHeader
    },
};
</script>

<style scoped lang="less">
.classify-con{
    position: relative;
    .van-sidebar{
        width: 176px;
        margin: 15px 0 0 0;
        display: inline-block;
        .van-sidebar-item{
            height: 110px;
            line-height: 70px;
            background-color: #F2F3F5;
            margin-bottom: 2px;
        }
        
    }
    .classify-right{
        width: 524px;
        height: 100%;
        position: absolute;
        top:30px;
        right:30px;
        // overflow: hidden;
        overflow-x: hidden;
        overflow-y: auto;
        .banner{
            width: 524px;
            height: 180px;
            
        }
        .recommend{
            margin-top: 40px;
            .title{
                font-size: 20px;
                color: #666666;
                display: inline-block;
                margin-bottom: 19px;
            }
            .aaa{
                width: 160px;
                height: 190px;
                margin-bottom: 17px;
                img{
                    width: 160px;
                    height: 140px;
                }
                .name{
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    background-color: #fff;
                    color: #333333;
                    font-size: 20px;
                }
            }
        }
    }
    .margin-b-0{
        margin-bottom: 0
    }
}


</style>
