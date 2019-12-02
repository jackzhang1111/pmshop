<template>
<!-- 收藏夹 -->
    <div class="favorites">
        <div class="favorites-header">
            <van-icon name="arrow-left" class="arrow-left" @click="$router.go(-1)"/>
            <span class="header-t1">收藏夹(2)</span>
            <van-icon name="search"  class="search" @click="toSearch"/>
            <span class="bj" @click="editBj">{{editBjName}}</span>
        </div>
        <!-- 下拉框 -->
        <van-dropdown-menu active-color="#DB9000">
            <van-dropdown-item v-model="value1" :options="option1" class="scj"/>
            <van-dropdown-item v-model="value2" :options="option2" disabled />
            <van-dropdown-item v-model="value2" :options="option2" disabled />
            <van-icon name="apps-o" class="apps-o " @click="iconView"/>
        </van-dropdown-menu>
        <div v-if="viewOne">
            <!-- 收藏夹收藏商品(失效和未失效) -->
            <good-list ref="goodList"></good-list>
        </div>
        
        <div class="img-list" v-else>
            <div v-for="i in 7" :key="i">
                <van-checkbox v-model="checked" icon-size="15px" class="img-checkbox" checked-color="#FA5300" v-if="showFooter"></van-checkbox>
                <img src="@/assets/img/confirmOrder/product@2x.png">
            </div>
        </div>
        <!-- 你可能还喜欢,推荐商品页 -->
        <footer-exhibition></footer-exhibition>
        <div style="height:60px;"></div>
        <div class="settlement" v-if="showFooter">
            <span class="settlement-text" v-if="true">
                <van-checkbox v-model="checked" icon-size="24px" class="checkbox" checked-color="#FA5300"></van-checkbox>
                <span class="btn1">取消收藏</span>
                <span class="p1">全选</span>
            </span>
        </div>
    </div>
</template>

<script>
import footerExhibition from '@/multiplexing/footerExhibition'
import goodList from './itemComponents/goodList'
export default {
    props: {

    },
    data() {
        return {
            value1: 0,
            value2: 'a',
            option1: [
                { text: '收藏时间', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ],
            option2: [
                { text: '', value: '' },
                { text: '', value: '' },
                { text: '', value: '' },
            ],
            checked:true,
            showFooter:false,
            editBjName:'编辑',
            viewOne:true
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        // 收藏夹搜索商品组件搜索头隐藏
        this.$refs.goodList.searchHidden = false
    },
    watch: {
        showFooter:{
            handler:function(newVal, oldVal){
                this.editBjName = newVal? '完成':'编辑'
            },
        },
    },
    methods: {
        //点击搜索页面
        toSearch(){
            this.$router.push({name:'收藏夹历史记录'})
        },
        //点击编辑
        editBj(){
            this.showFooter = !this.showFooter
            if(this.$refs.goodList){
                this.$refs.goodList.onShowCheck()
            }
            
            console.log(this.$refs.goodList);
        },
        //点击视图图标
        iconView(){
            this.viewOne = !this.viewOne
        }
    },
    components: {
        footerExhibition,
        goodList
    },
};
</script>

<style scoped lang="less">
.favorites{
    position: relative;
    .favorites-header{
        width: 100%;
        height: 88px;
        background-color: #f2f3f5;
        text-align: center;
        position: relative;
        line-height: 88px;
        .arrow-left{
            position: absolute;
            top:20px;
            left:30px;
            font-size: 40px;
            
        }
        .header-t1{ 
            display: inline-block;
            line-height: 88px;
            font-size: 36px;
            color: #010101;
        }
        .search{
            position: absolute;
            right:110px;
            font-size:30px;
            top:24px;
        }
        .bj{
            position: absolute;
            font-size:30px;
            color: #333333;
            right:30px;
            // padding-right:30px;
        }
        
    }
    /deep/ .van-dropdown-menu{
        height: 69px;
        font-size: 26px;
        background-color: #F2F3F5;
         .van-dropdown-menu__title{
            height: 60px;
            line-height: 60px;
            color: #DB9000;
        }
        /deep/ .van-dropdown-menu__item--disabled{
            span{
                display: none
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
            height: 60px;
        }
    }
    .goods-list{
        position: relative;
        .footprint-goods-content{
            width: 100%;
            height: 250px;
            background-color: #fff;
            position: relative;
            margin-bottom: 20px;
            .good-img{
                width: 210px;
                height: 210px;
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
                position: absolute;
                top:39px;
                left:259px;
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
            .good-price{
                position: absolute;
                top:184px;
                left:260px;
                color: #FA5300;
                font-size:36px;
                .p2{
                    font-size: 26px;
                    color: #333333;
                    width:120px;
                    height:40px;
                    margin-left:157px;
                    display: inline-block;
                    border:1px solid rgba(102,102,102,1);
                    border-radius:40%;
                    text-align: center;
                    line-height: 40px;
                }
                .p3{
                    font-size: 18px;
                    color: #666;
                }
            }
        }
    }
    .settlement{
        width: 100%;
        height: 120px;
        background-color:#fff;
        position:fixed;
        bottom:0px;
        z-index:999;
        line-height: 120px;
        border-top:2px solid #DCDCDC;
        border-bottom:2px solid #DCDCDC;
        .checkbox{
            display: inline-block;
            margin:39px 0 0 30px;
        }
        .settlement-text{
            position: absolute;
            display: inline-block;
            width: 100%;
            height: 100%;;
            top:0px;
            left:0px;
            font-size: 32px;
            .p2,.p3{
                float: right;
            }
            .p1{
                position: absolute;
                left:103px;
                color: #999;
            }
            .p3{
                margin-left:18px;
            }
            .btn{
                float: right;
                width:160px;
                height:90px;
                background:linear-gradient(-90deg,rgba(248,54,0,1),rgba(250,83,0,1));
                border-radius:45px;
                color:rgba(255,255,255,1);
                line-height:90px;
                text-align: center;
                margin:16px 30px 0 18px;
            }
            .btn1{
                position: absolute;
                width: 240px;
                height: 100%;
                right:0px;
                border:2px solid rgba(250,83,0,1);
                color: #fff;
                font-size:34px;
                line-height: 120px;
                text-align: center;
                background-color: #FA5300;
            }
            /deep/ .van-icon-success{
                border: 2px solid #999
            }
        }
        
    }
    .img-list{
        position: relative;
        padding: 0 30px;
        margin-bottom: 10px;
        div{
            display: inline-block;
            position: relative;
            width: 23%;
            height: 165px;
            margin:0 0px 10px 10px;
            // background-color: red;
        }
        .img-checkbox{
            display: inline-block;
            position: absolute;
        }
        /deep/ .van-icon-success{
            border: 2px solid #999
        }
    }
}
</style>
