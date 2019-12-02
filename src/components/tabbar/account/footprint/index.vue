<template>
<!-- 我的足迹 未完成-->
    <div class="footprint">
        <div class="footprint-header">
            <van-icon name="arrow-left" class="arrow-left" @click="$router.go(-1)"/>
            <span class="header-t1" >我的足迹</span>
            <span class="header-t2" @click="editBj">{{editBjName}}</span>
            <van-icon name="ellipsis" class="ellipsis" @click="jumpRouter('消息')"/>
        </div>
        <div class="riqizujian"></div>
        <div class="footprint-goods" v-for="i in 7" :key="i" @click="jumpRouter('商品详情')">
           <div class="footprint-goods-header">
               <van-checkbox v-model="checked" icon-size="24px" class="goods-header-checkbox" v-if="showFooter" checked-color="#F83600"></van-checkbox>
               <span class="p1">10月9日 今天</span>
               
           </div>
           <div class="footprint-goods-content">
               <div class="good-img">
                   <van-checkbox v-model="checked" icon-size="24px" class="img-checkbox" checked-color="#F83600" v-if="showFooter"></van-checkbox>
                   <img src="@/assets/img/tabbar/my/footprint/tiaoxing@2x.png" alt="">
               </div>
               <div class="good-desc">
                   <span class="p1">哈森2019秋新款羊反绒尖头单鞋时尚婚鞋浅口高跟鞋女细跟HL96505</span><br>
                   <span class="p2">已售2953件</span>
               </div>
               <div class="good-price">
                   <span class="p1">￥259.00</span>
                   <van-icon name="star-o" class="star-o"/>
                   <span class="p2">收藏</span>
               </div>
           </div>
        </div>
        <div style="height:60px;"></div>
        <div class="settlement" v-if="showFooter">
            
            <span class="settlement-text">
                <van-checkbox v-model="checked" icon-size="24px" class="checkbox" checked-color="#F83600"></van-checkbox>
                <span class="btn1">删除足迹</span>
                <span class="p1">全选</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            checked:false,
            editBjName:'编辑',
            showFooter:false
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {
        showFooter:{
            handler:function(newVal, oldVal){
                this.editBjName = newVal? '完成':'编辑'
            },
        },
    },
    methods: {
        //点击编辑
        editBj(){
            this.showFooter = !this.showFooter
        },
        jumpRouter(name){
            this.$router.push({name})
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.footprint-header{
    width: 100%;
    height: 88px;
    background-color: #f2f3f5;
    text-align: center;
    position: relative;
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
    .header-t2{
        position: absolute;
        font-size:30px;
        right: 100px;
        top:30px;
    }
    .ellipsis{
        position: absolute;
        top:20px;
        right: 30px;
        font-size: 40px;
        transform: rotate(-90deg)
    }
}
.footprint-goods{
    .footprint-goods-header{
        height: 80px;
        line-height: 80px;
        .p1{
            font-size:26px;
            color: #333;
            margin-left:30px;
        }
        .goods-header-checkbox{
            display: inline-block;
            position: relative;
            left:50px;
            top: 13px;
            margin-right:20px;
        }
    }
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
                    background-color: #DCDCDC;
                    border: 2px solid #999
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
            }
            .star-o{
                font-size: 26px;
                margin-left: 208px;
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
    }
    
}
</style>
